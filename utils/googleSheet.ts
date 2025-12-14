
// Hàm chuyển đổi link pubhtml sang csv chuẩn xác
const getCsvUrl = (url: string) => {
  let csvUrl = url;
  
  // Xử lý chuyển đổi pubhtml -> pub
  if (url.includes('pubhtml')) {
    csvUrl = url.replace('pubhtml', 'pub');
  }

  // Thêm tham số output=csv nếu chưa có
  if (!csvUrl.includes('output=csv')) {
    const separator = csvUrl.includes('?') ? '&' : '?';
    csvUrl = `${csvUrl}${separator}output=csv`;
  }
  
  // Thêm timestamp để tránh trình duyệt lưu cache cũ (giúp cập nhật ngay lập tức)
  return `${csvUrl}&t=${Date.now()}`;
};

// Hàm chuẩn hóa key (xóa dấu, xóa khoảng trắng, về chữ thường)
const normalizeKey = (key: string) => {
  return key.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, ''); // Chỉ giữ lại chữ và số
};

// Hàm phân tích CSV an toàn hơn
const parseCSV = (text: string) => {
  // Tách dòng, lọc bỏ dòng trống
  const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');
  if (lines.length < 2) return {};

  const headers = lines[0].split(',').map(h => normalizeKey(h));
  
  // Tách dữ liệu: Regex này giúp tách dấu phẩy đúng ngay cả khi nội dung có dấu phẩy (nhưng nằm trong ngoặc kép)
  // Nếu dữ liệu đơn giản, split(',') cũng được, nhưng cách này an toàn hơn cho tương lai
  const values = lines[1].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

  const data: Record<string, string> = {};
  
  headers.forEach((header, index) => {
    if (values[index] !== undefined) {
      let value = values[index].trim();
      
      // Loại bỏ dấu ngoặc kép bao quanh nếu có (do Google Sheet xuất ra)
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      
      // Xử lý trường hợp 2 dấu ngoặc kép liên tiếp ("") thành 1 dấu (")
      value = value.replace(/""/g, '"');
      
      data[header] = value;
    }
  });

  return data;
};

export const fetchSheetData = async (sheetUrl: string) => {
  try {
    const csvUrl = getCsvUrl(sheetUrl);
    // console.log("Fetching from:", csvUrl); // Bật dòng này nếu cần debug link
    const response = await fetch(csvUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch sheet: ${response.status} ${response.statusText}`);
    }
    
    const text = await response.text();
    return parseCSV(text);
  } catch (error) {
    console.warn("Lưu ý: Không thể tải dữ liệu từ Google Sheet (Sẽ dùng dữ liệu mặc định).", error);
    return null;
  }
};

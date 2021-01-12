const day13 = [{
  word: "enterprise",
  mean: "Nhãn hiệu kinh doanh (n)"
}, {
  word: "essential",
  mean: "Cần thiết, không thể thiếu (adj)"
}, {
  word: "prerequisite",
  mean: "Điều kiện tiên quyết (n)"
}, {
  word: "surface",
  mean: "Bề mặt (n)"
}, {
  word: "smooth",
  mean: "Mịn, êm ả, mượt mà (adj)"
}, {
  word: "source",
  mean: "Nguồn, nguồn gốc (n)"
}, {
  word: "resource",
  mean: "Tài nguyên, nguồn tài nguyên (n)"
}, {
  word: "disagreement",
  mean: "Bất đồng quan điểm, bất đồng ý kiến, sự bất đồng (n)"
}, {
  word: "argument",
  mean: "Tranh cãi, sự tranh luận (n)"
}, {
  word: "disagree",
  mean: "Không đồng ý (v)"
}, {
  word: "crime",
  mean: "Tội phạm (n)"
}, {
  word: "tension",
  mean: "Sự căng thẳng, sự hồi hộp (n)"
}, {
  word: "nervousness",
  mean: "Sự lo lắng (n)"
}, {
  word: "stationery",
  mean: "Văn phòng phẩm, đồ dùng học tập, đồ dùng văn phòng (n)"
}, {
  word: "carrier",
  mean: "Người vận chuyển, người đưa thư, vận chuyển (n)"
}, {
  word: "catalog",
  mean: "Danh mục (n)"
}, {
  word: "fulfill",
  mean: "Thực hiện, tiến hành (những điều đã hứa sẽ làm) (v)"
}, {
  word: "integral",
  mean: "Một phần không thể thiếu (adj)"
}, {
  word: "minimize",
  mean: "Giảm thiểu, giảm tới mức tối thiểu (v)"
}, {
  word: "on hand",
  mean: "Có sẵn để dùng (adj)"
}, {
  word: "sufficient",
  mean: "Đủ, vừa đủ, đủ dùng (adj) = enough"
}, {
  word: "evidence",
  mean: "Chứng cớ, bằng chứng (n)"
}, {
  word: "scientific",
  mean: "Khoa học, thuộc về khoa học (adj)"
}, {
  word: "insufficient",
  mean: "Không đủ (adj)"
}, {
  word: "compile",
  mean: "Biên soạn, thu thập tài liệu (v)"
}, {
  word: "impose",
  mean: "Áp đặt, bắt chịu (v)"
}, {
  word: "prompt",
  mean: "Nhanh chóng, ngay lập tức (adj)"
}, {
  word: "prompt",
  mean: "Gây ra, thúc đầy (v)"
}, {
  word: "rectify",
  mean: "Khắc phục, sửa chữa (v)"
}, {
  word: "liability",
  mean: "Nghĩa vụ, bổn phận, trách nhiệm pháp lý (n)"
}, {
  word: "scan",
  mean: "Nhìn lướt qua, quét (v)"
}, {
  word: "subtract",
  mean: "Trừ đi, lấy đi (v)"
}, {
  word: "tedious",
  mean: "Nhàm chán, tẻ nhạt (adj) = boring"
}, {
  word: "balance",
  mean: "Số dư tài khoản, cân bằng, thăng bằng (n)"
}, {
  word: "cautious",
  mean: "dè dặn, thận trọng (adj) = conservative"
}, {
  word: "preservation",
  mean: "Bảo quản, bảo tồn (v)"
}, {
  word: "dividend",
  mean: "Cổ tức, tiền lãi cổ phần (n)"
}, {
  word: "down payment",
  mean: "Tiền đặt cọc, khoản tiền trả trước (n) = deposit"
}, {
  word: "mortgage",
  mean: "Tài sản thế chấp, tiền thế chấp (n), thế chấp, cắm đồ (v)"
}, {
  word: "restriction",
  mean: "Sự giới hạn, sự hạn chế (n)"
}, {
  word: "signature",
  mean: "Chữ ký (n)"
}, {
  word: "transaction",
  mean: "Giao dịch, công việc kinh doanh (n)"
}, {
  word: "accounting",
  mean: "Kế toán, kế toàn viên  (n) = accountant"
}, {
  word: "accumulate",
  mean: "Tích lũy, tích tụ, cộng dồn lại (v)"
}, {
  word: "asset",
  mean: "Tài nguyên, tài sản (n)"
}, {
  word: "valuable",
  mean: "Có giá trị, quý báu (adj)"
}, {
  word: "examination",
  mean: "Sự tiến hành kiểm tra (n)"
}, {
  word: "audit",
  mean: "Kiểm toán, công việc kiểm toán, kiểm toán sổ sách (n, v)"
}, {
  word: "build up",
  mean: "Làm tăng theo thời gian, tăng dần lên (v)"
}, {
  word: "profitable",
  mean: "Có lợi nhuận, có sinh lời (adj)"
}, {
  word: "unprofitable",
  mean: "Không có lợi nhuận, không sinh lời (adj)"
}, {
  word: "attitude",
  mean: "Thái độ (n)"
}, {
  word: "profit",
  mean: "Lợi nhuận, lời (n)"
}, {
  word: "reconcile",
  mean: "Dung hòa, làm cho phù hợp (v)"
}, {
  word: "turnover",
  mean: "Doanh thu (n)"
}, {
  word: "aggressive",
  mean: "Hung hăng, hung bạo (adj)"
}, {
  word: "violent",
  mean: "Bạo lực, bạo hành (adj)"
}, {
  word: "commitment",
  mean: "Sự cam kết (n)"
}, {
  word: "fund",
  mean: "Quỹ (n)"
}, {
  word: "long-term",
  mean: "Lâu dài, dài hạn (adj)"
}, {
  word: "during",
  mean: "Trong suốt (adv)"
}, {
  word: "portfolio",
  mean: "Danh mục sản phẩm, danh mục đầu tư (n)"
}, {
  word: "pull out",
  mean: "Rút khỏi, rút ra khỏi, rút lui (v)"
}, {
  word: "judgment",
  mean: "Phán đoán (v)"
}, {
  word: "wise",
  mean: "Sáng suốt, khôn ngoan, thông thái (adj)"
}, {
  word: "give up",
  mean: "Từ bỏ (v)"
}, {
  word: "joint",
  mean: "Chung, được chia sẻ, cùng (adj)"
}, {
  word: "owe",
  mean: "Nợ (n, v)"
}, {
  word: "explanation",
  mean: "Lời giải thích, sự giải thích (n)"
}, {
  word: "penalty",
  mean: "Hình phạt, tiền phạt (n)"
}, {
  word: "spouse",
  mean: "Vợ / chồng (n)"
}, {
  word: "withhold",
  mean: "Giữ lại, cầm lại, giấu đi (v)"
}, {
  word: "desired",
  mean: "Muốn có (adj)"
}, {
  word: "forecast",
  mean: "Dự báo (v)"
}, {
  word: "overall",
  mean: "Nhìn chung, nói chung (adj, adv)"
}, {
  word: "perspective",
  mean: "Quan điểm, góc nhìn cá nhân (n)"
}, {
  word: "realistic",
  mean: "Thực tế, có óc thực tế (adj)"
}, {
  word: "target",
  mean: "Mục tiêu, đặt mục tiêu (n, v)"
}, {
  word: "translation",
  mean: "Sự dịch, bản dịch, sự chuyển (n)"
}, {
  word: "typical",
  mean: "Điển hình, đặc thù, tiêu biểu (adj)"
}, {
  word: "yield",
  mean: "Lợi nhuận, sản lượng (n) sinh lời (v)"
}, {
  word: "positive",
  mean: "Tích cực (adj)"
}, {
  word: "optimistic",
  mean: "Lạc quan, yêu đời (adj)"
}, {
  word: "produce",
  mean: "Sản xuất (v)"
}, {
  word: "near",
  mean: "Gần (adj)"
}, {
  word: "adjacent",
  mean: "Gần kề, liền kề, ngay sát, sát ngay (adj)"
}]

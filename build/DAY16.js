const day16 = [{
  word: "letter",
  mean: "Bức thư (n)"
}, {
  word: "inspire",
  mean: "Truyền cảm hứng (v)"
}, {
  word: "fall to",
  mean: "Là trách nhiệm của ... (v)"
}, {
  word: "individual",
  mean: "Cá nhân, riêng lẻ (n)"
}, {
  word: "pick up",
  mean: "Nhặt lên, nhận làm, đảm nhiệm (v)"
}, {
  word: "draw",
  mean: "Vẽ, lôi kéo, thu hút (v)"
}, {
  word: "incorporate",
  mean: "Sát nhập, tích hợp, kết hợp (v)"
}, {
  word: "influx",
  mean: "Sự tràn vào, sự nhẩy vào (n)"
}, {
  word: "profession",
  mean: "Nghề nghiệp (n) = occupation (n)"
}, {
  word: "relinquish",
  mean: "Từ bỏ, giao lại, dâng (v)"
}, {
  word: "theme",
  mean: "Đề tài, chủ đề (n)"
}, {
  word: "assist",
  mean: "Trợ giúp, hỗ trợ (v)"
}, {
  word: "coordinate",
  mean: "Điều phối, phối hợp (v) : Hành động làm cho điều gì đó xảy ra suôn sẻ"
}, {
  word: "ideal",
  mean: "Lý tưởng (adj)"
}, {
  word: "lead time",
  mean: "Tiến độ, khoảng thời gian thực hiện (n)"
}, {
  word: "proximity",
  mean: "Sự lân cận, trạng thái gần (thời gian, không gian, địa điểm) - proximal (adj)"
}, {
  word: "site",
  mean: "Nơi, chỗ (n), Đặt, để (v)"
}, {
  word: "period",
  mean: "Giai đoạn, một khoảng thời gian (n)"
}, {
  word: "stage",
  mean: "Sân khấu (n), trình diễn, biểu diễn (v)"
}, {
  word: "performance",
  mean: "Buổi biểu diễn, hiệu năng (n)"
}, {
  word: "announcement",
  mean: "Lời thông báo, lời tuyên bố, cáo thị (n)  - announce (v)"
}, {
  word: "beverage",
  mean: "Đồ uống (n)"
}, {
  word: "blanket",
  mean: "Chăn (n) , trùm chăn (v)"
}, {
  word: "claim",
  mean: "Đòi hỏi, yêu cầu (v)"
}, {
  word: "embark",
  mean: "Lên tàu, bắt đầu một chuyến đi (đặc biệt là tàu) (v)"
}, {
  word: "journey",
  mean: "Hành trình, chuyến đi (n)"
}, {
  word: "itinerary",
  mean: "Lịch trình (n)"
}, {
  word: "valid",
  mean: "Hợp lệ, có hiệu lực (adj)"
}, {
  word: "deal with",
  mean: "Giải quyết, xoay sở (v)"
}, {
  word: "economical",
  mean: "Tiết kiệm, mang tính tiết kiệm (adj)"
}, {
  word: "equivalent",
  mean: "Tương đương, mang tính tương đương (adj)"
}, {
  word: "excursion",
  mean: "Chuyến đi chơi, chuyến dã ngoại (n)"
}, {
  word: "pleasure",
  mean: "Niềm vui, thú vui (n)"
}, {
  word: "prospective",
  mean: "Thuộc về tương lai, sẽ xảy ra trong tương lai (adj)"
}, {
  word: "substantial",
  mean: "Nhiều, lớn, giàu có, đáng kể (adj)"
}, {
  word: "directory",
  mean: "Danh bạ, sách hướng dẫn, sách chỉ dẫn (n)"
}, {
  word: "duration",
  mean: "Khoảng thời gian (Điều gì đó tồn tại)"
}, {
  word: "entitle",
  mean: "Cho phép, cấp phép, cấp quyền (v)"
}, {
  word: "fare",
  mean: "Tiền xe, tiền vé, giá vé (n)"
}, {
  word: "offset",
  mean: "Đền bù, bù đắp, bù lại (v) compensate"
}, {
  word: "punctual",
  mean: "Đúng giờ (adj)"
}, {
  word: "relatively",
  mean: "Tương đối (adv)"
}, {
  word: "remainder",
  mean: "Phần còn lại, số còn lại, phần dư (n)"
}, {
  word: "advance",
  mean: "Sự nâng cao, sự tiến bộ (n)"
}, {
  word: "chain",
  mean: "Chuỗi, dây chuyền, dây chuyền sản suất (n)"
}, {
  word: "check in",
  mean: "Đăng ký, đăng ký vào (v)"
}, {
  word: "expect",
  mean: "Mong chờ, chờ đợi (v)"
}, {
  word: "housekeeper",
  mean: "Người trông nhà, quản gia (n)"
}, {
  word: "preclude",
  mean: "Ngăn ngừa, loại trừ (v)"
}, {
  word: "quote",
  mean: "Trích dẫn (v), Đoạn trích dẫn, lời trích dẫn (n)"
}, {
  word: "rate",
  mean: "Sự đánh giá, sự xếp hạng (n)"
}, {
  word: "coincide",
  mean: "Xảy ra đồng thời, xầy ra cùng lúc (v), trùng"
}, {
  word: "confusion",
  mean: "Sự bối dỗi, sự nhầm lần, sự mơ hồ, sự lú lẫn (n)"
}, {
  word: "intend",
  mean: "Dự định, có ý muốn làm điều gì đó (v)"
}, {
  word: "license",
  mean: "Giấy phép (n)"
}, {
  word: "tempt",
  mean: "Dụ, cám dỗ, lôi kéo (v)"
}, {
  word: "thrill",
  mean: "Sự sợ hãi, sự rùng mình (n)"
}, {
  word: "tier",
  mean: "Tầng lớp, cấp bậc (n)"
}, {
  word: "additional",
  mean: "Bổ sung (adj)"
}, {
  word: "passenger",
  mean: "Hành khách (n)"
}, {
  word: "attain",
  mean: "Thu được, đạt được, có được (v)"
}, {
  word: "combine",
  mean: "Kết hợp, phối hợp (v)"
}, {
  word: "entertainment",
  mean: "Sự giải trí, sự tiêu khiển (n)"
}, {
  word: "range",
  mean: "Phạm vi, lĩnh vực (n)"
}, {
  word: "separate",
  mean: "Riêng rẽ, tách rời (adj)"
}, {
  word: "successive",
  mean: "Liên tục, liên tiếp, kết tiếp (adj)"
}, {
  word: "approach",
  mean: "Tiếp cận, lại gần (v), sự tiếp cận, cách tiếp cận (n)"
}, {
  word: "audience",
  mean: "Khán giả (n)"
}, {
  word: "dialogue",
  mean: "Đoạn hội thoại, cuộc trò truyện (n) = conversation"
}, {
  word: "medication",
  mean: "Thuốc (n)"
}, {
  word: "occur",
  mean: "Xảy ra (v)"
}, {
  word: "rehearse",
  mean: "diễn tập, tập kịch (v)"
}, {
  word: "sold out",
  mean: "Hết hàng, bán hết (adj)"
}, {
  word: "broad",
  mean: "Rộng, mênh mông, bao la (adj)"
}, {
  word: "favorite = favourite",
  mean: "Yêu thích (adj)"
}, {
  word: "instinct",
  mean: "Bản năng, linh cảm (n)"
}, {
  word: "relaxation",
  mean: "Sự nghỉ ngơi, sự giải trí (n)"
}, {
  word: "taste",
  mean: "Sự nếm thử (mùi vị) (n)"
}, {
  word: "urge",
  mean: "Sự ham muốn mạnh mẽ, sự mong muốn mạnh mẽ (n), năn nỉ, thuyết phục (v)"
}, {
  word: "acquire",
  mean: "Mua, thu được, kiếm dc (v)"
}, {
  word: "admire",
  mean: "Ngưỡng mộ (v)"
}, {
  word: "fashion",
  mean: "Thời trang, mốt, kiểu cách (n)"
}, {
  word: "leisure",
  mean: "Thời gian rảnh rỗi (n)"
}, {
  word: "respond",
  mean: "Trả lời, đáp ứng, phản hồi lại (v)"
}, {
  word: "significant",
  mean: "Quan trọng, đáng chú ý (adj)"
}, {
  word: "spectrum",
  mean: "Một dãy, một chuỗi (n)"
}, {
  word: "assignment",
  mean: "Sự phân công, sự giao việc, việc được giao (n) - assign (v) phân công , chỉ định"
}, {
  word: "",
  mean: ""
}]
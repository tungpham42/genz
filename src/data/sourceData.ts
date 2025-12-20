// src/data/sourceData.ts
import { GenZTerm } from "../types";

// Dữ liệu thật, chất lượng cao
export const TERMS: GenZTerm[] = [
  // --- TƯƠNG TÁC & THÁI ĐỘ ---
  {
    term: "Flex",
    definition:
      "Khoe khoang nhưng làm ra vẻ vô tình, không cố ý. Bắt nguồn từ văn hóa Rap/Hip-hop.",
    variation: ["Flexing", "Kiến tạo"],
    example: "Hôm nay buồn quá, lấy con xe Mercedes đi flex cho đỡ buồn.",
    tags: ["khoe", "trend", "lifestyle"],
  },
  {
    term: "Check var",
    definition:
      "Kiểm tra lại thông tin xem có đúng sự thật không (lấy từ thuật ngữ bóng đá VAR). Dùng khi nghi ngờ ai đó nói phét/phông bạt.",
    variation: ["Check map"],
    example:
      "- Tao mới được người yêu tặng iPhone 15. - Đâu, đưa đây check var cái coi.",
    tags: ["bongda", "check", "hoithoai"],
  },
  {
    term: "Pressing",
    definition:
      "Gây áp lực lên người khác trong cuộc trò chuyện, dồn đối phương vào thế bí bằng lý lẽ sắc bén (hoặc cùn).",
    variation: ["Thoát pressing"],
    example:
      "Mẹ tao pressing tao chuyện lấy chồng ghê quá, Tết này chắc không về.",
    tags: ["bongda", "tranh luan"],
  },
  {
    term: "Xịt keo",
    definition:
      "Trạng thái cứng họng, không nói nên lời vì quá sốc hoặc vì đối phương nói quá vô lý/buồn cười.",
    variation: ["Câm nín", "Đứng hình"],
    example: "Nghe nó kể lý do chia tay xong tao xịt keo luôn.",
    tags: ["camxuc", "soc"],
  },
  {
    term: "Hệ tư tưởng",
    definition:
      "Ám chỉ một nhóm người hoặc một cá nhân có những hành động, suy nghĩ độc lạ, khác thường, tạo thành một 'trường phái' riêng.",
    variation: ["Hệ tư tưởng mới"],
    example: "Thầy Lộc Fuho đúng là một hệ tư tưởng.",
    tags: ["meme", "idol"],
  },
  // --- TÌNH YÊU & QUAN HỆ ---
  {
    term: "Red flag",
    definition:
      "Cờ đỏ - Dấu hiệu cảnh báo một mối quan hệ độc hại hoặc một người không nên dây dưa.",
    variation: ["Cờ đỏ", "Green flag"],
    example: "Mới quen mà nó mượn tiền là red flag to đùng rồi em ơi.",
    tags: ["tinhyeu", "canhbao"],
  },
  {
    term: "Ghost",
    definition:
      "Bỗng nhiên biến mất khỏi cuộc đời ai đó mà không một lời từ biệt, cắt đứt mọi liên lạc.",
    variation: ["Bơ", "Lặn"],
    example: "Đang nhắn tin vui vẻ tự nhiên nó ghost tao 3 ngày nay.",
    tags: ["tinhyeu", "sad"],
  },
  {
    term: "Simp",
    definition:
      "Mê muội, lụy tình, làm mọi thứ vì crush bất chấp bị đối xử tệ bạc.",
    variation: ["Simp lỏ", "Lụy"],
    example:
      "Thằng đó simp chúa, nó mua trà sữa cho con kia cả tháng dù bị từ chối.",
    tags: ["tinhyeu", "crush"],
  },
  {
    term: "Trap",
    definition:
      "Bẫy tình. Ám chỉ những người đi gieo thương nhớ cho người khác rồi phủi tay bỏ đi.",
    variation: ["Trap boy", "Trap girl"],
    example: "Nhìn mặt uy tín thế thôi chứ trap boy chính hiệu đấy.",
    tags: ["tinhyeu", "bad"],
  },
  {
    term: "Ngoan xinh yêu",
    definition:
      "Cách gọi nịnh nọt, yêu thương dành cho người yêu hoặc... thú cưng, hoặc đôi khi dùng để xin xỏ.",
    variation: ["Pam yêu ơi"],
    example: "Ngoan xinh yêu ơi, cho anh xin 500k đi nhậu nhé.",
    tags: ["tinhyeu", "ninhnot"],
  },
  // --- CẢM THÁN & TRẠNG THÁI ---
  {
    term: "Chằm Zn",
    definition:
      "Trầm cảm (Trầm Kẽm -> Zn là Kẽm). Trạng thái mệt mỏi, chán nản.",
    variation: ["Depression"],
    example: "Deadline dí chằm Zn luôn.",
    tags: ["tamtrang", "congso"],
  },
  {
    term: "Khum",
    definition: "Không. Cách nói lái cho dễ thương (hoặc gợi đòn).",
    variation: ["Hông", "K"],
    example: "Ăn cơm khum?",
    tags: ["daily"],
  },
  {
    term: "Ét o ét",
    definition: "SOS - Cứu với. Dùng khi gặp tình huống khó đỡ.",
    variation: ["SOS"],
    example: "Crush nhìn tao kìa, ét o ét!",
    tags: ["haihuoc"],
  },
  {
    term: "Ô dề",
    definition: "Làm lố, làm quá mức cần thiết (Over).",
    variation: ["Ố dề", "Over"],
    example: "Trang điểm sương sương thôi, đậm quá nhìn ô dề lắm.",
    tags: ["nhanxet"],
  },
  {
    term: "Mãi mận",
    definition:
      "Mãi mặn mòi. Khen ngợi sự thu hút, chất chơi hoặc sự việc rất ấn tượng.",
    variation: ["Mãi keo", "Mãi mận mãi keo"],
    example: "OTP này mãi mận, real quá trời.",
    tags: ["khen", "fan"],
  },
  {
    term: "Keo lỳ",
    definition: "Ngon nghẻ, hấp dẫn, xịn xò (bắt nguồn từ 'Cali' -> 'Keo lỳ').",
    variation: ["Cháy phố"],
    example: "Hôm nay lên đồ nhìn keo lỳ tái châu thế.",
    tags: ["khen", "fashion"],
  },
  {
    term: "Slay",
    definition:
      "Đỉnh cao, xuất sắc, thần thái ngút ngàn (thường dùng khen con gái/LGBT).",
    variation: ["Queen"],
    example: "Chị ta bước ra sân khấu nhìn slay vô cùng.",
    tags: ["khen", "fashion"],
  },
  {
    term: "Xu cà na",
    definition: "Xui xẻo, gặp chuyện không như ý.",
    variation: ["Xu", "Xui"],
    example: "Hôm nay đi làm quên mang laptop, xu cà na.",
    tags: ["xui", "daily"],
  },
  {
    term: "Tới công chuyện",
    definition:
      "Sắp có biến, hoặc sắp phải giải quyết một vấn đề rắc rối/thú vị nào đó.",
    variation: ["Tới nái"],
    example: "Nhìn thái độ sếp là biết lát nữa tới công chuyện rồi.",
    tags: ["drama", "congso"],
  },
  {
    term: "Gét gô",
    definition:
      "Let's go (Đi thôi/Làm thôi). Thể hiện sự quyết tâm làm một việc gì đó khó khăn.",
    variation: ["Lets go"],
    example: "Quyết tâm giảm 5kg trong 1 tuần. Gét gô!",
    tags: ["dongluc"],
  },
  // --- ĐỊA XƯNG & NHÂN VẬT ---
  {
    term: "Elm",
    definition:
      "Em. Cách gọi điệu đà, bắt nguồn từ một hot mom trên mạng xã hội.",
    variation: ["Emm"],
    example: "Elm thích ăn gì elm nói đi.",
    tags: ["xungho", "meme"],
  },
  {
    term: "Bà dà",
    definition:
      "Bạn thân, người yêu, hoặc vợ. Cách gọi thân mật (đôi khi hơi suồng sã).",
    variation: ["Bà già"],
    example: "Bà dà tao hôm nay khó ở quá.",
    tags: ["xungho"],
  },
  {
    term: "Cụ",
    definition:
      "Gọi những người (thường là Gen Z với nhau) có những hành động/suy nghĩ như người tối cổ, hoặc kính nể quá mức.",
    variation: ["Cụ tổ"],
    example: "Thôi lạy cụ, cụ tha cho con.",
    tags: ["xungho", "haihuoc"],
  },
  {
    term: "Tấm chiếu mới",
    definition: "Người chưa có kinh nghiệm, ngây thơ (chưa từng trải).",
    variation: ["Newbie"],
    example: "Nhìn cách nó deal lương là biết tấm chiếu mới rồi.",
    tags: ["congso", "nhanxet"],
  },
  {
    term: "Báo",
    definition:
      "Báo thủ/Báo hại. Người hay gây rắc rối cho người khác phải đi giải quyết.",
    variation: ["Báo thủ", "Báo con"],
    example: "Mày báo quá báo rồi, tao gánh không nổi.",
    tags: ["trachmoc", "game"],
  },
  {
    term: "Mlem mlem",
    definition: "Ngon, hấp dẫn (chỉ đồ ăn hoặc trai xinh gái đẹp).",
    variation: ["Mlem"],
    example: "Anh kia body mlem mlem quá.",
    tags: ["khen", "thèm"],
  },
  {
    term: "Giả trân",
    definition:
      "Giả tạo một cách lộ liễu, nhìn là biết ngay không thật nhưng vẫn cố diễn.",
    variation: ["Sượng trân"],
    example: "Nụ cười giả trân của nó làm tao nổi da gà.",
    tags: ["nhanxet", "fake"],
  },
  {
    term: "Còn cái nịt",
    definition:
      "Mất trắng, không còn gì cả, chỉ còn đúng cái dây chun buộc tiền.",
    variation: ["Nịt"],
    example: "Đầu tư coin giờ còn đúng cái nịt.",
    tags: ["haihuoc", "trend"],
  },
  {
    term: "Hảo hán",
    definition:
      "Chỉ những hành động dũng cảm hoặc... ngu ngốc một cách liều lĩnh (mang tính châm biếm).",
    variation: ["Hảo hán ca"],
    example: "Dám bật lại sếp tổng, đúng là hảo hán.",
    tags: ["meme", "kiemphiep"],
  },
  {
    term: "Lươn",
    definition: "Lươn lẹo, không trung thực, hay tìm lý do thoái thác.",
    variation: ["Chúa tể lươn lẹo"],
    example: "Đừng tin lời nó, thằng đó lươn lắm.",
    tags: ["nhanxet"],
  },

  // =================================================================
  // PHẦN 2: BỔ SUNG MỚI (70 TỪ)
  // =================================================================

  // --- MỚI: TÌNH YÊU & DRAMA (15 TỪ) ---
  {
    term: "Cơm chó",
    definition:
      "Hành động thể hiện tình cảm thái quá của các cặp đôi trước mặt người độc thân, gây khó chịu hoặc ghen tị.",
    variation: ["Cẩu lương"],
    example: "Đi ăn mà hai đứa nó cứ phát cơm chó, tao nuốt không trôi.",
    tags: ["tinhyeu", "meme"],
  },
  {
    term: "Trà xanh",
    definition:
      "Người thứ ba xen vào mối quan hệ, bên ngoài tỏ vẻ ngây thơ, vô tội nhưng bên trong đầy toan tính.",
    variation: ["Green tea"],
    example: "Cẩn thận con bé đó, trà xanh chính hiệu đấy.",
    tags: ["tinhyeu", "drama"],
  },
  {
    term: "Tuesday",
    definition: "Người thứ ba, người ngoại tình (bắt nguồn từ Thứ Ba).",
    variation: ["Tiểu tam"],
    example: "Nó bị Tuesday giật bồ rồi.",
    tags: ["tinhyeu", "drama"],
  },
  {
    term: "Lốp dự phòng",
    definition:
      "Người được giữ bên cạnh để khỏa lấp chỗ trống khi người kia buồn, nhưng không bao giờ được coi là người yêu chính thức.",
    variation: ["Backup"],
    example: "Mày chỉ là lốp dự phòng trong lúc nó cãi nhau với bồ thôi.",
    tags: ["tinhyeu", "sad"],
  },
  {
    term: "Friendzone",
    definition:
      "Khu vực tình bạn. Khi một người thích người kia nhưng chỉ được coi là bạn.",
    variation: ["Anh trai mưa"],
    example: "Tỏ tình xong bị tống vào friendzone luôn.",
    tags: ["tinhyeu", "friend"],
  },
  {
    term: "Mập mờ",
    definition:
      "Mối quan hệ không rõ ràng, trên tình bạn dưới tình yêu, không cam kết.",
    variation: ["Situationship"],
    example: "Ghét nhất kiểu quan hệ mập mờ, yêu thì yêu không thì thôi.",
    tags: ["tinhyeu", "phuc tap"],
  },
  {
    term: "Suy",
    definition:
      "Suy nghĩ nhiều, buồn bã, lụy tình (thường nghe nhạc buồn rồi suy).",
    variation: ["Suy tình"],
    example: "Nghe bài này xong tao suy quá.",
    tags: ["tamtrang", "sad"],
  },
  {
    term: "Thính",
    definition: "Hành động, lời nói tán tỉnh bâng quơ để lôi cuốn người khác.",
    variation: ["Thả thính"],
    example: "Stt này nồng nặc mùi thính.",
    tags: ["tinhyeu", "flirt"],
  },
  {
    term: "Nuôi cá",
    definition:
      "Tán tỉnh, giữ liên lạc với nhiều người cùng lúc (như nuôi cá trong ao) để chọn lựa.",
    variation: ["Ao cá"],
    example: "Anh ta có cả một ao cá, em chỉ là một con trong đó thôi.",
    tags: ["tinhyeu", "bad"],
  },
  {
    term: "Pick me",
    definition:
      "Kẻ thích gây chú ý, luôn cố tỏ ra mình khác biệt với những người cùng giới để hạ thấp họ và lấy lòng người khác giới.",
    variation: ["Pick me girl", "Pick me boy"],
    example:
      "Giọng điệu 'em không giống các cô gái khác' nồng nặc mùi pick me.",
    tags: ["nhanxet", "drama"],
  },
  {
    term: "Đẩy thuyền",
    definition:
      "Gán ghép, ủng hộ hai người nào đó đến với nhau (thường là trong phim hoặc idol).",
    variation: ["Ship", "Shipper"],
    example: "Cặp này đẹp đôi quá, tao nguyện đẩy thuyền tới bến.",
    tags: ["fan", "tinhyeu"],
  },
  {
    term: "OTP",
    definition:
      "One True Pairing - Cặp đôi chân ái mà fan mong muốn thành đôi nhất.",
    variation: ["Real"],
    example: "OTP của tao real quá, nhìn ánh mắt là biết yêu rồi.",
    tags: ["fan", "kpop"],
  },
  {
    term: "Gato",
    definition:
      "Ghen ăn tức ở. Ghen tị với thành công/hạnh phúc của người khác.",
    variation: ["Ghen tị"],
    example: "Thấy người ta giàu thì gato, sao không cố gắng đi?",
    tags: ["camxuc", "drama"],
  },
  {
    term: "In tư",
    definition: "Info (Thông tin cá nhân). Cách đọc lái hài hước.",
    variation: ["Info"],
    example: "Cho xin in tư anh đẹp trai bàn bên với.",
    tags: ["tan tinh", "hai huoc"],
  },
  {
    term: "Hèn",
    definition:
      "Không dám đối mặt, cư xử thiếu nam tính/dũng cảm trong tình cảm.",
    variation: ["Hèn hạ"],
    example: "Chia tay qua tin nhắn là hèn lắm.",
    tags: ["nhanxet"],
  },

  // --- MỚI: CUỘC SỐNG & CÔNG VIỆC (15 TỪ) ---
  {
    term: "Cột sống",
    definition:
      "Cuộc sống. Cách nói lái ám chỉ sự đau lưng mỏi gối của dân văn phòng.",
    variation: ["Cuộc sống"],
    example: "Áp lực cột sống này nặng nề quá.",
    tags: ["congso", "suckhoe"],
  },
  {
    term: "Tư bản",
    definition:
      "Chỉ sếp, công ty hoặc giới chủ, thường dùng khi than vãn về bóc lột sức lao động.",
    variation: ["Boss"],
    example: "Hôm nay lại bị tư bản bóc lột đến 9h tối.",
    tags: ["congso", "thanvan"],
  },
  {
    term: "Chữa lành",
    definition:
      "Đi du lịch, tiêu tiền hoặc làm gì đó để tâm hồn bình yên. Tuy nhiên gần đây hay bị dùng mỉa mai việc tiêu hoang.",
    variation: ["Healing"],
    example: "Đi làm cả tháng, chữa lành một đêm hết sạch lương.",
    tags: ["lifestyle", "travel"],
  },
  {
    term: "Nằm thẳng",
    definition:
      "Trào lưu mặc kệ đời, không phấn đấu, chỉ làm đủ ăn, buông xuôi trước áp lực xã hội.",
    variation: ["Lying flat"],
    example: "Cày cuốc mệt quá, tao quyết định nằm thẳng.",
    tags: ["lifestyle", "trend"],
  },
  {
    term: "Dí",
    definition:
      "Bị giao việc gấp, bị hối thúc liên tục, hoặc bị đổ vỏ trách nhiệm.",
    variation: ["Ép"],
    example: "Cuối tuần rồi mà sếp vẫn dí deadline.",
    tags: ["congso"],
  },
  {
    term: "Lương 3 cọc 3 đồng",
    definition: "Lương thấp, ít ỏi, không đủ chi tiêu.",
    variation: ["Lương bèo"],
    example: "Lương 3 cọc 3 đồng mà bắt làm như giám đốc.",
    tags: ["congso", "money"],
  },
  {
    term: "Nhảy việc",
    definition:
      "Chuyển công ty liên tục để tăng lương hoặc tìm môi trường mới.",
    variation: ["Job hopping"],
    example: "Gen Z giờ nhảy việc như đi chợ.",
    tags: ["congso"],
  },
  {
    term: "Bùng kèo",
    definition: "Hủy hẹn vào phút chót không lý do chính đáng.",
    variation: ["Bom kèo"],
    example: "Hẹn đi cafe mà nó bùng kèo tao.",
    tags: ["daily", "bad"],
  },
  {
    term: "Bom hàng",
    definition:
      "Đặt mua hàng online nhưng khi ship đến thì không nhận hoặc tắt máy.",
    variation: ["Boom hàng"],
    example: "Shipper khóc thét vì bị khách bom hàng.",
    tags: ["shopping", "bad"],
  },
  {
    term: "Trộm vía",
    definition:
      "Cụm từ đệm thêm khi khen ngợi trẻ con hoặc ai đó (để tránh bị quở quang theo tâm linh), giờ dùng phổ biến mọi lúc.",
    variation: ["TV"],
    example: "Trộm vía da dạo này đẹp thế.",
    tags: ["tamlinh", "daily"],
  },
  {
    term: "Xin vía",
    definition:
      "Mong muốn nhận được sự may mắn hoặc thành công giống người khác.",
    variation: ["Nhả vía"],
    example: "Xin vía điểm cao, xin vía người yêu đẹp.",
    tags: ["tamlinh", "trend"],
  },
  {
    term: "Kiếp nạn",
    definition: "Rắc rối, khó khăn (lấy từ Tây Du Ký).",
    variation: ["Kiếp nạn thứ 82"],
    example: "Đi làm trời mưa đúng là kiếp nạn thứ 82.",
    tags: ["haihuoc", "daily"],
  },
  {
    term: "Gánh còng lưng",
    definition:
      "Phải làm hết phần việc của người khác trong nhóm, chịu trách nhiệm chính.",
    variation: ["Gánh team"],
    example: "Bài tập nhóm này tao gánh còng lưng.",
    tags: ["game", "school"],
  },
  {
    term: "Reset",
    definition: "Làm lại từ đầu, hoặc ám chỉ việc đầu thai (nghĩa đen tối).",
    variation: ["Làm lại"],
    example: "Cuộc đời chán quá, muốn reset server.",
    tags: ["game", "sad"],
  },
  {
    term: "Bào tiền",
    definition: "Lợi dụng người khác để moi móc tiền bạc.",
    variation: ["Đào mỏ"],
    example: "Yêu đương gì, nó chỉ muốn bào tiền mày thôi.",
    tags: ["money", "bad"],
  },

  // --- MỚI: THÁI ĐỘ & TÍNH CÁCH (15 TỪ) ---
  {
    term: "Lemỏn",
    definition: "Chảnh (Lemon = Chanh -> Chảnh). Kiêu ngạo, khó gần.",
    variation: ["Chảnh"],
    example: "Con bé đó nhìn xinh mà lemỏn quá.",
    tags: ["nhanxet", "teencode"],
  },
  {
    term: "Rén",
    definition: "Sợ hãi, chùn bước, không dám làm.",
    variation: ["Sợ"],
    example: "Thấy công an cái là rén ngay.",
    tags: ["camxuc"],
  },
  {
    term: "Vô tri",
    definition:
      "Ngớ ngẩn, không hiểu gì, hoặc những vật/hành động vô nghĩa nhưng gây cười.",
    variation: ["Sáo rỗng"],
    example: "Nhiều lúc nhìn con mèo nhà tao vô tri thực sự.",
    tags: ["meme", "haihuoc"],
  },
  {
    term: "Sơ hở là",
    definition: "Cụm từ chỉ một hành động lặp đi lặp lại mỗi khi có cơ hội.",
    variation: ["Hễ là"],
    example: "Sơ hở là rủ đi nhậu, sơ hở là ngủ.",
    tags: ["meme", "habit"],
  },
  {
    term: "Hay ra dẻ",
    definition:
      "Hay ra vẻ. Thích thể hiện ta đây biết tuốt/ngầu nhưng thực ra không có gì.",
    variation: ["Ra dẻ"],
    example: "Mày bớt hay ra dẻ đi, ai chẳng biết mày dốt.",
    tags: ["nhanxet", "meme"],
  },
  {
    term: "Chê",
    definition:
      "Từ chối, không thích, tỏ thái độ khinh khỉnh (meme cô gái Chê).",
    variation: ["Chê ê ê"],
    example: "Mời ăn ốc hả? Chê!",
    tags: ["meme", "reaction"],
  },
  {
    term: "U là trời",
    definition:
      "Trời ơi (biến âm từ 'Úi trời'). Thể hiện sự ngạc nhiên, bó tay.",
    variation: ["Ultr"],
    example: "U là trời, sao mày lại làm thế hả con?",
    tags: ["camthan", "daily"],
  },
  {
    term: "Ảo ma Canada",
    definition: "Sự việc gì đó quá ảo, khó tin, như có phép thuật.",
    variation: ["Ảo ma"],
    example: "Pha xử lý ảo ma Canada thật đấy.",
    tags: ["game", "meme"],
  },
  {
    term: "Phông bạt",
    definition:
      "Bề ngoài hào nhoáng, che đậy thực chất rỗng tuếch bên trong (thường dùng cho lối sống ảo).",
    variation: ["Làm màu"],
    example: "Suốt ngày check-in sang chảnh, toàn phông bạt cả thôi.",
    tags: ["lifestyle", "fake"],
  },
  {
    term: "Low key",
    definition: "Sống kín tiếng, ít chia sẻ đời tư lên mạng xã hội.",
    variation: ["Kín tiếng"],
    example: "Thích mấy anh low key, nhìn bí ẩn quyến rũ.",
    tags: ["lifestyle"],
  },
  {
    term: "Yang hồ",
    definition: "Giang hồ. Cách gọi trại đi để giảm nhẹ hoặc trêu chọc.",
    variation: ["Giang hồ"],
    example: "Trông mặt mũi hiền lành mà tính cách yang hồ phết.",
    tags: ["haihuoc"],
  },
  {
    term: "Giang cư mận",
    definition: "Cư dân mạng. Cộng đồng online.",
    variation: ["Netizen"],
    example: "Vụ này đang bị giang cư mận ném đá dữ lắm.",
    tags: ["online"],
  },
  {
    term: "Bánh bèo",
    definition:
      "Con gái có tính cách yếu đuối, thích nhõng nhẽo, điệu đà quá mức.",
    variation: ["Bánh bèo vô dụng"],
    example: "Tao không chơi được với mấy đứa bánh bèo đâu.",
    tags: ["nhanxet"],
  },
  {
    term: "Chiến thần",
    definition:
      "Người rất giỏi hoặc làm rất nhiều một việc gì đó (thường dùng với nghĩa hài hước).",
    variation: ["Chúa tể"],
    example: "Chiến thần ngoại giao, chúa tể hủy diệt deadline.",
    tags: ["khen", "meme"],
  },
  {
    term: "Toxic",
    definition:
      "Độc hại. Chỉ tính cách tiêu cực, hay than vãn hoặc gây ảnh hưởng xấu.",
    variation: ["Độc"],
    example: "Môi trường làm việc toxic quá nên tao nghỉ.",
    tags: ["nhanxet"],
  },

  // --- MỚI: GAMING & ONLINE (10 TỪ) ---
  {
    term: "Gà",
    definition:
      "Chơi kém, trình độ thấp (thuật ngữ game lâu đời nhưng vẫn phổ biến).",
    variation: ["Noob", "Gà mờ"],
    example: "Đánh gà thì đừng có to mồm.",
    tags: ["game", "chui"],
  },
  {
    term: "Ao chình",
    definition: "Out trình. Trình độ vượt xa đối thủ, thắng dễ dàng.",
    variation: ["Outplay"],
    example: "Trận này team mình ao chình team bạn rồi.",
    tags: ["game", "khen"],
  },
  {
    term: "Lag",
    definition:
      "Mạng chậm, giật. Nghĩa bóng: Đầu óc chậm chạp, không load kịp thông tin.",
    variation: ["Đơ"],
    example: "Sáng chưa uống cafe não tao cứ lag lag.",
    tags: ["tech", "daily"],
  },
  {
    term: "Hóng drama",
    definition: "Theo dõi, hóng hớt các vụ bê bối, cãi nhau trên mạng.",
    variation: ["Hít hà"],
    example: "Tối nay có drama to, lót dép hóng thôi.",
    tags: ["online", "trend"],
  },
  {
    term: "Seeding",
    definition:
      "Tự tạo nick ảo để vào khen/chửi nhằm định hướng dư luận (thường trong marketing).",
    variation: ["Seed"],
    example: "Bài viết này toàn comment seeding thôi.",
    tags: ["mkt", "online"],
  },
  {
    term: "War",
    definition: "Cuộc chiến bàn phím, cãi nhau gay gắt trên mạng.",
    variation: ["Phím chiến"],
    example: "Đừng lôi tao vào mấy vụ war trên Facebook.",
    tags: ["online"],
  },
  {
    term: "Report",
    definition: "Báo cáo vi phạm để khóa tài khoản ai đó.",
    variation: ["Rip nick"],
    example: "Ghét nó quá, anh em vào report sập kênh nó đi.",
    tags: ["online", "attack"],
  },
  {
    term: "Bão",
    definition: "Nhiều like/comment ập đến cùng lúc, hoặc đi cổ vũ bóng đá.",
    variation: ["Đi bão"],
    example: "Việt Nam vô địch là cả nước đi bão.",
    tags: ["online", "bongda"],
  },
  {
    term: "Pay lắc",
    definition: "Đi bar, sàn, quẩy, tiệc tùng thâu đêm.",
    variation: ["Bay lắc"],
    example: "Cuối tuần lên đồ đi pay lắc không?",
    tags: ["lifestyle", "party"],
  },
  {
    term: "Mõm",
    definition: "Chỉ biết nói mồm, hứa suông chứ không làm được.",
    variation: ["Phét"],
    example: "Thằng đó chúa mõm, tin làm gì.",
    tags: ["chui", "daily"],
  },

  // --- MỚI: TỪ LÓNG & VIẾT TẮT (15 TỪ) ---
  {
    term: "Gòy xong",
    definition: "Rồi xong. Thể hiện sự buông xuôi khi gặp chuyện xui xẻo.",
    variation: ["Toang rồi"],
    example: "Gòy xong, quên chìa khóa ở nhà rồi.",
    tags: ["teencode", "daily"],
  },
  {
    term: "J z tr",
    definition: "Gì vậy trời. Câu cảm thán viết tắt.",
    variation: ["Gì z"],
    example: "J z tr? Sao lại mắng em?",
    tags: ["teencode", "camthan"],
  },
  {
    term: "Bịp",
    definition: "Lừa đảo, không đúng sự thật, hoặc quá vô lý.",
    variation: ["Điêu"],
    example: "Game này bịp quá, quay mãi không ra tướng xịn.",
    tags: ["game", "nhanxet"],
  },
  {
    term: "Toang",
    definition: "Hỏng, thất bại, đổ vỡ.",
    variation: ["Gãy"],
    example: "Thi xong rồi, toang môn Toán rồi.",
    tags: ["school", "daily"],
  },
  {
    term: "Cuốn",
    definition: "Hấp dẫn, lôi cuốn, làm người ta thích thú không rời mắt được.",
    variation: ["Dính"],
    example: "Bộ phim này nội dung cuốn phết.",
    tags: ["khen", "review"],
  },
  {
    term: "Lỏ",
    definition:
      "Lord (Chúa tể) -> Lỏ. Dùng để chỉ đồ dởm, hoặc người hành xử ngớ ngẩn (Simp lỏ).",
    variation: ["Dởm"],
    example: "Mua phải cái áo lỏ, mặc 2 hôm đã rách.",
    tags: ["nhanxet", "slang"],
  },
  {
    term: "Xàm",
    definition: "Nói linh tinh, nhạt nhẽo, vô nghĩa.",
    variation: ["Xàm xí"],
    example: "Bớt xàm đi, nói vào trọng tâm xem nào.",
    tags: ["chui"],
  },
  {
    term: "Nhạt",
    definition: "Thiếu muối, không hài hước, nói chuyện chán.",
    variation: ["Nhạt toẹt"],
    example: "Crush nhắn tin nhạt quá, không biết rep sao.",
    tags: ["nhanxet"],
  },
  {
    term: "Mặn",
    definition:
      "Hài hước, thú vị (ngược với nhạt), hoặc đôi khi là 'gắt' (khó khăn).",
    variation: ["Mặn mòi"],
    example: "Comment của ông này mặn thật, cười đau ruột.",
    tags: ["khen"],
  },
  {
    term: "Pha ke",
    definition: "Fake. Hàng giả, hoặc giả tạo.",
    variation: ["Fake"],
    example: "Túi này là hàng pha ke loại 1 đấy.",
    tags: ["shopping", "funny"],
  },
  {
    term: "Real",
    definition: "Thật, chính hãng, hoặc tình cảm thật lòng.",
    variation: ["Auth"],
    example: "Hàng real 100% bao check.",
    tags: ["shopping", "khen"],
  },
  {
    term: "10 điểm",
    definition: "Hoàn hảo, tuyệt vời.",
    variation: ["10 điểm không nhưng"],
    example: "Nhan sắc này 10 điểm không có nhưng.",
    tags: ["khen", "trend"],
  },
  {
    term: "Bing Chilling",
    definition: "Kem (phiên âm tiếng Trung). Một meme nổi tiếng từ John Cena.",
    variation: ["Kem"],
    example: "Sáng sớm làm cây Bing Chilling cho tỉnh ngủ.",
    tags: ["meme", "food"],
  },
  {
    term: "Mai đẹt ti ni",
    definition: "My destiny. Định mệnh của đời em (meme từ phim Thái).",
    variation: ["Chân ái"],
    example: "Anh ấy chính là mai đẹt ti ni của đời tôi.",
    tags: ["meme", "tinhyeu"],
  },
  {
    term: "Tới bến",
    definition:
      "Chơi hết mình, không say không về, hoặc làm cho ra ngô ra khoai.",
    variation: ["Tới nóc"],
    example: "Hôm nay anh em mình nhậu tới bến luôn.",
    tags: ["party", "dongluc"],
  },
  // --- TREND & CÂU CỬA MIỆNG (SLANG) ---
  {
    term: "Kiwi kiwi",
    definition:
      "Ngon quá xá, quá tuyệt vời (khen đồ ăn hoặc trải nghiệm). Xuất phát từ việc phát âm từ 'kiwi' nghe giống 'khen ngon'.",
    variation: ["Ngon vãi"],
    example: "Món này kiwi kiwi quá bà ơi.",
    tags: ["khen", "food", "trend"],
  },
  {
    term: "Đúng nhận sai cãi",
    definition:
      "Câu nói viral từ cô đồng, ý bảo nói đúng thì nhận, sai thì cãi lại (nhưng thái độ thường là không cho cãi).",
    variation: ["Đúng nhận sai cấm cãi"],
    example: "Bổ quả cau này ra, đúng nhận sai cãi cho cô.",
    tags: ["trend", "meme", "tamlinh"],
  },
  {
    term: "Mắc cỡ quá 2 ơi",
    definition:
      "Ngại giùm người khác, hoặc chê ai đó làm trò lố lăng, sến súa (meme từ TikTok).",
    variation: ["Ngại giùm"],
    example: "Nhìn nó nhảy mà tao mắc cỡ quá 2 ơi.",
    tags: ["chê", "meme"],
  },
  {
    term: "Cứu tôi",
    definition:
      "Câu cửa miệng khi gặp tình huống hài hước, khó đỡ hoặc quá sức chịu đựng (meme 'Cứu tôi trời ơi').",
    variation: ["Cứu"],
    example: "Deadline dí tới nơi rồi, cứu tôi!",
    tags: ["haihuoc", "meme"],
  },
  {
    term: "Hê sờ lô hơ sờ ly",
    definition:
      "Hello Honey (Xin chào người yêu). Cách chào hỏi hài hước, màu mè.",
    variation: ["Hê sờ lô"],
    example: "Hê sờ lô hơ sờ ly, hôm nay em thế nào?",
    tags: ["xungho", "meme"],
  },
  {
    term: "Dữ chưa",
    definition:
      "Câu hỏi tu từ mang ý mỉa mai, trêu chọc: 'Đã vừa lòng chưa?', 'Đã ghê chưa?'.",
    variation: ["Ghê chưa"],
    example: "Nói xấu tao xong bị tao bắt gặp, dữ chưa?",
    tags: ["mia mai", "daily"],
  },
  {
    term: "Chắc chưa",
    definition:
      "Hỏi lại cho chắc chắn, nhưng thường dùng với thái độ nghi ngờ độ uy tín của đối phương.",
    variation: ["Sure không"],
    example: "Mày bảo bao tao ăn, chắc chưa?",
    tags: ["nghingo", "daily"],
  },
  {
    term: "Quê",
    definition:
      "Cảm giác xấu hổ, tẽn tò, ngượng chín mặt vì làm sai hoặc bị bóc mẽ.",
    variation: ["Nhục"],
    example: "Tỏ tình bị từ chối, quê muốn đội quần.",
    tags: ["camxuc", "daily"],
  },
  {
    term: "Sượng",
    definition: "Cảm giác ngại ngùng, không tự nhiên, trân trân (Sượng trân).",
    variation: ["Sượng trân"],
    example: "Đang cười đùa tự nhiên cô giáo vào, sượng cả đám.",
    tags: ["camxuc"],
  },
  {
    term: "Lú",
    definition:
      "Lú lẫn, rối trí, không hiểu gì vì thông tin quá nhiều hoặc quá rắc rối.",
    variation: ["Lú cái đầu"],
    example: "Nghe nó giải thích xong tao lú luôn.",
    tags: ["trangthai"],
  },
  {
    term: "Ngáo",
    definition:
      "Ngớ ngẩn, làm hành động không bình thường, thiếu tỉnh táo (Ngáo ngơ).",
    variation: ["Ngáo đá"],
    example: "Thằng này ngáo thật, đi giày cọc cạch.",
    tags: ["nhanxet"],
  },
  {
    term: "Ngộp",
    definition:
      "Choáng ngợp, cảm thấy áp lực hoặc quá sức trước sự giàu có/giỏi giang của người khác.",
    variation: ["Choáng"],
    example: "Vào group rich kid thấy xe sang mà ngộp.",
    tags: ["camxuc"],
  },
  {
    term: "Dừa",
    definition:
      "Vừa lòng. Dùng khi thấy ai đó gặp quả báo nhẹ hoặc xứng đáng bị như thế (Dừa lòng tao lắm).",
    variation: ["Vừa lòng"],
    example: "Chừa cái thói cà khịa nhé, dừa lắm.",
    tags: ["ha he", "daily"],
  },
  {
    term: "Tét nách",
    definition: "Cười tét nách (quá buồn cười) hoặc đau nách (mệt mỏi/bó tay).",
    variation: ["Nhức nách"],
    example: "Xem clip này cười tét nách.",
    tags: ["haihuoc"],
  },
  {
    term: "Nhức nách",
    definition:
      "Quá đã, quá tuyệt vời (thường là khen món ăn 'ngon nhức nách').",
    variation: ["Đỉnh kout"],
    example: "Bún đậu mắm tôm quán này ngon nhức nách.",
    tags: ["khen", "food"],
  },
  {
    term: "Đỉnh chóp",
    definition: "Đỉnh của chóp. Tuyệt vời nhất, không gì sánh bằng.",
    variation: ["Đỉnh cao"],
    example: "Visual hôm nay của sếp Tùng đúng là đỉnh chóp.",
    tags: ["khen"],
  },
  {
    term: "Hết nước chấm",
    definition:
      "Tuyệt vời, hoàn hảo, không còn từ gì để chê (thường dùng khen gái xinh hoặc đồ ngon).",
    variation: ["Hết sảy"],
    example: "Em gái kia xinh hết nước chấm.",
    tags: ["khen"],
  },
  {
    term: "Hết cứu",
    definition:
      "Không còn cách nào giải quyết, bó tay toàn tập, vô phương cứu chữa.",
    variation: ["No hope"],
    example: "Pha xử lý này thì hết cứu nổi.",
    tags: ["thatvong", "meme"],
  },
  {
    term: "Tụt mood",
    definition: "Mất hứng, đang vui tự nhiên buồn/chán hoặc bị làm phiền.",
    variation: ["Mất hứng"],
    example: "Đang đi chơi thì mưa, tụt mood ghê.",
    tags: ["tamtrang"],
  },
  {
    term: "Quay xe",
    definition:
      "Thay đổi thái độ/quyết định 180 độ vào phút chót (bắt nguồn từ bài hát của GDucky).",
    variation: ["Lật mặt"],
    example: "Thấy công an là các dân tổ quay xe ngay.",
    tags: ["hanhdong", "meme"],
  },

  // --- IDOL, FANDOM & GIẢI TRÍ ---
  {
    term: "U mê",
    definition:
      "Mê mẩn không lối thoát (thường là mê idol, mê phim hoặc người yêu).",
    variation: ["Mê muội"],
    example: "Tao u mê nhan sắc này quá rồi.",
    tags: ["love", "fan"],
  },
  {
    term: "Lọt hố",
    definition:
      "Bắt đầu thích và tìm hiểu sâu về một nhóm nhạc/idol/phim nào đó không thoát ra được.",
    variation: ["Lọt hố"],
    example: "Chính thức lọt hố Blackpink từ hôm nay.",
    tags: ["fan", "kpop"],
  },
  {
    term: "Đu idol",
    definition:
      "Theo dõi, ủng hộ thần tượng (đi concert, mua album, cày view...).",
    variation: ["Đu đưa"],
    example: "Kiếp này nguyện đu idol đến già.",
    tags: ["fan", "hobby"],
  },
  {
    term: "Card bo góc",
    definition:
      "Thẻ ảnh thần tượng (Photocard), vật bất ly thân và có giá trị sưu tầm của fan Kpop.",
    variation: ["Thẻ bài"],
    example: "Cầm sổ đỏ đi mua card bo góc.",
    tags: ["fan", "item"],
  },
  {
    term: "Bias",
    definition: "Thành viên mình thích nhất, ưu tiên nhất trong một nhóm nhạc.",
    variation: ["Oshi"],
    example: "Bias của tao trong BTS là V.",
    tags: ["fan", "kpop"],
  },
  {
    term: "Flop",
    definition: "Thất bại, không nổi tiếng, tụt dốc (ngược với Hit/Viral).",
    variation: ["Chìm"],
    example: "Bài hát mới ra mắt đã flop dập mặt.",
    tags: ["showbiz", "nhanxet"],
  },
  {
    term: "Nugu",
    definition:
      "Vô danh, không ai biết đến (từ tiếng Hàn, thường dùng miệt thị nhóm nhạc kém nổi).",
    variation: ["Vô danh"],
    example: "Nhóm nhạc nugu nào đây?",
    tags: ["kpop", "nhanxet"],
  },
  {
    term: "Comeback",
    definition:
      "Trở lại (thường là nghệ sĩ ra sản phẩm mới sau thời gian vắng bóng).",
    variation: ["Tái xuất"],
    example: "Sơn Tùng sắp comeback rồi anh em ơi.",
    tags: ["music", "showbiz"],
  },
  {
    term: "Visual",
    definition:
      "Thành viên có ngoại hình đẹp nhất, gương mặt đại diện cho nhóm.",
    variation: ["Nhan sắc"],
    example: "Visual của nhóm này đỉnh thật.",
    tags: ["kpop", "look"],
  },
  {
    term: "Center",
    definition:
      "Vị trí trung tâm của nhóm nhạc, được chú ý nhất trong đội hình.",
    variation: ["Trung tâm"],
    example: "Nó nhảy giỏi nên luôn được đứng center.",
    tags: ["kpop"],
  },
  {
    term: "Maknae",
    definition: "Em út trong nhóm nhạc (tiếng Hàn).",
    variation: ["Út"],
    example: "Maknae vàng của nhóm được các anh cưng chiều.",
    tags: ["kpop"],
  },
  {
    term: "Streamer",
    definition: "Người phát trực tiếp chơi game hoặc trò chuyện trên mạng.",
    variation: ["Caster"],
    example: "Độ Mixi là streamer nổi tiếng nhất Việt Nam.",
    tags: ["job", "online"],
  },
  {
    term: "Mukbang",
    definition: "Vừa ăn uống vừa ghi hình/livestream (trào lưu từ Hàn Quốc).",
    variation: ["Ăn thùng uống vại"],
    example: "Xem video mukbang đêm khuya đói cồn cào.",
    tags: ["content", "food"],
  },
  {
    term: "Unboxing",
    definition: "Đập hộp, mở hộp sản phẩm mới mua để review.",
    variation: ["Đập hộp"],
    example: "Hóng video unboxing iPhone 15.",
    tags: ["content", "shopping"],
  },

  // --- TÌNH YÊU & CÁC MỐI QUAN HỆ (PHẦN 2) ---
  {
    term: "Crush",
    definition: "Người mình thầm thương trộm nhớ, đang để ý.",
    variation: ["Người thương"],
    example: "Hôm nay crush cười với tao, vui cả ngày.",
    tags: ["tinhyeu"],
  },
  {
    term: "NYC",
    definition:
      "Người yêu cũ. Đối tượng thường bị nhắc đến với thái độ hằn học hoặc luyến tiếc.",
    variation: ["Ex"],
    example: "Đừng nhắc đến NYC trước mặt tao.",
    tags: ["tinhyeu"],
  },
  {
    term: "Fwb",
    definition:
      "Friends with benefits. Bạn tình, mối quan hệ dựa trên nhu cầu thể xác, không ràng buộc tình cảm.",
    variation: ["Bạn lợi ích"],
    example: "Thời đại này nhiều người thích FWB hơn là yêu nghiêm túc.",
    tags: ["tinhyeu", "adult"],
  },
  {
    term: "Ons",
    definition: "One night stand. Tình một đêm.",
    variation: ["419"],
    example: "Chỉ là ONS thôi, sáng mai đường ai nấy đi.",
    tags: ["tinhyeu", "adult"],
  },
  {
    term: "Bad boy",
    definition:
      "Trai hư, ăn chơi, đào hoa, thường rất cuốn hút nhưng dễ làm con gái đau khổ.",
    variation: ["Trai hư"],
    example: "Gái thường thích bad boy, trai tốt không có cửa.",
    tags: ["tinhyeu", "type"],
  },
  {
    term: "Sad boy",
    definition:
      "Chàng trai hay buồn, đa sầu đa cảm, hay đăng status tâm trạng.",
    variation: ["Boy u sầu"],
    example: "Mấy ông sad boy nghe nhạc Mr.Siro suốt ngày.",
    tags: ["tinhyeu", "type"],
  },
  {
    term: "Nóc nhà",
    definition: "Vợ hoặc người yêu (ám chỉ người có quyền lực nhất trong nhà).",
    variation: ["Vợ"],
    example: "Đi nhậu phải xin phép nóc nhà đã.",
    tags: ["tinhyeu", "family"],
  },
  {
    term: "Vợ quốc dân",
    definition: "Cô gái xinh đẹp, tài năng được nhiều người nhận vơ làm vợ.",
    variation: ["Chồng quốc dân"],
    example: "Tiểu Vy đúng chuẩn vợ quốc dân.",
    tags: ["fan", "meme"],
  },
  {
    term: "Soái ca",
    definition:
      "Trai đẹp, ga lăng, hoàn hảo như nhân vật trong truyện ngôn tình.",
    variation: ["Nam thần"],
    example: "Anh ấy mở cửa xe cho mình, đúng chuẩn soái ca.",
    tags: ["khen", "love"],
  },
  {
    term: "Cẩu huyết",
    definition:
      "Tình tiết phim/truyện vô lý, kịch tính thái quá, bi đát gây ức chế (gốc từ tiếng Trung).",
    variation: ["Drama"],
    example: "Phim này kịch bản cẩu huyết quá, xem mà tức.",
    tags: ["review", "drama"],
  },
  {
    term: "Hủ nữ",
    definition:
      "Cô gái thích xem truyện/phim tình cảm nam-nam (Boylove/Đam mỹ).",
    variation: ["Hủ"],
    example: "Hội hủ nữ đang gào thét vì cặp đôi này.",
    tags: ["hobby", "lgbt"],
  },
  {
    term: "Bóng",
    definition:
      "Từ lóng chỉ người đồng tính nam (đôi khi mang ý trêu chọc, tùy ngữ cảnh).",
    variation: ["Bê đê", "Pede"],
    example: "Mấy bà bóng trong công ty vui tính lắm.",
    tags: ["lgbt", "slang"],
  },
  {
    term: "Thảo mai",
    definition:
      "Giả tạo, khéo miệng trước mặt nhưng không thật lòng, gió chiều nào che chiều ấy.",
    variation: ["Giả nai"],
    example: "Nhìn nó thảo mai nịnh sếp kìa.",
    tags: ["nhanxet", "bad"],
  },
  {
    term: "Bạch liên hoa",
    definition:
      "Cô gái bề ngoài trong sáng, yếu đuối, vô tội nhưng nội tâm thâm độc (thuật ngữ phim ảnh).",
    variation: ["Trà xanh"],
    example: "Đừng tin vẻ ngây thơ đó, bạch liên hoa chính hiệu đấy.",
    tags: ["nhanxet", "drama"],
  },

  // --- MẠNG XÃ HỘI & CÔNG NGHỆ ---
  {
    term: "Sống ảo",
    definition:
      "Đăng ảnh/status lung linh lên mạng xã hội, khác xa với thực tế đời thường.",
    variation: ["Check-in"],
    example: "Đi cafe chủ yếu để chụp ảnh sống ảo thôi.",
    tags: ["lifestyle", "online"],
  },
  {
    term: "Câu like",
    definition:
      "Làm mọi cách (kể cả lố lăng/bịa đặt) để có nhiều lượt thích/tương tác.",
    variation: ["Kiếm fame"],
    example: "Nó bịa chuyện để câu like đấy.",
    tags: ["online"],
  },
  {
    term: "Anh hùng bàn phím",
    definition:
      "Người chỉ dám to mồm, hung hăng trên mạng, còn ngoài đời thì nhút nhát hoặc không dám lộ diện.",
    variation: ["Keyboard warrior"],
    example: "Kệ mấy thằng anh hùng bàn phím đi em.",
    tags: ["online", "bad"],
  },
  {
    term: "Lót dép",
    definition: "Ngồi chờ, đặt chỗ để hóng chuyện hoặc chờ kết quả.",
    variation: ["Hóng"],
    example: "Lót dép hóng biến căng.",
    tags: ["online", "hóng"],
  },
  {
    term: "Tối cổ",
    definition:
      "Người lạc hậu, không biết tin tức hot/drama đang diễn ra trên mạng.",
    variation: ["Người hang động"],
    example: "Tao vừa ngủ dậy, ai tóm tắt hộ không tao thành người tối cổ mất.",
    tags: ["online", "nhanxet"],
  },
  {
    term: "Bóc phốt",
    definition:
      "Công khai chuyện xấu, bí mật đời tư của ai đó lên mạng xã hội để mọi người chỉ trích.",
    variation: ["Expose"],
    example: "Vụ bóc phốt trà xanh đang hot rần rần.",
    tags: ["drama", "online"],
  },
  {
    term: "Tẩy trắng",
    definition:
      "Cố gắng xóa bỏ tiếng xấu, làm lại hình ảnh đẹp đẽ sau scandal (thường dùng cho nghệ sĩ).",
    variation: ["Whitewash"],
    example: "Công ty đang chi tiền tẩy trắng cho gà nhà.",
    tags: ["showbiz", "bad"],
  },
  {
    term: "Lùa gà",
    definition:
      "Dụ dỗ những người mới, thiếu kinh nghiệm vào các dự án đầu tư/khóa học lừa đảo để trục lợi.",
    variation: ["Lùa vịt"],
    example: "Mấy khoá học làm giàu toàn là lùa gà.",
    tags: ["scam", "business"],
  },
  {
    term: "Inbox",
    definition: "Nhắn tin riêng.",
    variation: ["Ib", "Check ib"],
    example: "Check inbox đi bà ơi.",
    tags: ["online"],
  },
  {
    term: "Seen",
    definition:
      "Đã xem tin nhắn nhưng không trả lời (Seen không rep). Hành động được cho là bất lịch sự.",
    variation: ["Đã xem"],
    example: "Nhắn tin tỏ tình mà nó seen không rep, đau lòng.",
    tags: ["online", "rude"],
  },
  {
    term: "Tag",
    definition: "Gắn thẻ tên tài khoản của ai đó vào bài viết/bình luận.",
    variation: ["Gắn thẻ"],
    example: "Nhớ tag tao vào ảnh nhé.",
    tags: ["online"],
  },
  {
    term: "Block",
    definition: "Chặn liên lạc, chặn tài khoản mạng xã hội.",
    variation: ["Chặn"],
    example: "Chia tay xong tao block nó luôn.",
    tags: ["online"],
  },
  {
    term: "Unfriend",
    definition: "Hủy kết bạn trên mạng xã hội.",
    variation: ["Hủy kb"],
    example: "Giận nhau nên unfriend rồi.",
    tags: ["online"],
  },
  {
    term: "Ava",
    definition: "Avatar - Ảnh đại diện.",
    variation: ["Avatar"],
    example: "Mới đổi ava, vào like cho tao đi.",
    tags: ["online"],
  },
  {
    term: "Meme",
    definition: "Hình ảnh/video chế hài hước lan truyền trên mạng.",
    variation: ["Ảnh chế"],
    example: "Thằng đó là chúa tể meme.",
    tags: ["funny", "pic"],
  },

  // --- GAME & INTERNET SLANG ---
  {
    term: "Gank",
    definition:
      "Đi bắt lẻ đối phương (game), hoặc nghĩa bóng là bị phụ huynh/giáo viên bắt quả tang khi đang làm việc riêng.",
    variation: ["Úp sọt"],
    example: "Đang chơi game thì bị mẹ gank.",
    tags: ["game", "life"],
  },
  {
    term: "AFK",
    definition:
      "Away From Keyboard. Treo máy, người chơi không điều khiển nhân vật, đứng im.",
    variation: ["Treo máy"],
    example: "Đang combat mà thằng rừng AFK, tức điên.",
    tags: ["game"],
  },
  {
    term: "Hack",
    definition:
      "Gian lận trong game, hoặc chỉ ai đó làm được việc khó tin như hack.",
    variation: ["Cheater"],
    example: "Mày bắn hay thế, hack à?",
    tags: ["game", "skill"],
  },
  {
    term: "Leo rank",
    definition: "Chơi game xếp hạng để tăng bậc (rank).",
    variation: ["Cày rank"],
    example: "Tối nay thức đêm leo rank Cao Thủ.",
    tags: ["game"],
  },
  {
    term: "Game thủ",
    definition: "Người chơi game điêu luyện hoặc chuyên nghiệp.",
    variation: ["Gamer"],
    example: "Nhìn nó thao tác tay như game thủ chuyên nghiệp.",
    tags: ["game", "job"],
  },
  {
    term: "Wibu",
    definition:
      "Weaboo. Người cuồng văn hóa Nhật Bản (Anime/Manga) quá mức (thường dùng trêu chọc).",
    variation: ["Otaku"],
    example: "Phòng nó toàn truyện tranh với figure, đúng là wibu chúa.",
    tags: ["hobby", "anime"],
  },
  {
    term: "Cosplay",
    definition: "Hóa trang thành nhân vật hoạt hình/game.",
    variation: ["Hóa trang"],
    example: "Lễ hội cosplay năm nay hoành tráng quá.",
    tags: ["hobby"],
  },
  {
    term: "Netizen",
    definition: "Cư dân mạng (từ gốc tiếng Anh của 'Giang cư mận').",
    variation: ["Cộng đồng mạng"],
    example: "Netizen Hàn Quốc rất khắt khe.",
    tags: ["online"],
  },

  // --- CUỘC SỐNG, HỌC TẬP & CÔNG VIỆC ---
  {
    term: "Deadline",
    definition:
      "Hạn chót hoàn thành công việc/bài tập. Nỗi ám ảnh của sinh viên và người đi làm.",
    variation: ["Hạn chót"],
    example: "Chạy deadline sấp mặt.",
    tags: ["work", "school"],
  },
  {
    term: "OT",
    definition:
      "Overtime. Làm thêm giờ (thường là không lương hoặc bị ép buộc).",
    variation: ["Tăng ca"],
    example: "Dạo này ngày nào cũng OT đến 9h tối.",
    tags: ["work"],
  },
  {
    term: "Full-time",
    definition: "Làm việc toàn thời gian (8 tiếng/ngày).",
    variation: ["Chính thức"],
    example: "Tao mới kiếm được việc full-time lương ổn.",
    tags: ["work"],
  },
  {
    term: "Part-time",
    definition: "Làm việc bán thời gian (theo ca).",
    variation: ["Làm thêm"],
    example: "Sinh viên đi làm part-time kiếm thêm thu nhập.",
    tags: ["work"],
  },
  {
    term: "Freelancer",
    definition: "Người làm việc tự do, không thuộc biên chế công ty nào.",
    variation: ["Làm tự do"],
    example: "Làm freelancer sướng cái là tự do thời gian.",
    tags: ["work"],
  },
  {
    term: "Start-up",
    definition: "Khởi nghiệp.",
    variation: ["Khởi nghiệp"],
    example: "Nó rủ tao tham gia start-up bán trà sữa.",
    tags: ["work"],
  },
  {
    term: "GPA",
    definition: "Điểm trung bình học tập tích lũy.",
    variation: ["Điểm tổng kết"],
    example: "Kỳ này GPA thấp quá chắc mất học bổng.",
    tags: ["school"],
  },
  {
    term: "Confession",
    definition:
      "Trang fanpage ẩn danh của trường/hội nhóm để mọi người gửi tâm sự kín.",
    variation: ["Cfs"],
    example: "Đăng confession tìm người yêu đi.",
    tags: ["school", "online"],
  },
  {
    term: "Pass môn",
    definition: "Qua môn, đủ điểm đạt.",
    variation: ["Qua môn"],
    example: "Cầu trời cho con pass môn Toán cao cấp.",
    tags: ["school"],
  },
  {
    term: "Học bá",
    definition:
      "Người học cực giỏi, điểm cao chót vót, là thần tượng trong lớp.",
    variation: ["Con nhà người ta"],
    example: "Xin vía học bá để thi tốt.",
    tags: ["school", "khen"],
  },
  {
    term: "Viêm màng túi",
    definition: "Hết tiền, cháy túi.",
    variation: ["Đỗ nghèo khỉ"],
    example: "Cuối tháng rồi, bệnh viêm màng túi lại tái phát.",
    tags: ["money"],
  },
  {
    term: "Hít khí trời",
    definition: "Sống qua ngày mà không có tiền ăn, đói meo.",
    variation: ["Cạp đất"],
    example: "Hết tiền rồi, giờ chỉ có nước hít khí trời sống qua ngày.",
    tags: ["money", "sad"],
  },
  {
    term: "Đỗ nghèo khỉ",
    definition:
      "Nghèo rớt mồng tơi (chế từ phim 'Vua Hài Kịch' - Đỗ Thánh -> Đỗ Nghèo Khỉ).",
    variation: ["Nghèo"],
    example: "Kiếp đỗ nghèo khỉ bao giờ mới giàu.",
    tags: ["money", "funny"],
  },
  {
    term: "Chill",
    definition: "Thư giãn, thoải mái, dễ chịu (Chill phết).",
    variation: ["Thư giãn"],
    example: "Cuối tuần kiếm quán cafe nào chill chill ngồi đi.",
    tags: ["lifestyle"],
  },
  {
    term: "Dân tổ",
    definition: "Nhóm thanh niên hay đua xe, lạng lách đánh võng (Tổ lái).",
    variation: ["Racing boy"],
    example: "Ra đường sợ nhất gặp mấy anh dân tổ.",
    tags: ["traffic", "bad"],
  },
  {
    term: "Nghịch tử",
    definition:
      "Đứa con ngỗ nghịch, hay quậy phá hoặc 'báo' cha mẹ (dùng hài hước).",
    variation: ["Báo con"],
    example: "Con với cái, đúng là nghịch tử.",
    tags: ["family", "funny"],
  },
  {
    term: "Xanh chín",
    definition: "Thái độ sòng phẳng, rõ ràng, chơi đẹp hoặc chơi tới bến.",
    variation: ["Sòng phẳng"],
    example: "Vụ này tao xanh chín với mày luôn.",
    tags: ["attitude"],
  },
  {
    term: "Gáy",
    definition:
      "Tuyên bố hùng hồn, khoác lác trước khi làm (thường sau đó thất bại thì bị chê là 'gáy sớm').",
    variation: ["Nổ"],
    example: "Chưa thắng đã gáy khét lẹt.",
    tags: ["game", "talk"],
  },
  {
    term: "Non",
    definition: "Trình độ còn yếu, chưa có kinh nghiệm, còn xanh và non lắm.",
    variation: ["Gà"],
    example: "Chú em còn non lắm, học hỏi thêm đi.",
    tags: ["nhanxet"],
  },
  {
    term: "Mù đường",
    definition:
      "Không biết đường đi, Google Maps cũng bó tay, đi đâu cũng lạc.",
    variation: ["Lạc trôi"],
    example: "Đừng rủ nó làm người dẫn đường, nó mù đường đấy.",
    tags: ["skill", "funny"],
  },
  {
    term: "Não cá vàng",
    definition: "Trí nhớ kém, hay quên trước quên sau.",
    variation: ["Hay quên"],
    example: "Tao não cá vàng quá, lại quên chìa khóa rồi.",
    tags: ["memory"],
  },
  {
    term: "Tay nhanh hơn não",
    definition:
      "Làm hoặc nói quá nhanh trước khi kịp suy nghĩ kỹ, thường gây hậu quả ngớ ngẩn.",
    variation: ["Cầm đèn chạy trước ô tô"],
    example: "Bình luận dạo cho cố vào, đúng là tay nhanh hơn não.",
    tags: ["action", "bad"],
  },
  {
    term: "Thánh",
    definition:
      "Từ dùng để gọi những người cực giỏi hoặc làm những trò lố bịch một cách buồn cười (Thánh ăn, Thánh soi).",
    variation: ["Cao thủ"],
    example: "Thánh soi đã phát hiện ra chi tiết lạ trong bức ảnh.",
    tags: ["khen", "funny"],
  },
  {
    term: "Cà khịa",
    definition:
      "Hành động châm chọc, mỉa mai người khác một cách nhẹ nhàng, hài hước hoặc thâm thúy để gây cười hoặc gây ức chế.",
    variation: ["Khịa"],
    example: "Nó chuyên đi cà khịa khắp xóm.",
    tags: ["daily", "meme"],
  },
  {
    term: "Tém tém lại",
    definition:
      "Biết điểm dừng, bớt làm lố, bớt phô trương hoặc cư xử chừng mực lại.",
    variation: ["Tém lại"],
    example: "Cười duyên cái coi, tém tém lại bớt đi bà.",
    tags: ["nhanxet", "loikhuyen"],
  },
  {
    term: "Tạch",
    definition:
      "Thất bại, trượt (thường dùng cho thi cử hoặc phỏng vấn xin việc).",
    variation: ["Rớt"],
    example: "Sáng nay đi phỏng vấn mà tạch rồi.",
    tags: ["school", "work"],
  },
  {
    term: "Vã",
    definition:
      "Trạng thái khao khát, thèm muốn một cái gì đó tột độ (thường là vã người yêu/thèm có bồ).",
    variation: ["Đói"],
    example: "Mùa đông đến rồi, vã người yêu quá.",
    tags: ["camxuc", "tinhyeu"],
  },
  {
    term: "Cắm sừng",
    definition:
      "Phản bội trong tình yêu, lén lút quan hệ với người khác sau lưng người yêu.",
    variation: ["Mọc sừng"],
    example: "Yêu nhau 3 năm rồi mà nó nỡ cắm sừng tao.",
    tags: ["tinhyeu", "bad"],
  },
  {
    term: "Ping cao",
    definition:
      "Phản xạ chậm, tiếp thu thông tin chậm chạp (mượn thuật ngữ độ trễ mạng trong game để chỉ người).",
    variation: ["Lag"],
    example: "Nói nãy giờ mà mặt nó vẫn ngơ ra, đúng là ping cao.",
    tags: ["game", "daily"],
  },
  // =================================================================
  // CÔNG SỞ & SỰ NGHIỆP (OFFICE LIFE) - 40 TỪ
  // =================================================================
  {
    term: "KPI",
    definition:
      "Key Performance Indicator. Chỉ số đánh giá hiệu quả công việc, nỗi ám ảnh hàng tháng/quý của dân văn phòng.",
    variation: ["Chạy số"],
    example: "Cuối tháng rồi mà chưa đạt KPI, chắc bị trừ lương quá.",
    tags: ["congso", "work"],
  },
  {
    term: "Burnout",
    definition:
      "Tình trạng kiệt sức cả về thể chất lẫn tinh thần do áp lực công việc kéo dài.",
    variation: ["Sập nguồn"],
    example: "Làm việc liên tục 12 tiếng mỗi ngày khiến tao bị burnout.",
    tags: ["congso", "suckhoe"],
  },
  {
    term: "Layoff",
    definition:
      "Cắt giảm nhân sự hàng loạt. Cơn ác mộng của nhân viên trong thời kỳ kinh tế khó khăn.",
    variation: ["Sa thải"],
    example: "Công ty vừa thông báo đợt layoff mới, lo quá.",
    tags: ["congso", "work"],
  },
  {
    term: "Probation",
    definition:
      "Thời gian thử việc. Giai đoạn 'nín thở' thể hiện bản thân trước khi được nhận chính thức.",
    variation: ["Thử việc"],
    example: "Hết 2 tháng probation rồi mà chưa thấy sếp đả động gì.",
    tags: ["congso", "work"],
  },
  {
    term: "Intern",
    definition:
      "Thực tập sinh. Những người trẻ mới vào nghề, thường bị sai vặt hoặc làm những việc không tên.",
    variation: ["Thực tập"],
    example: "Mấy em intern năm nay nhanh nhẹn phết.",
    tags: ["congso", "student"],
  },
  {
    term: "Fresher",
    definition:
      "Nhân viên mới tốt nghiệp, có ít hoặc chưa có kinh nghiệm, cao hơn Intern một bậc.",
    variation: ["Mới ra trường"],
    example: "Tuyển Fresher lương khởi điểm bao nhiêu?",
    tags: ["congso", "work"],
  },
  {
    term: "Junior",
    definition:
      "Nhân viên có ít kinh nghiệm (thường 1-3 năm), vẫn cần sự hướng dẫn.",
    variation: ["Gà mới"],
    example: "Junior dev mà code ghê gớm thật.",
    tags: ["congso", "work"],
  },
  {
    term: "Senior",
    definition:
      "Nhân viên dày dạn kinh nghiệm, là trụ cột chuyên môn của team.",
    variation: ["Lão làng"],
    example: "Hỏi anh Senior kia kìa, ổng biết hết đấy.",
    tags: ["congso", "work"],
  },
  {
    term: "Mentor",
    definition:
      "Người hướng dẫn, dìu dắt nhân viên mới hoặc người ít kinh nghiệm hơn.",
    variation: ["Sư phụ"],
    example: "Tìm được một mentor giỏi là may mắn lớn.",
    tags: ["congso", "work"],
  },
  {
    term: "Offer",
    definition: "Lời mời làm việc, thường đi kèm với mức lương và đãi ngộ.",
    variation: ["Deal lương"],
    example: "Tao vừa nhận được offer bên công ty kia, lương x2.",
    tags: ["congso", "work"],
  },
  {
    term: "CV",
    definition:
      "Curriculum Vitae. Hồ sơ xin việc, nơi 'flex' kinh nghiệm và kỹ năng.",
    variation: ["Hồ sơ"],
    example: "Rải CV khắp nơi mà chưa thấy ai gọi.",
    tags: ["congso", "work"],
  },
  {
    term: "Cover Letter",
    definition:
      "Thư xin việc gửi kèm CV, nơi chém gió về đam mê và lý do chọn công ty.",
    variation: ["Thư ngỏ"],
    example: "Viết cover letter sao cho ấn tượng nhỉ?",
    tags: ["congso", "work"],
  },
  {
    term: "Team Building",
    definition:
      "Hoạt động xây dựng đội ngũ. Thực tế thường là đi du lịch hành xác hoặc chơi trò chơi vận động mệt nghỉ.",
    variation: ["Đi chơi công ty"],
    example: "Sợ nhất là đi team building phải nhảy bao bố dưới nắng.",
    tags: ["congso", "funny"],
  },
  {
    term: "Happy Hour",
    definition:
      "Giờ nghỉ giải lao ăn uống vui vẻ tại văn phòng (thường là chiều thứ 6).",
    variation: ["Tiệc trà"],
    example: "Đến giờ Happy Hour rồi, trà sữa về kìa.",
    tags: ["congso", "food"],
  },
  {
    term: "Log time",
    definition:
      "Ghi nhận thời gian làm việc vào hệ thống. Nỗi ám ảnh cuối ngày/tuần.",
    variation: ["Chấm công"],
    example: "Quên log time là coi như hôm nay làm không công.",
    tags: ["congso", "work"],
  },
  {
    term: "Meeting",
    definition:
      "Họp. Hoạt động chiếm 80% thời gian nhưng đôi khi không giải quyết được gì.",
    variation: ["Họp hành"],
    example: "Sáng giờ meeting liên tục 3 cái, chưa làm được gì.",
    tags: ["congso", "work"],
  },
  {
    term: "Task",
    definition: "Nhiệm vụ, đầu việc được giao.",
    variation: ["Việc"],
    example: "Nhiều task quá làm không xuể.",
    tags: ["congso", "work"],
  },
  {
    term: "Brief",
    definition: "Bản yêu cầu công việc chi tiết từ khách hàng hoặc sếp.",
    variation: ["Đề bài"],
    example: "Đọc cái brief mà không hiểu khách muốn gì.",
    tags: ["congso", "mkt"],
  },
  {
    term: "Pitching",
    definition:
      "Thuyết trình ý tưởng để giành dự án hoặc thuyết phục khách hàng.",
    variation: ["Đấu thầu"],
    example: "Mai đi pitching dự án triệu đô, run quá.",
    tags: ["congso", "mkt"],
  },
  {
    term: "Budget",
    definition: "Ngân sách. Số tiền được phép chi tiêu cho dự án.",
    variation: ["Kinh phí"],
    example: "Khách đòi làm viral video nhưng budget có 5 triệu.",
    tags: ["congso", "money"],
  },
  {
    term: "ASAP",
    definition:
      "As Soon As Possible. Càng sớm càng tốt. Từ gây ức chế nhất trong email.",
    variation: ["Gấp"],
    example: "Gửi báo cáo cho chị ASAP nhé.",
    tags: ["congso", "work"],
  },
  {
    term: "CC",
    definition: "Carbon Copy. Gửi email cho nhiều người cùng nắm thông tin.",
    variation: ["Đồng kính gửi"],
    example: "Nhớ cc sếp vào email nhé.",
    tags: ["congso", "tech"],
  },
  {
    term: "Forward",
    definition: "Chuyển tiếp email hoặc tin nhắn.",
    variation: ["Fwd"],
    example: "Forward mail của khách hàng cho tao với.",
    tags: ["congso", "tech"],
  },
  {
    term: "Remote",
    definition: "Làm việc từ xa, không cần lên văn phòng.",
    variation: ["Wfh"],
    example: "Công ty cho phép làm remote 2 ngày/tuần.",
    tags: ["congso", "lifestyle"],
  },
  {
    term: "Hybrid",
    definition: "Mô hình làm việc kết hợp giữa lên văn phòng và làm tại nhà.",
    variation: ["Kết hợp"],
    example: "Giờ xu hướng là làm việc hybrid.",
    tags: ["congso", "lifestyle"],
  },
  {
    term: "Sếp",
    definition:
      "Người quản lý trực tiếp. Có thể là 'Idol' hoặc 'Tư bản' tùy tính cách.",
    variation: ["Boss", "Cấp trên"],
    example: "Sếp hôm nay vui tính thế, chắc mới trúng số.",
    tags: ["congso", "xungho"],
  },
  {
    term: "Đồng nghiệp",
    definition: "Người làm cùng công ty. Có thể là 'cạ cứng' hoặc 'kẻ thù'.",
    variation: ["Colleague"],
    example: "Đồng nghiệp tốt là động lực đi làm mỗi ngày.",
    tags: ["congso", "xungho"],
  },
  {
    term: "Pantry",
    definition:
      "Khu vực ăn uống, pha chế trong văn phòng. Nơi buôn chuyện xuyên lục địa.",
    variation: ["Bếp"],
    example: "Ra pantry làm cốc cafe chém gió tí.",
    tags: ["congso", "place"],
  },
  {
    term: "Onboard",
    definition: "Quá trình tiếp nhận và hòa nhập của nhân viên mới.",
    variation: ["Nhập môn"],
    example: "Tuần này bận onboard cho nhân viên mới.",
    tags: ["congso", "work"],
  },
  {
    term: "Out source",
    definition:
      "Thuê nhân sự hoặc công ty bên ngoài làm việc thay vì nhân viên chính thức.",
    variation: ["Thuê ngoài"],
    example: "Dự án này phải out source phần thiết kế.",
    tags: ["congso", "work"],
  },
  {
    term: "Chạy số",
    definition: "Cố gắng đạt doanh số bán hàng, thường dồn dập vào cuối tháng.",
    variation: ["Đẩy số"],
    example: "Sale cuối tháng chạy số sấp mặt.",
    tags: ["congso", "sale"],
  },
  {
    term: "Hoa hồng",
    definition: "Tiền thưởng trích phần trăm từ doanh thu.",
    variation: ["Commission"],
    example: "Chốt được deal này hoa hồng đậm lắm.",
    tags: ["congso", "money"],
  },
  {
    term: "Thưởng tết",
    definition:
      "Khoản tiền được mong chờ nhất năm, quyết định cái Tết ấm no hay bánh chưng không thịt.",
    variation: ["Tháng 13"],
    example: "Năm nay kinh tế buồn, không biết có thưởng tết không.",
    tags: ["congso", "money"],
  },
  {
    term: "Bảo hiểm",
    definition:
      "BHXH, BHYT. Quyền lợi cơ bản nhưng hay bị công ty 'quên' đóng.",
    variation: ["Đóng bảo hiểm"],
    example: "Công ty này đóng bảo hiểm full lương đó.",
    tags: ["congso", "benefit"],
  },
  {
    term: "Team",
    definition: "Đội nhóm làm việc.",
    variation: ["Nhóm"],
    example: "Team mình hôm nay đi ăn lẩu nhé.",
    tags: ["congso", "work"],
  },
  {
    term: "Leader",
    definition: "Trưởng nhóm. Người đứng mũi chịu sào.",
    variation: ["Nhóm trưởng"],
    example: "Leader team tao hiền khô à.",
    tags: ["congso", "xungho"],
  },
  {
    term: "Staff",
    definition: "Nhân viên.",
    variation: ["Nhân viên"],
    example: "Staff bữa nay nghỉ nhiều quá.",
    tags: ["congso", "work"],
  },
  {
    term: "Manager",
    definition: "Quản lý cấp cao hơn Leader.",
    variation: ["Quản lý"],
    example: "Manager mới về, nghe nói khó tính lắm.",
    tags: ["congso", "work"],
  },
  {
    term: "CEO",
    definition: "Giám đốc điều hành. Người to nhất công ty (thường là vậy).",
    variation: ["Tổng giám đốc"],
    example: "CEO công ty tao là 9x đấy.",
    tags: ["congso", "work"],
  },
  {
    term: "Startup",
    definition:
      "Công ty khởi nghiệp. Môi trường năng động nhưng rủi ro cao, thường làm việc bán mạng.",
    variation: ["Khởi nghiệp"],
    example: "Làm startup học được nhiều nhưng cực.",
    tags: ["congso", "work"],
  },

  // =================================================================
  // TRƯỜNG LỚP & HỌC ĐƯỜNG (SCHOOL LIFE) - 30 TỪ
  // =================================================================
  {
    term: "Học tủ",
    definition:
      "Chỉ học một vài bài trọng tâm với hy vọng đề thi sẽ ra trúng bài đó.",
    variation: ["Ôn tủ"],
    example: "Học tủ bài 'Vợ nhặt' ai ngờ ra 'Chiếc thuyền ngoài xa'.",
    tags: ["school", "risk"],
  },
  {
    term: "Lệch tủ",
    definition: "Hậu quả của việc học tủ nhưng đề thi ra bài khác.",
    variation: ["Tủ đè"],
    example: "Sáng nay thi Văn lệch tủ, khóc tiếng mán.",
    tags: ["school", "fail"],
  },
  {
    term: "Trúng tủ",
    definition: "Đề thi ra đúng bài mình đã học kỹ.",
    variation: ["Trúng phóc"],
    example: "Hôm nay trúng tủ, viết mỏi tay.",
    tags: ["school", "lucky"],
  },
  {
    term: "Phao",
    definition: "Tài liệu quay cóp thu nhỏ để mang vào phòng thi.",
    variation: ["Tài liệu"],
    example: "Giám thị gắt lắm, không giở phao được đâu.",
    tags: ["school", "cheat"],
  },
  {
    term: "Sổ đầu bài",
    definition:
      "Cuốn sổ ghi chép tình hình lớp học. Nỗi ám ảnh của những học sinh nghịch ngợm.",
    variation: ["Sổ tử thần"],
    example: "Bị ghi tên vào sổ đầu bài là xác định mời phụ huynh.",
    tags: ["school", "scary"],
  },
  {
    term: "Sao đỏ",
    definition:
      "Đội cờ đỏ. Những học sinh có quyền lực theo dõi nề nếp, thường bị ghét.",
    variation: ["Cờ đỏ"],
    example: "Nó làm sao đỏ nên hống hách lắm.",
    tags: ["school", "role"],
  },
  {
    term: "Giám thị",
    definition: "Thầy cô coi thi hoặc quản lý nề nếp, có đôi mắt 'cú vọ'.",
    variation: ["Thầy giám thị"],
    example: "Thầy giám thị đang đi tuần kìa, trật tự đi.",
    tags: ["school", "role"],
  },
  {
    term: "Bùng học",
    definition: "Trốn học đi chơi.",
    variation: ["Cúp cua", "Cúp tiết"],
    example: "Hôm nay trời đẹp, bùng học đi net không?",
    tags: ["school", "bad"],
  },
  {
    term: "Điểm danh hộ",
    definition: "Giả giọng hoặc ký tên thay cho bạn khi thầy cô điểm danh.",
    variation: ["Điểm danh dùm"],
    example: "Lát thầy điểm danh nhớ hô có hộ tao nhé.",
    tags: ["school", "cheat"],
  },
  {
    term: "Nợ môn",
    definition: "Chưa qua môn học, phải học lại hoặc thi lại.",
    variation: ["Rớt môn"],
    example: "Sinh viên năm cuối mà còn nợ môn Thể dục.",
    tags: ["school", "fail"],
  },
  {
    term: "Học lại",
    definition: "Đăng ký học lại môn đã trượt, tốn tiền và thời gian.",
    variation: ["Học cải thiện"],
    example: "Đóng tiền học lại xót hết cả ruột.",
    tags: ["school", "money"],
  },
  {
    term: "Thi lại",
    definition: "Thi lần 2 để vớt vát điểm số.",
    variation: ["Re-test"],
    example: "Đừng để phải thi lại, hè này nóng lắm.",
    tags: ["school", "exam"],
  },
  {
    term: "Bằng giỏi",
    definition: "Tấm bằng tốt nghiệp loại Giỏi, mục tiêu của con nhà người ta.",
    variation: ["Xuất sắc"],
    example: "Nó tốt nghiệp bằng giỏi đấy, không phải dạng vừa đâu.",
    tags: ["school", "degree"],
  },
  {
    term: "Thất nghiệp",
    definition: "Ra trường nhưng chưa kiếm được việc làm.",
    variation: ["Ở nhà ăn bám"],
    example: "Cầm bằng cử nhân mà vẫn thất nghiệp.",
    tags: ["school", "work"],
  },
  {
    term: "Luận văn",
    definition: "Bài nghiên cứu cuối khóa để tốt nghiệp đại học.",
    variation: ["Khóa luận"],
    example: "Đang làm luận văn tốt nghiệp, stress quá.",
    tags: ["school", "work"],
  },
  {
    term: "Đồ án",
    definition:
      "Bài tập lớn hoặc sản phẩm cuối khóa (thường khối kỹ thuật/nghệ thuật).",
    variation: ["Project"],
    example: "Đêm nay lại thức trắng làm đồ án.",
    tags: ["school", "work"],
  },
  {
    term: "Mời phụ huynh",
    definition: "Hình phạt đáng sợ nhất thời học sinh.",
    variation: ["Gặp gia đình"],
    example: "Nghịch dại bị mời phụ huynh, về no đòn.",
    tags: ["school", "scary"],
  },
  {
    term: "Hạnh kiểm",
    definition: "Đánh giá đạo đức học sinh.",
    variation: ["Nết na"],
    example: "Học giỏi mà hạnh kiểm Khá thì vẫn mất danh hiệu.",
    tags: ["school", "rank"],
  },
  {
    term: "Giáo viên chủ nhiệm",
    definition: "GVCN. Người nắm quyền sinh sát trong lớp.",
    variation: ["Cô chủ nhiệm"],
    example: "Cô chủ nhiệm lớp tao tâm lý lắm.",
    tags: ["school", "role"],
  },
  {
    term: "Họp lớp",
    definition: "Sự kiện hứa hẹn thì đông nhưng đi thì vắng hoe.",
    variation: ["Reunion"],
    example: "Họp lớp năm nào cũng chỉ có mấy mống này.",
    tags: ["school", "event"],
  },
  {
    term: "Kỷ yếu",
    definition:
      "Bộ ảnh chụp cuối cấp để lưu giữ kỷ niệm (và để đăng Facebook).",
    variation: ["Chụp kỷ yếu"],
    example: "Lớp đang cãi nhau vụ concept chụp kỷ yếu.",
    tags: ["school", "photo"],
  },
  {
    term: "Prom",
    definition: "Dạ hội cuối cấp, văn hóa du nhập từ phương Tây.",
    variation: ["Dạ hội"],
    example: "Tìm bạn nhảy đi prom khó quá.",
    tags: ["school", "party"],
  },
  {
    term: "Căng tin",
    definition: "Nơi bán đồ ăn trong trường, thiên đường quà vặt.",
    variation: ["Cantin"],
    example: "Giờ ra chơi xuống căng tin làm gói mì tôm chanh.",
    tags: ["school", "food"],
  },
  {
    term: "Trực nhật",
    definition: "Nhiệm vụ quét dọn lớp học, lau bảng.",
    variation: ["Lau bảng"],
    example: "Đến muộn mà hôm nay lại đến phiên trực nhật.",
    tags: ["school", "duty"],
  },
  {
    term: "Chép bài",
    definition: "Sao chép bài vở của bạn hoặc bài trên bảng.",
    variation: ["Mượn vở"],
    example: "Cho tao mượn vở chép bài hôm qua với.",
    tags: ["school", "study"],
  },
  {
    term: "Gửi xe",
    definition: "Hoạt động tốn 2-5k mỗi ngày.",
    variation: ["Vé xe"],
    example: "Bác bảo vệ nhà xe khó tính lắm.",
    tags: ["school", "daily"],
  },
  {
    term: "Đồng phục",
    definition: "Quần áo quy định của trường.",
    variation: ["Áo trắng"],
    example: "Thứ 2 phải mặc đồng phục chào cờ.",
    tags: ["school", "clothes"],
  },
  {
    term: "Học thêm",
    definition: "Đi học ngoài giờ chính khóa.",
    variation: ["Lò luyện"],
    example: "Lịch học thêm kín cả tuần.",
    tags: ["school", "study"],
  },
  {
    term: "Chuyển trường",
    definition: "Chuyển sang trường khác học.",
    variation: ["New school"],
    example: "Có học sinh mới chuyển trường đến lớp mình.",
    tags: ["school", "event"],
  },
  {
    term: "Bế giảng",
    definition: "Lễ kết thúc năm học, thường có màn khóc lóc chia tay.",
    variation: ["Tổng kết"],
    example: "Bế giảng năm nay buồn quá.",
    tags: ["school", "event"],
  },

  // =================================================================
  // TÌNH YÊU & MỐI QUAN HỆ (LOVE & RELATIONSHIPS) - 40 TỪ
  // =================================================================
  {
    term: "Sugar Daddy",
    definition:
      "Bố đường. Người đàn ông lớn tuổi bao nuôi các cô gái trẻ để đổi lấy tình cảm/tình dục.",
    variation: ["Bố nuôi"],
    example: "Nó mới kiếm được sugar daddy giàu lắm.",
    tags: ["tinhyeu", "money"],
  },
  {
    term: "Sugar Baby",
    definition: "Bé đường. Các cô gái trẻ được bao nuôi.",
    variation: ["Con nuôi"],
    example: "Làm sugar baby sướng thật, được mua túi hiệu suốt.",
    tags: ["tinhyeu", "money"],
  },
  {
    term: "Phi công",
    definition: "Chàng trai trẻ yêu phụ nữ lớn tuổi hơn.",
    variation: ["Phi công trẻ"],
    example: "Chị ấy tuyển phi công lái máy bay bà già.",
    tags: ["tinhyeu", "funny"],
  },
  {
    term: "Máy bay",
    definition: "Phụ nữ lớn tuổi yêu chàng trai trẻ (Máy bay bà già).",
    variation: ["Chị đẹp"],
    example: "Lái máy bay giờ đang là mốt.",
    tags: ["tinhyeu", "funny"],
  },
  {
    term: "Cỏ non",
    definition: "Cô gái trẻ tuổi (thường đi với Trâu già gặm cỏ non).",
    variation: ["Gái trẻ"],
    example: "Ông kia già khú đế mà thích gặm cỏ non.",
    tags: ["tinhyeu", "funny"],
  },
  {
    term: "F.A",
    definition: "Forever Alone. Độc thân vui tính (hoặc không vui lắm).",
    variation: ["Ế"],
    example: "Hội F.A lập đàn cầu mưa Valentine.",
    tags: ["tinhyeu", "status"],
  },
  {
    term: "Thoát ế",
    definition: "Tìm được người yêu, hết độc thân.",
    variation: ["Có bồ"],
    example: "Ăn chè đậu đỏ để thoát ế.",
    tags: ["tinhyeu", "goal"],
  },
  {
    term: "Gấu",
    definition: "Người yêu (từ lóng kinh điển).",
    variation: ["Bồ", "Người ấy"],
    example: "Noel này vẫn chưa có gấu.",
    tags: ["tinhyeu", "xungho"],
  },
  {
    term: "Cưa đổ",
    definition: "Tán tỉnh thành công.",
    variation: ["Tán đổ"],
    example: "Làm sao để cưa đổ crush đây?",
    tags: ["tinhyeu", "action"],
  },
  {
    term: "Bật đèn xanh",
    definition: "Ra tín hiệu cho phép đối phương tiến tới.",
    variation: ["Mở đường"],
    example: "Nó bật đèn xanh rồi mà mày còn không hiểu à?",
    tags: ["tinhyeu", "action"],
  },
  {
    term: "Em gái mưa",
    definition:
      "Mối quan hệ mập mờ, trên mức bạn bè nhưng chưa phải người yêu (thường là cái cớ).",
    variation: ["Em gái nuôi"],
    example: "Sợ nhất mấy thể loại em gái mưa.",
    tags: ["tinhyeu", "drama"],
  },
  {
    term: "Anh trai mưa",
    definition: "Tương tự em gái mưa nhưng là nam.",
    variation: ["Anh trai nuôi"],
    example: "Chỉ là anh trai mưa thôi mà, ghen gì.",
    tags: ["tinhyeu", "drama"],
  },
  {
    term: "Brotherzone",
    definition: "Bị coi như anh trai, không thể tiến xa hơn.",
    variation: ["Anh trai tốt"],
    example: "Chăm sóc nó bao lâu cuối cùng nhận lại vé brotherzone.",
    tags: ["tinhyeu", "fail"],
  },
  {
    term: "Sisterzone",
    definition: "Bị coi như em gái.",
    variation: ["Em gái tốt"],
    example: "Đau đớn thay phận sisterzone.",
    tags: ["tinhyeu", "fail"],
  },
  {
    term: "Dính thính",
    definition: "Đã lỡ thích ai đó sau khi họ thả thính.",
    variation: ["Đớp thính"],
    example: "Tao dính thính của ẻm rồi.",
    tags: ["tinhyeu", "feeling"],
  },
  {
    term: "Né thính",
    definition: "Cố tình lờ đi hoặc từ chối sự tán tỉnh.",
    variation: ["Tránh thính"],
    example: "Kỹ năng né thính thượng thừa.",
    tags: ["tinhyeu", "skill"],
  },
  {
    term: "Ghen",
    definition: "Cảm xúc khó chịu khi người yêu thân mật với người khác.",
    variation: ["Ghen tuông"],
    example: "Đàn bà ghen thì đáng sợ lắm.",
    tags: ["tinhyeu", "emotion"],
  },
  {
    term: "Chia tay",
    definition: "Chấm dứt mối quan hệ.",
    variation: ["Toang", "Đường ai nấy đi"],
    example: "Mới chia tay xong, rủ đi nhậu đi.",
    tags: ["tinhyeu", "sad"],
  },
  {
    term: "Quay lại",
    definition: "Nối lại tình xưa với người yêu cũ.",
    variation: ["Yêu lại từ đầu"],
    example: "Có không giữ mất đừng tìm, quay lại làm gì.",
    tags: ["tinhyeu", "action"],
  },
  {
    term: "Đổ vỏ",
    definition:
      "Phải nuôi con của người khác (bị lừa là con mình) hoặc gánh hậu quả thay người khác.",
    variation: ["Nuôi con tu hú"],
    example: "Thằng đó xui, bị bắt đổ vỏ.",
    tags: ["tinhyeu", "bad"],
  },
  {
    term: "Chống lầy",
    definition: "Lấy chồng (nói lái).",
    variation: ["Lấy chồng"],
    example: "Bao giờ mày mới chịu chống lầy?",
    tags: ["tinhyeu", "marriage"],
  },
  {
    term: "Xe hoa",
    definition: "Lên xe hoa = Đi lấy chồng.",
    variation: ["Cưới"],
    example: "Bạn bè lên xe hoa hết rồi.",
    tags: ["tinhyeu", "marriage"],
  },
  {
    term: "Thiệp hồng",
    definition: "Thiệp cưới/Thiệp báo tin vui.",
    variation: ["Thiệp cưới"],
    example: "Tháng này nhận 3 cái thiệp hồng, cháy túi.",
    tags: ["tinhyeu", "money"],
  },
  {
    term: "Ăn cơm trước kẻng",
    definition: "Quan hệ tình dục hoặc có thai trước khi cưới.",
    variation: ["Có bầu trước"],
    example: "Thời nay ăn cơm trước kẻng là bình thường.",
    tags: ["tinhyeu", "social"],
  },
  {
    term: "Bác sĩ bảo cưới",
    definition: "Cưới vì lỡ có bầu.",
    variation: ["Chạy bầu"],
    example: "Cặp đó bác sĩ bảo cưới gấp.",
    tags: ["tinhyeu", "marriage"],
  },
  {
    term: "Hợp cạ",
    definition: "Rất hợp nhau về tính cách, sở thích.",
    variation: ["Hợp gu"],
    example: "Tao với nó hợp cạ khoản ăn uống.",
    tags: ["tinhyeu", "friend"],
  },
  {
    term: "Lệch sóng",
    definition: "Không hiểu ý nhau, nói chuyện không hợp.",
    variation: ["Lệch pha"],
    example: "Nói chuyện vài câu là thấy lệch sóng rồi.",
    tags: ["tinhyeu", "fail"],
  },
  {
    term: "Tần số",
    definition:
      "Cùng tần số: Có cùng suy nghĩ, cảm xúc, 'bắt sóng' nhau nhanh.",
    variation: ["Frequency"],
    example: "Tìm được người cùng tần số khó lắm.",
    tags: ["tinhyeu", "soulmate"],
  },
  {
    term: "Rụng trứng",
    definition:
      "Cách nói cường điệu của các bạn nữ khi thấy trai đẹp (muốn có con với anh ấy).",
    variation: ["Mê trai"],
    example: "Thấy ảnh cười mà tao rụng trứng.",
    tags: ["tinhyeu", "funny"],
  },
  {
    term: "Liêm sỉ",
    definition:
      "Lòng tự trọng. Thường dùng cụm 'Rớt liêm sỉ' khi mê trai/gái quá độ.",
    variation: ["Mặt dày"],
    example: "Nhặt liêm sỉ lên em ơi, mê trai vừa thôi.",
    tags: ["tinhyeu", "funny"],
  },
  {
    term: "Vã",
    definition: "Thèm khát có người yêu tột độ.",
    variation: ["Thèm bồ"],
    example: "Vã lắm rồi, ai hốt tôi đi.",
    tags: ["tinhyeu", "status"],
  },
  {
    term: "Mất máu",
    definition: "Choáng váng vì đối phương quá đẹp/sexy.",
    variation: ["Xịt máu mũi"],
    example: "Xem ảnh này xong mất máu quá.",
    tags: ["tinhyeu", "reaction"],
  },
  {
    term: "Nội thất",
    definition: "Chỉ vòng 1 của con gái (từ lóng suồng sã).",
    variation: ["Loa đài"],
    example: "Nhìn mặt xinh mà nội thất hơi kém.",
    tags: ["tinhyeu", "body"],
  },
  {
    term: "Mặt tiền",
    definition: "Gương mặt.",
    variation: ["Nhan sắc"],
    example: "Mặt tiền sáng sủa là một lợi thế.",
    tags: ["tinhyeu", "body"],
  },
  {
    term: "Đi date",
    definition: "Đi hẹn hò.",
    variation: ["Dating"],
    example: "Tối nay tao có kèo đi date.",
    tags: ["tinhyeu", "event"],
  },
  {
    term: "Kèo",
    definition: "Cuộc hẹn hoặc cơ hội.",
    variation: ["Deal"],
    example: "Có kèo đi ăn đồ nướng không?",
    tags: ["daily", "event"],
  },
  {
    term: "Set kèo",
    definition: "Lên lịch hẹn.",
    variation: ["Chốt lịch"],
    example: "Set kèo đi Đà Lạt đi anh em.",
    tags: ["daily", "action"],
  },
  {
    term: "Bể kèo",
    definition: "Hủy hẹn.",
    variation: ["Vỡ kèo"],
    example: "Mưa to quá chắc bể kèo rồi.",
    tags: ["daily", "fail"],
  },
  {
    term: "Lốp xe",
    definition: "Lốp dự phòng. Người thay thế tạm thời.",
    variation: ["Phương án B"],
    example: "Đừng biến mình thành lốp xe của người khác.",
    tags: ["tinhyeu", "sad"],
  },
  {
    term: "Hôn nhân",
    definition: "Nấm mồ của tình yêu (theo quan điểm bi quan).",
    variation: ["Đám cưới"],
    example: "Nghĩ đến hôn nhân là thấy áp lực.",
    tags: ["tinhyeu", "marriage"],
  },

  // =================================================================
  // GAMING & CÔNG NGHỆ (GAMING & TECH) - 40 TỪ
  // =================================================================
  {
    term: "KS",
    definition: "Kill Steal. Cướp công giết địch của đồng đội vào phút chót.",
    variation: ["Cướp kill"],
    example: "Đang combo đẹp thì bị thằng rừng KS.",
    tags: ["game", "annoy"],
  },
  {
    term: "Feed",
    definition: "Chết liên tục trong game, 'nuôi' team địch béo lên.",
    variation: ["Hiến mạng"],
    example: "Thằng Yasuo team mình feed 0/10/0.",
    tags: ["game", "bad"],
  },
  {
    term: "Carry",
    definition: "Người gánh team, gây sát thương chính.",
    variation: ["Chủ lực"],
    example: "Ad carry trận này bắn gắt quá.",
    tags: ["game", "role"],
  },
  {
    term: "Tanker",
    definition: "Người chơi hệ đỡ đòn, trâu bò, đứng chắn cho đồng đội.",
    variation: ["Đỡ đòn"],
    example: "Cần một tanker cứng để mở giao tranh.",
    tags: ["game", "role"],
  },
  {
    term: "Support",
    definition: "Người chơi hỗ trợ, hồi máu hoặc bảo kê chủ lực.",
    variation: ["Sp", "Trợ thủ"],
    example: "Support đâu sao không cắm mắt?",
    tags: ["game", "role"],
  },
  {
    term: "Mid",
    definition: "Đường giữa (Middle lane).",
    variation: ["Ap"],
    example: "Mid team bạn đi gank ghê quá.",
    tags: ["game", "map"],
  },
  {
    term: "Top",
    definition: "Đường trên (Top lane). Nơi của những kẻ solo 1vs1.",
    variation: ["Đường tà thần"],
    example: "Top đang đẩy lẻ, đừng giao tranh.",
    tags: ["game", "map"],
  },
  {
    term: "Bot",
    definition: "Đường dưới (Bottom lane). Thường đi 2 người (Ad + Sp).",
    variation: ["Đường rồng"],
    example: "Bot nát rồi, rừng xuống gank đi.",
    tags: ["game", "map"],
  },
  {
    term: "Jungle",
    definition: "Đi rừng. Vị trí quan trọng kiểm soát bản đồ.",
    variation: ["Rừng", "JG"],
    example: "Rừng team mình ngủ trong rừng luôn rồi.",
    tags: ["game", "role"],
  },
  {
    term: "Ulti",
    definition: "Ultimate. Chiêu cuối, kỹ năng mạnh nhất của nhân vật.",
    variation: ["Chiêu cuối", "R"],
    example: "Nó tung ulti trúng cả 5 người.",
    tags: ["game", "skill"],
  },
  {
    term: "Mana",
    definition: "Năng lượng để dùng chiêu.",
    variation: ["MP"],
    example: "Hết mana rồi, không cứu được đâu.",
    tags: ["game", "status"],
  },
  {
    term: "HP",
    definition: "Health Point. Máu/Sức sống.",
    variation: ["Máu"],
    example: "Còn 1 chấm HP mà vẫn sống, ảo thế.",
    tags: ["game", "status"],
  },
  {
    term: "Buff",
    definition:
      "Tăng sức mạnh hoặc lợi thế (hoặc ám chỉ được nhà phát hành ưu ái).",
    variation: ["Tăng sm"],
    example: "Tướng này mới được buff, mạnh vãi.",
    tags: ["game", "update"],
  },
  {
    term: "Nerf",
    definition: "Giảm sức mạnh (do quá bá đạo nên bị nhà phát hành chỉnh sửa).",
    variation: ["Gõ đầu"],
    example: "Con tủ của tao bị nerf thê thảm.",
    tags: ["game", "update"],
  },
  {
    term: "One hit",
    definition: "Hạ gục đối thủ chỉ bằng một chiêu/một đòn.",
    variation: ["Nhất kích tất sát"],
    example: "Sát thủ one hit ad trong 1 nốt nhạc.",
    tags: ["game", "skill"],
  },
  {
    term: "Headshot",
    definition: "Bắn trúng đầu (thường trong game bắn súng).",
    variation: ["Táo"],
    example: "Pha headshot thần thánh.",
    tags: ["game", "skill"],
  },
  {
    term: "Combo",
    definition: "Chuỗi chiêu thức liên hoàn.",
    variation: ["Chuỗi chiêu"],
    example: "Dính trọn combo là lên bảng đếm số.",
    tags: ["game", "skill"],
  },
  {
    term: "GG",
    definition:
      "Good Game. Game hay (thường dùng để đầu hàng hoặc kết thúc trận đấu).",
    variation: ["Đầu hàng"],
    example: "Phút thứ 15 rồi, GG đi anh em.",
    tags: ["game", "end"],
  },
  {
    term: "Ez",
    definition: "Easy. Dễ dàng (thường dùng để khiêu khích đối thủ khi thắng).",
    variation: ["Dễ"],
    example: "Win game, ez game.",
    tags: ["game", "chat"],
  },
  {
    term: "Smurf",
    definition:
      "Người chơi trình độ cao tạo nick mới để 'chăn gà' ở rank thấp.",
    variation: ["Cày thuê"],
    example: "Gặp thằng smurf bên kia bắn nát gáo.",
    tags: ["game", "player"],
  },
  {
    term: "Try hard",
    definition: "Chơi hết mình, tập trung cao độ để thắng.",
    variation: ["Cố gắng"],
    example: "Đang try hard leo rank, đừng rủ đi chơi.",
    tags: ["game", "attitude"],
  },
  {
    term: "Dis",
    definition: "Disconnect. Mất kết nối mạng.",
    variation: ["Rớt mạng"],
    example: "Đang combat thì bị dis, cay thế.",
    tags: ["game", "tech"],
  },
  {
    term: "Ping",
    definition: "Độ trễ mạng. Ping cao = Lag.",
    variation: ["Ms"],
    example: "Ping 999ms thì chơi bời gì.",
    tags: ["game", "tech"],
  },
  {
    term: "Rank",
    definition: "Xếp hạng trong game.",
    variation: ["Hạng"],
    example: "Mày rank gì rồi? Kim cương chưa?",
    tags: ["game", "status"],
  },
  {
    term: "Skin",
    definition:
      "Trang phục cho nhân vật trong game (thường phải nạp tiền mua).",
    variation: ["Trang phục"],
    example: "Skin này đẹp nhưng đắt quá.",
    tags: ["game", "item"],
  },
  {
    term: "Map",
    definition: "Bản đồ.",
    variation: ["Bản đồ"],
    example: "Nhìn map đi, địch mất dạng rồi.",
    tags: ["game", "info"],
  },
  {
    term: "Gánh tạ",
    definition: "Phải gồng gánh những đồng đội chơi kém (tạ = nặng).",
    variation: ["Còng lưng"],
    example: "Trận nào cũng phải gánh tạ mệt mỏi.",
    tags: ["game", "funny"],
  },
  {
    term: "Backdoor",
    definition: "Lén lút phá nhà chính đối phương khi họ không để ý.",
    variation: ["Đẩy lẻ"],
    example: "Pha backdoor thế kỷ lật kèo ngoạn mục.",
    tags: ["game", "tactic"],
  },
  {
    term: "Sur",
    definition: "Surrender. Đầu hàng.",
    variation: ["Vote hàng"],
    example: "Bấm sur đi, đánh đấm gì nữa.",
    tags: ["game", "action"],
  },
  {
    term: "Hack map",
    definition: "Gian lận nhìn thấy toàn bộ bản đồ.",
    variation: ["Soi map"],
    example: "Nó hack map chắc luôn, núp bụi nào cũng biết.",
    tags: ["game", "cheat"],
  },
  {
    term: "Clone",
    definition: "Nick phụ, tài khoản ảo.",
    variation: ["Nick ảo"],
    example: "Dùng clone đi comment dạo cho đỡ lộ.",
    tags: ["online", "account"],
  },
  {
    term: "Acc",
    definition: "Account. Tài khoản.",
    variation: ["Nick"],
    example: "Mất acc Facebook rồi.",
    tags: ["online", "tech"],
  },
  {
    term: "Mod",
    definition: "Moderator. Người kiểm duyệt trong group/forum.",
    variation: ["Quản trị viên"],
    example: "Đăng bài sai quy định bị Mod xóa rồi.",
    tags: ["online", "role"],
  },
  {
    term: "Admin",
    definition: "Người quản trị cao nhất của trang/nhóm.",
    variation: ["Ad"],
    example: "Inbox admin để mua quảng cáo.",
    tags: ["online", "role"],
  },
  {
    term: "Group kín",
    definition: "Nhóm bí mật trên Facebook.",
    variation: ["Hội kín"],
    example: "Share vào group kín thôi nhé.",
    tags: ["online", "place"],
  },
  {
    term: "Thread",
    definition:
      "Mạng xã hội Threads (đối thủ của Twitter/X) hoặc luồng tin nhắn/bài viết.",
    variation: ["Thớt"],
    example: "Lên Threads hóng drama nhanh lắm.",
    tags: ["online", "app"],
  },
  {
    term: "Tele",
    definition:
      "Telegram. Ứng dụng nhắn tin bảo mật cao (thường dùng cho công việc hoặc nhóm kín).",
    variation: ["Te le"],
    example: "Gửi file qua Tele cho không bị giảm chất lượng.",
    tags: ["online", "app"],
  },
  {
    term: "Insta",
    definition: "Instagram. Mạng xã hội hình ảnh.",
    variation: ["Ig"],
    example: "Xin info insta bạn nữ kia với.",
    tags: ["online", "app"],
  },
  {
    term: "Mess",
    definition: "Messenger. Ứng dụng nhắn tin của Facebook.",
    variation: ["Inbox"],
    example: "Check mess đi tao bảo cái này.",
    tags: ["online", "app"],
  },
  {
    term: "Zalo",
    definition:
      "Ứng dụng nhắn tin phổ biến nhất VN, thường dùng để liên lạc với phụ huynh hoặc sếp.",
    variation: ["Zl"],
    example: "Sếp toàn nhắn việc qua Zalo lúc nửa đêm.",
    tags: ["online", "app"],
  },

  // =================================================================
  // MUA SẮM & PHONG CÁCH SỐNG (LIFESTYLE & SHOPPING) - 30 TỪ
  // =================================================================
  {
    term: "Local Brand",
    definition:
      "Thương hiệu nội địa. Quần áo/phụ kiện do người Việt thiết kế và sản xuất.",
    variation: ["Hàng nội"],
    example: "Gen Z giờ chuộng mặc local brand lắm.",
    tags: ["shopping", "fashion"],
  },
  {
    term: "Global Brand",
    definition: "Thương hiệu quốc tế nổi tiếng (Zara, H&M, Nike...).",
    variation: ["Hàng hiệu"],
    example: "Săn sale global brand giá rẻ.",
    tags: ["shopping", "fashion"],
  },
  {
    term: "Auth",
    definition: "Authentic. Hàng chính hãng, hàng thật.",
    variation: ["Real"],
    example: "Đôi giày này bao check auth trọn đời.",
    tags: ["shopping", "status"],
  },
  {
    term: "Rep",
    definition:
      "Replica. Hàng sao chép cao cấp (vẫn là hàng giả nhưng xịn hơn fake thường).",
    variation: ["Rep 1:1"],
    example: "Tiền ít mà muốn hít đồ thơm thì mua rep 1:1.",
    tags: ["shopping", "status"],
  },
  {
    term: "2hand",
    definition: "Second hand. Đồ cũ, đồ si.",
    variation: ["Hàng thùng"],
    example: "Đi chợ đồ cũ săn đồ 2hand độc lạ.",
    tags: ["shopping", "type"],
  },
  {
    term: "Thrift",
    definition: "Săn đồ cũ giá rẻ.",
    variation: ["Săn đồ si"],
    example: "Cuối tuần đi thrift shop không?",
    tags: ["shopping", "hobby"],
  },
  {
    term: "Sold out",
    definition: "Hết hàng.",
    variation: ["Cháy hàng"],
    example: "Mẫu này vừa ra đã sold out trong 1 nốt nhạc.",
    tags: ["shopping", "status"],
  },
  {
    term: "Restock",
    definition: "Hàng về thêm, bổ sung lại kho.",
    variation: ["Về hàng"],
    example: "Hóng mãi nó mới restock.",
    tags: ["shopping", "status"],
  },
  {
    term: "Pre-order",
    definition: "Đặt hàng trước khi phát hành.",
    variation: ["Đặt gạch"],
    example: "Phải pre-order mới có quà tặng kèm.",
    tags: ["shopping", "action"],
  },
  {
    term: "Voucher",
    definition: "Phiếu giảm giá.",
    variation: ["Mã giảm giá"],
    example: "Xin cái voucher Shopee freeship với.",
    tags: ["shopping", "promo"],
  },
  {
    term: "Freeship",
    definition: "Miễn phí vận chuyển.",
    variation: ["Free ship"],
    example: "Mua gì thì mua, không freeship thì nghỉ.",
    tags: ["shopping", "promo"],
  },
  {
    term: "Hoàn xu",
    definition: "Được trả lại một phần tiền dưới dạng xu để dùng lần sau.",
    variation: ["Cashback"],
    example: "Săn mã hoàn xu 50% ngon ơ.",
    tags: ["shopping", "promo"],
  },
  {
    term: "Flash Sale",
    definition: "Giảm giá chớp nhoáng trong khung giờ nhất định.",
    variation: ["Sale chớp nhoáng"],
    example: "Canh flash sale lúc 12h đêm thâm cả mắt.",
    tags: ["shopping", "promo"],
  },
  {
    term: "Ship COD",
    definition: "Cash On Delivery. Giao hàng nhận tiền.",
    variation: ["Thu hộ"],
    example: "Shop có ship COD không hay phải chuyển khoản trước?",
    tags: ["shopping", "payment"],
  },
  {
    term: "Banking",
    definition: "Chuyển khoản ngân hàng.",
    variation: ["Chuyển khoản"],
    example: "Hết tiền mặt rồi, banking được không cô?",
    tags: ["money", "tech"],
  },
  {
    term: "Momo",
    definition: "Ví điện tử quốc dân.",
    variation: ["Ví"],
    example: "Chuyển Momo cho nhanh.",
    tags: ["money", "app"],
  },
  {
    term: "Campuchia",
    definition: "Chia tiền đều cho mọi người (Campuchia -> Chia).",
    variation: ["Share tiền"],
    example: "Đi ăn xong thì Campuchia nhé.",
    tags: ["money", "slang"],
  },
  {
    term: "Lệ Quyên",
    definition: "Quyên góp hoặc chia tiền (Lệ Quyên -> Quyên).",
    variation: ["Góp tiền"],
    example: "Vụ này anh em Lệ Quyên mỗi người 50k.",
    tags: ["money", "slang"],
  },
  {
    term: "Khao",
    definition: "Mời, trả tiền cho người khác.",
    variation: ["Bao"],
    example: "Lĩnh lương rồi, khao trà sữa đi.",
    tags: ["money", "action"],
  },
  {
    term: "Rửa",
    definition: "Khao bạn bè ăn uống khi có tin vui (mua xe, có người yêu...).",
    variation: ["Ăn mừng"],
    example: "Mua xe mới à? Rửa xe thôi!",
    tags: ["money", "party"],
  },
  {
    term: "Tăng 2",
    definition:
      "Đi tiếp địa điểm thứ 2 sau khi ăn uống (thường là Karaoke hoặc Bar).",
    variation: ["Đi tiếp"],
    example: "Ăn xong chưa? Đi tăng 2 hát hò tí nhỉ.",
    tags: ["lifestyle", "party"],
  },
  {
    term: "Xõa",
    definition: "Chơi hết mình, thư giãn thoải mái.",
    variation: ["Bung lụa"],
    example: "Cuối tuần xõa đê anh em ơi.",
    tags: ["lifestyle", "party"],
  },
  {
    term: "Sập",
    definition: "Say rượu không biết gì hoặc quá mệt ngủ li bì.",
    variation: ["Gục"],
    example: "Hôm qua uống 3 chén là sập tại bàn.",
    tags: ["lifestyle", "state"],
  },
  {
    term: "Huệ",
    definition: "Nôn (âm thanh khi nôn).",
    variation: ["Chó chó"],
    example: "Say quá, gọi huệ cả đêm.",
    tags: ["lifestyle", "funny"],
  },
  {
    term: "OOTD",
    definition: "Outfit Of The Day. Trang phục ngày hôm nay.",
    variation: ["Đồ hôm nay"],
    example: "Chụp tấm OOTD đăng story cái nào.",
    tags: ["fashion", "photo"],
  },
  {
    term: "Mix Match",
    definition: "Phối đồ, kết hợp quần áo phụ kiện.",
    variation: ["Phối đồ"],
    example: "Khả năng mix match của nó đỉnh lắm.",
    tags: ["fashion", "skill"],
  },
  {
    term: "Sneakerhead",
    definition: "Người đam mê sưu tầm giày thể thao.",
    variation: ["Mê giày"],
    example: "Tủ giày của sneakerhead trị giá cả gia tài.",
    tags: ["fashion", "hobby"],
  },
  {
    term: "Vintage",
    definition: "Phong cách cổ điển, hoài cổ.",
    variation: ["Cổ điển"],
    example: "Quán cafe này decor kiểu vintage chill phết.",
    tags: ["style", "trend"],
  },
  {
    term: "Y2K",
    definition: "Phong cách thời trang những năm 2000 đang hot trở lại.",
    variation: ["Năm 2000"],
    example: "Gen Z giờ toàn mặc đồ Y2K.",
    tags: ["style", "trend"],
  },
  {
    term: "Skincare",
    definition: "Chăm sóc da. Quy trình không thể thiếu mỗi tối.",
    variation: ["Dưỡng da"],
    example: "Đang skincare, tí nhắn lại sau.",
    tags: ["beauty", "daily"],
  },

  // =================================================================
  // CẢM XÚC & TÍNH TỪ SLANG (EMOTIONS & SLANG ADJECTIVES) - 40 TỪ
  // =================================================================
  {
    term: "Phèn",
    definition: "Quê mùa, không sang trọng, nhìn tầm thường.",
    variation: ["Nhà quê"],
    example: "Bộ đồ này nhìn phèn quá, thay bộ khác đi.",
    tags: ["nhanxet", "chui"],
  },
  {
    term: "Cục súc",
    definition: "Thô lỗ, nóng tính, cộc cằn.",
    variation: ["Cộc cằn"],
    example: "Nói chuyện cục súc thế ai mà ưa nổi.",
    tags: ["nhanxet", "bad"],
  },
  {
    term: "Hãm",
    definition: "Hãm tài. Gây khó chịu, xui xẻo hoặc tính cách tồi tệ.",
    variation: ["Hãm cành cạch"],
    example: "Sáng ra đã gặp chuyện hãm.",
    tags: ["nhanxet", "bad"],
  },
  {
    term: "Lầy",
    definition: "Chơi dai, hài hước kiểu bựa, hoặc cùn.",
    variation: ["Lầy lội"],
    example: "Thánh lầy của lớp là nó chứ ai.",
    tags: ["nhanxet", "funny"],
  },
  {
    term: "Bựa",
    definition: "Hài hước một cách thô tục hoặc kỳ quặc.",
    variation: ["Bẩn bựa"],
    example: "Truyện này nội dung bựa vãi.",
    tags: ["nhanxet", "funny"],
  },
  {
    term: "Nhây",
    definition: "Đùa dai, nói mãi không nghe, cứ làm tới.",
    variation: ["Dai"],
    example: "Mày nhây vừa thôi, tao cáu rồi đấy.",
    tags: ["nhanxet", "annoy"],
  },
  {
    term: "Mỏ hỗn",
    definition:
      "Người hay nói những lời chua ngoa, đanh đá (nhưng đôi khi là hài hước).",
    variation: ["Khẩu nghiệp"],
    example: "Xinh nhưng mỏ hơi hỗn.",
    tags: ["nhanxet", "funny"],
  },
  {
    term: "Thánh ăn",
    definition: "Người ăn rất nhiều và sành ăn.",
    variation: ["Thực thần"],
    example: "Đi ăn buffet với thánh ăn này thì lỗ vốn nhà hàng.",
    tags: ["nhanxet", "funny"],
  },
  {
    term: "Sâu lười",
    definition: "Người cực kỳ lười biếng, chỉ thích nằm.",
    variation: ["Lười chảy thây"],
    example: "Cuối tuần tao hóa thân thành sâu lười.",
    tags: ["nhanxet", "funny"],
  },
  {
    term: "Trải đời",
    definition: "Người có nhiều kinh nghiệm sống (hoặc tỏ ra như vậy).",
    variation: ["Từng trải"],
    example: "Nhìn cách nói chuyện là biết tấm chiếu đã trải đời.",
    tags: ["nhanxet", "khen"],
  },
  {
    term: "Cáo già",
    definition: "Người khôn ngoan, mưu mô, khó bị lừa.",
    variation: ["Gian manh"],
    example: "Đừng hòng qua mặt con cáo già ấy.",
    tags: ["nhanxet", "scary"],
  },
  {
    term: "Nai tơ",
    definition: "Ngây thơ, chưa biết gì (hoặc giả vờ ngây thơ).",
    variation: ["Ngây thơ"],
    example: "Giả nai tơ hả em?",
    tags: ["nhanxet", "funny"],
  },
  {
    term: "Hóng biến",
    definition: "Theo dõi vụ việc ồn ào nào đó.",
    variation: ["Hóng drama"],
    example: "Cả đêm không ngủ để hóng biến.",
    tags: ["action", "online"],
  },
  {
    term: "Nằm vùng",
    definition: "Tham gia vào nhóm kín để âm thầm theo dõi thông tin.",
    variation: ["Spy"],
    example: "Tao nằm vùng trong group anti của nó.",
    tags: ["action", "online"],
  },
  {
    term: "Tàu ngầm",
    definition: "Người xem nhưng không bao giờ tương tác (like/comment).",
    variation: ["Silent reader"],
    example: "Thành viên tàu ngầm trồi lên cái coi.",
    tags: ["online", "type"],
  },
  {
    term: "Comment dạo",
    definition:
      "Bình luận lung tung khắp các bài viết để gây chú ý hoặc cho vui.",
    variation: ["Cmt dạo"],
    example: "Thất nghiệp nên đi comment dạo.",
    tags: ["online", "action"],
  },
  {
    term: "Fan cứng",
    definition: "Danh hiệu trên Facebook cho người tương tác nhiều nhất.",
    variation: ["Top fan"],
    example: "Mất danh hiệu fan cứng rồi, buồn quá.",
    tags: ["online", "badge"],
  },
  {
    term: "Sến",
    definition: "Tình cảm thái quá, ủy mị, hoặc phong cách rườm rà.",
    variation: ["Sến súa"],
    example: "Lời tỏ tình sến rện nổi da gà.",
    tags: ["nhanxet", "feeling"],
  },
  {
    term: "Gắt",
    definition: "Gay gắt, hoặc cực kỳ đỉnh/ngầu.",
    variation: ["Căng"],
    example: "Pha xử lý gắt đấy.",
    tags: ["khen", "slang"],
  },
  {
    term: "Khét lẹt",
    definition: "Quá đỉnh, quá chất (như mùi cao su cháy khi đua xe).",
    variation: ["Cháy"],
    example: "Con beat này khét lẹt.",
    tags: ["khen", "slang"],
  },
  {
    term: "Ảo",
    definition: "Khó tin, vô lý, hoặc vi diệu.",
    variation: ["Ảo tung chảo"],
    example: "Game này vật lý ảo vãi.",
    tags: ["nhanxet", "slang"],
  },
  {
    term: "Bá cháy",
    definition: "Tuyệt vời, ngon lành.",
    variation: ["Bá cháy bọ chét"],
    example: "Món này ngon bá cháy.",
    tags: ["khen", "old-school"],
  },
  {
    term: "Sấp mặt",
    definition: "Té ngã đau, hoặc gặp thất bại/khó khăn dồn dập.",
    variation: ["Sml"],
    example: "Deadline dí sấp mặt.",
    tags: ["trangthai", "funny"],
  },
  {
    term: "Vãi",
    definition:
      "Từ đệm cảm thán, thể hiện sự ngạc nhiên hoặc nhấn mạnh mức độ (nguyên gốc hơi thô tục nhưng dùng quen).",
    variation: ["Vãi chưởng"],
    example: "Đẹp vãi!",
    tags: ["camthan", "slang"],
  },
  {
    term: "Vãi chưởng",
    definition: "Biến thể nhẹ nhàng hơn của 'Vãi'.",
    variation: ["Vãi lúa"],
    example: "Đông vãi chưởng.",
    tags: ["camthan", "slang"],
  },
  {
    term: "Tung chảo",
    definition: "Dữ dội, mạnh mẽ.",
    variation: ["Nổ tung"],
    example: "Cười tung chảo.",
    tags: ["camthan", "slang"],
  },
  {
    term: "Sĩ diện",
    definition: "Coi trọng thể diện quá mức, hay làm màu.",
    variation: ["Sĩ"],
    example: "Nghèo mà sĩ diện, mua trả góp iPhone 15.",
    tags: ["nhanxet", "bad"],
  },
  {
    term: "Hào nhoáng",
    definition: "Vẻ bề ngoài lộng lẫy nhưng chưa chắc có thật.",
    variation: ["Bóng bẩy"],
    example: "Cuộc sống trên mạng hào nhoáng lắm.",
    tags: ["nhanxet", "fake"],
  },
  {
    term: "Bóc lịch",
    definition: "Đi tù (ngồi trong tù bóc từng tờ lịch).",
    variation: ["Ăn cơm cân"],
    example: "Làm ăn phi pháp có ngày bóc lịch.",
    tags: ["slang", "scary"],
  },
  {
    term: "Lên phường",
    definition: "Bị mời lên cơ quan công an làm việc.",
    variation: ["Uống nước chè"],
    example: "Đua xe coi chừng được mời lên phường uống nước chè.",
    tags: ["slang", "scary"],
  },
  {
    term: "Đi bụi",
    definition:
      "Bỏ nhà đi hoặc đi đâu đó không định hướng, hoặc nghĩa là 'hỏng rồi'.",
    variation: ["Toang"],
    example: "Cái máy tính của tao đi bụi rồi.",
    tags: ["slang", "fail"],
  },
  {
    term: "Phượt",
    definition: "Du lịch bụi bằng xe máy.",
    variation: ["Đi phượt"],
    example: "Tuổi trẻ là những chuyến đi phượt.",
    tags: ["lifestyle", "travel"],
  },
  {
    term: "Xế",
    definition: "Người lái xe trong chuyến đi phượt.",
    variation: ["Tài xế"],
    example: "Tuyển xế cứng cho chuyến Hà Giang.",
    tags: ["lifestyle", "role"],
  },
  {
    term: "Ôm",
    definition: "Người ngồi sau xe máy trong chuyến phượt.",
    variation: ["Bạn đồng hành"],
    example: "Cần tìm ôm xinh gái biết chụp ảnh.",
    tags: ["lifestyle", "role"],
  },
  {
    term: "Săn mây",
    definition: "Đi lên vùng núi cao từ sáng sớm để ngắm biển mây.",
    variation: ["Tà Xùa"],
    example: "Đi Tà Xùa săn mây thất bại, toàn sương mù.",
    tags: ["lifestyle", "travel"],
  },
  {
    term: "Mặt mộc",
    definition: "Mặt tự nhiên không trang điểm.",
    variation: ["No makeup"],
    example: "Tự tin khoe mặt mộc cam thường.",
    tags: ["beauty", "natural"],
  },
  {
    term: "Dậy thì thành công",
    definition: "Thay đổi ngoại hình trở nên đẹp hơn hẳn so với lúc nhỏ.",
    variation: ["Lột xác"],
    example: "Xem ảnh hồi bé mới biết nó dậy thì thành công.",
    tags: ["beauty", "change"],
  },
  {
    term: "Đập mặt xây lại",
    definition: "Phẫu thuật thẩm mỹ toàn bộ khuôn mặt.",
    variation: ["Dao kéo"],
    example: "Muốn đẹp nhanh chỉ có nước đập mặt xây lại.",
    tags: ["beauty", "plastic"],
  },
  {
    term: "Tút tát",
    definition: "Chỉnh trang lại ngoại hình một chút.",
    variation: ["Trang điểm"],
    example: "Đợi tao tút tát lại nhan sắc đã.",
    tags: ["beauty", "action"],
  },
  {
    term: "Chảy máu mũi",
    definition: "Phản ứng (nghĩa bóng) khi thấy cảnh nóng bỏng.",
    variation: ["Mất máu"],
    example: "Body mlem quá làm chị em chảy máu mũi.",
    tags: ["camxuc", "funny"],
  },
  // =================================================================
  // CỘNG ĐỒNG LGBT & VĂN HÓA BOYS/GIRLS LOVE
  // =================================================================
  {
    term: "Come out",
    definition:
      "Hành động công khai giới tính thật hoặc xu hướng tính dục của bản thân với gia đình/xã hội.",
    variation: ["Công khai", "Ra khỏi tủ"],
    example: "Hôm nay tôi quyết định come out với bố mẹ.",
    tags: ["lgbt", "lifestyle"],
  },
  {
    term: "Đam mỹ",
    definition:
      "Thể loại phim/truyện khai thác tình cảm giữa nam và nam (xuất xứ từ Trung Quốc).",
    variation: ["Boylove", "BL"],
    example: "Dạo này lọt hố bộ đam mỹ này quá.",
    tags: ["lgbt", "hobby"],
  },
  {
    term: "Bách hợp",
    definition: "Thể loại phim/truyện khai thác tình cảm giữa nữ và nữ.",
    variation: ["Girllove", "GL"],
    example: "Cặp đôi bách hợp này chemistry đỉnh thật.",
    tags: ["lgbt", "hobby"],
  },
  {
    term: "Công",
    definition:
      "Nhân vật đóng vai trò phái mạnh (người ở trên/Top) trong mối quan hệ nam-nam (thuật ngữ Đam mỹ).",
    variation: ["Top", "Seme", "Lão công"],
    example: "Anh ấy chuẩn visual công trong truyền thuyết.",
    tags: ["lgbt", "bl"],
  },
  {
    term: "Thụ",
    definition:
      "Nhân vật đóng vai trò phái yếu (người ở dưới/Bottom) trong mối quan hệ nam-nam.",
    variation: ["Bot", "Uke", "Bé thụ"],
    example: "Bé thụ này nhìn cưng xỉu.",
    tags: ["lgbt", "bl"],
  },
  {
    term: "Cờ lục sắc",
    definition: "Biểu tượng lá cờ 6 màu của cộng đồng LGBT+.",
    variation: ["Cờ cầu vồng"],
    example: "Tháng tự hào (Pride Month) ngập tràn cờ lục sắc.",
    tags: ["lgbt", "symbol"],
  },
  {
    term: "Bóng kín",
    definition:
      "Người đồng tính nam nhưng che giấu, bề ngoài tỏ ra là trai thẳng.",
    variation: ["Kín"],
    example: "Trông men thế thôi chứ bóng kín đấy.",
    tags: ["lgbt", "slang"],
  },
  {
    term: "Bóng lộ",
    definition: "Người đồng tính nam công khai, thoải mái thể hiện cá tính.",
    variation: ["Lộ"],
    example: "Chị ấy bóng lộ mà vui tính lắm.",
    tags: ["lgbt", "slang"],
  },
  {
    term: "Gei",
    definition:
      "Cách viết lái của 'Gay' (Đồng tính nam), thường dùng với sắc thái nhẹ nhàng hoặc trêu đùa.",
    variation: ["Gay"],
    example: "Sao nhìn hai thằng đó gei cấn vậy?",
    tags: ["lgbt", "slang"],
  },
  {
    term: "Les",
    definition: "Lesbian (Đồng tính nữ).",
    variation: ["O môi"],
    example: "Cặp les kia đẹp đôi quá.",
    tags: ["lgbt", "slang"],
  },
  {
    term: "Trans",
    definition: "Transgender (Người chuyển giới).",
    variation: ["Chuyển giới"],
    example: "Hương Giang là hoa hậu trans đẹp nhất.",
    tags: ["lgbt", "slang"],
  },

  // =================================================================
  // VĂN HÓA TRUNG QUỐC (CBIZ, PHIM ẢNH, NGÔN TÌNH)
  // =================================================================
  {
    term: "Tiểu thịt tươi",
    definition:
      "Chỉ các chàng trai trẻ, ngoại hình đẹp, non tơ trong showbiz Trung Quốc (thường diễn xuất chưa tốt).",
    variation: ["Trai đẹp"],
    example: "Phim này toàn tiểu thịt tươi nhưng diễn đơ quá.",
    tags: ["cbiz", "movie"],
  },
  {
    term: "Lưu lượng",
    definition:
      "Ngôi sao có lượng fan đông đảo, số liệu tương tác mạng xã hội cực khủng (nhưng chưa chắc có thực lực).",
    variation: ["Đỉnh lưu"],
    example: "Cậu ấy là tứ đại lưu lượng mới của Cbiz.",
    tags: ["cbiz", "fandom"],
  },
  {
    term: "Phong sát",
    definition:
      "Lệnh cấm sóng toàn diện, xóa sổ sự nghiệp của nghệ sĩ vì vi phạm pháp luật hoặc đạo đức nghiêm trọng.",
    variation: ["Cấm sóng"],
    example: "Sau scandal trốn thuế, cô ấy đã bị phong sát.",
    tags: ["cbiz", "drama"],
  },
  {
    term: "Ăn dưa",
    definition:
      "Hóng chuyện, hóng tin đồn (thường chưa được kiểm chứng) trong giới giải trí.",
    variation: ["Hóng dưa", "Melon"],
    example: "Tối nay có dưa bở của đỉnh lưu A, vào hóng mau.",
    tags: ["cbiz", "slang"],
  },
  {
    term: "Xuyên không",
    definition:
      "Thể loại phim/truyện nhân vật đi từ hiện đại về quá khứ hoặc ngược lại.",
    variation: ["Vượt thời gian"],
    example: "Mấy bộ xuyên không dạo này kịch bản chán quá.",
    tags: ["movie", "genre"],
  },
  {
    term: "Cung đấu",
    definition: "Thể loại phim đấu đá, tranh giành quyền lực trong hậu cung.",
    variation: ["Hậu cung"],
    example: "Chân Hoàn Truyện là đỉnh cao cung đấu.",
    tags: ["movie", "genre"],
  },
  {
    term: "Ngược",
    definition:
      "Ngược đãi. Phim/truyện có nội dung nhân vật bị hành hạ về thể xác (ngược thân) hoặc tinh thần (ngược tâm).",
    variation: ["Ngược tâm"],
    example: "Xem phim này khóc hết nước mắt, ngược quá.",
    tags: ["movie", "review"],
  },
  {
    term: "Sủng",
    definition: "Cưng chiều, yêu thương hết mực (ngược lại với 'Ngược').",
    variation: ["Ngọt", "Sâu răng"],
    example: "Thích xem phim sủng ngọt thôi, đời đủ khổ rồi.",
    tags: ["movie", "review"],
  },
  {
    term: "Hắc hóa",
    definition:
      "Nhân vật từ hiền lành chuyển sang độc ác, thủ đoạn sau khi trải qua biến cố.",
    variation: ["Hóa ác"],
    example: "Nữ chính sắp hắc hóa trả thù rồi.",
    tags: ["movie", "review"],
  },
  {
    term: "HE",
    definition: "Happy Ending. Kết thúc có hậu.",
    variation: ["Kết đẹp"],
    example: "Yên tâm, truyện này HE.",
    tags: ["movie", "ending"],
  },
  {
    term: "SE",
    definition: "Sad Ending. Kết thúc buồn, bi thảm.",
    variation: ["Kết thảm"],
    example: "Đừng xem, SE đấy, ám ảnh lắm.",
    tags: ["movie", "ending"],
  },
  {
    term: "OE",
    definition: "Open Ending. Kết thúc mở, tùy người xem suy diễn.",
    variation: ["Kết mở"],
    example: "Ghét nhất là OE, chả biết cuối cùng có đến được với nhau không.",
    tags: ["movie", "ending"],
  },
  {
    term: "Thủy quân",
    definition:
      "Đội quân nick ảo được thuê để viết bình luận định hướng dư luận (tương tự Seeding nhưng quy mô lớn hơn ở TQ).",
    variation: ["Dư luận viên"],
    example: "Bài này toàn thủy quân vào tâng bốc.",
    tags: ["cbiz", "online"],
  },

  // =================================================================
  // VĂN HÓA HÀN QUỐC (KPOP, K-DRAMA)
  // =================================================================
  {
    term: "Sasaeng fan",
    definition:
      "Fan cuồng, chuyên theo dõi, xâm phạm đời tư của thần tượng một cách bệnh hoạn.",
    variation: ["Fan cuồng"],
    example: "Sasaeng fan đột nhập vào ký túc xá của idol.",
    tags: ["kpop", "scary"],
  },
  {
    term: "Stan",
    definition:
      "Fan cứng, hâm mộ và ủng hộ hết mình cho một nhóm/người nào đó (Bắt nguồn từ bài hát của Eminem).",
    variation: ["Fan ruột"],
    example: "Tao stan nhóm này từ hồi mới debut.",
    tags: ["kpop", "fandom"],
  },
  {
    term: "Bias Wrecker",
    definition:
      "Thành viên trong nhóm nhạc khiến bạn xao xuyến, lăm le 'đập tan' vị trí của thành viên bạn thích nhất (Bias).",
    variation: ["Kẻ hủy diệt bias"],
    example: "Jungkook là bias nhưng V là bias wrecker của tao.",
    tags: ["kpop", "fandom"],
  },
  {
    term: "Skinship",
    definition:
      "Những cử chỉ tiếp xúc thân mật (nắm tay, ôm, khoác vai) giữa các thành viên hoặc cặp đôi.",
    variation: ["Thân mật"],
    example: "Hai ông này skinship tự nhiên ghê.",
    tags: ["kpop", "action"],
  },
  {
    term: "Lightstick",
    definition:
      "Gậy phát sáng có logo/màu sắc riêng của từng fandom, dùng để cổ vũ trong concert.",
    variation: ["Búa"],
    example: "Biển lightstick trong concert nhìn nổi da gà.",
    tags: ["kpop", "item"],
  },
  {
    term: "All-kill",
    definition:
      "Thành tích khi một bài hát đứng đầu tất cả các bảng xếp hạng âm nhạc uy tín tại Hàn Quốc.",
    variation: ["PAK"],
    example: "Bài hát mới đạt Perfect All-kill chỉ sau 2 giờ.",
    tags: ["kpop", "rank"],
  },
  {
    term: "Ending Fairy",
    definition:
      "Tiên tử kết màn. Thành viên được camera quay cận mặt ở cuối màn trình diễn với biểu cảm thần thánh.",
    variation: ["Kết màn"],
    example: "Pha ending fairy thở gấp huyền thoại.",
    tags: ["kpop", "stage"],
  },
  {
    term: "Oppa",
    definition:
      "Anh trai/Anh yêu (tiếng Hàn). Từ quốc dân fan nữ dùng gọi idol nam.",
    variation: ["Các anh"],
    example: "Oppa của em mãi đỉnh.",
    tags: ["kpop", "xungho"],
  },
  {
    term: "Unnie",
    definition: "Chị gái (tiếng Hàn). Fan nữ dùng gọi idol nữ.",
    variation: ["Chị đẹp"],
    example: "Mấy chị unnie nhóm này ngầu quá.",
    tags: ["kpop", "xungho"],
  },
  {
    term: "Dispatch",
    definition:
      "Trang báo săn tin hẹn hò khét tiếng của Hàn Quốc. Nỗi khiếp sợ của idol ngày 1/1 hàng năm.",
    variation: ["Hung thần"],
    example: "Sáng nay Dispatch khui tin hẹn hò của ai vậy?",
    tags: ["kpop", "news"],
  },

  // =================================================================
  // VĂN HÓA THÁI LAN (T-BIZ, SERIES)
  // =================================================================
  {
    term: "Fan service",
    definition:
      "Những hành động chiều chuộng, tương tác thân mật (đôi khi là diễn) của các cặp đôi để làm vui lòng fan.",
    variation: ["Phục vụ fan"],
    example: "Cặp này fan service tốt, nhưng đừng tin là thật.",
    tags: ["tbiz", "action"],
  },
  {
    term: "Pí",
    definition:
      "P' (Phiên âm tiếng Thái). Cách gọi kính trọng 'Anh/Chị' đi kèm tên (VD: P'Freen, P'Mew).",
    variation: ["Anh/Chị"],
    example: "Pí ơi, em u mê pí quá.",
    tags: ["tbiz", "xungho"],
  },
  {
    term: "Nong",
    definition:
      "Em (tiếng Thái). Cách gọi thân mật dành cho người nhỏ tuổi hơn.",
    variation: ["Bé"],
    example: "Nong Nattawin cười xinh xỉu.",
    tags: ["tbiz", "xungho"],
  },
  {
    term: "Tình tay ba",
    definition:
      "Đặc sản của phim truyền hình Thái Lan với các mối quan hệ chằng chịt, drama và đánh ghen.",
    variation: ["Tam giác tình yêu"],
    example: "Phim Thái mà không có tình tay ba, đánh ghen thì mất chất.",
    tags: ["tbiz", "drama"],
  },
  {
    term: "Couple màn ảnh",
    definition:
      "Cặp đôi được ghép cặp trong phim (Koo-jin), thường được fan đẩy thuyền nhiệt tình ngoài đời.",
    variation: ["Koo-jin"],
    example: "Đây là couple màn ảnh hot nhất Thái Lan hiện nay.",
    tags: ["tbiz", "couple"],
  },

  // =================================================================
  // NHÓM: NHÂN VẬT & TÍNH CÁCH (CHARACTER TROPES)
  // =================================================================
  {
    term: "Tổng tài",
    definition:
      "Tổng giám đốc bên ngoài lạnh lùng, bên trong nhiều tiền. Nhân vật nam chính điển hình, thường mắc bệnh sạch sẽ và bá đạo.",
    variation: ["CEO", "Chủ tịch"],
    example: "Mô típ tổng tài bá đạo yêu nhân viên quèn xưa rồi.",
    tags: ["ngontinh", "character"],
  },
  {
    term: "Ngốc bạch ngọt",
    definition:
      "Nữ chính ngây thơ (ngốc), trắng trẻo (bạch), ngọt ngào (ngọt). Thường vụng về nhưng luôn gặp may mắn và được nam chính yêu.",
    variation: ["Thỏ trắng"],
    example: "Nữ chính ngốc bạch ngọt xem phát bực.",
    tags: ["ngontinh", "character"],
  },
  {
    term: "Nữ cường",
    definition:
      "Nữ chính mạnh mẽ, độc lập, thông minh, không dựa dẫm vào đàn ông (ngược lại với Bánh bèo/Ngốc bạch ngọt).",
    variation: ["Chị đại"],
    example: "Thích đọc truyện nữ cường, tự làm tự ăn.",
    tags: ["ngontinh", "character"],
  },
  {
    term: "Nam phụ thâm tình",
    definition:
      "Chàng trai tốt bụng, yêu nữ chính hết lòng, hy sinh tất cả nhưng cuối cùng vẫn không có được cô ấy.",
    variation: ["Nam 8"],
    example: "Nam chính là của nữ chính, còn nam phụ là của khán giả.",
    tags: ["ngontinh", "character"],
  },
  {
    term: "Trà xanh",
    definition:
      "Cô gái vẻ ngoài thanh thuần, ngây thơ nhưng nội tâm đầy toan tính, chuyên phá hoại hạnh phúc người khác (đã có ở phần trước, nhắc lại vì rất phổ biến trong ngôn tình).",
    variation: ["Green tea"],
    example: "Cẩn thận chiêu trò của mấy em trà xanh.",
    tags: ["ngontinh", "villain"],
  },
  {
    term: "Bạch liên hoa",
    definition:
      "Nhân vật (thường là nữ phụ) giả vờ yếu đuối, vô tội như hoa sen trắng để đóng vai nạn nhân.",
    variation: ["Hoa sen trắng"],
    example: "Nhìn mặt bạch liên hoa là biết sắp có biến.",
    tags: ["ngontinh", "villain"],
  },
  {
    term: "Tiểu tam",
    definition: "Người thứ ba xen vào mối quan hệ.",
    variation: ["Con giáp thứ 13"],
    example: "Tiểu tam bây giờ lộng hành quá.",
    tags: ["ngontinh", "villain"],
  },

  // =================================================================
  // NHÓM: CỐT TRUYỆN & MÔ TÍP (PLOT TROPES)
  // =================================================================
  {
    term: "Hào môn",
    definition:
      "Gia đình quyền quý, giàu có nứt đố đổ vách. Truyện hào môn thường xoay quanh tranh giành tài sản hoặc mẹ chồng nàng dâu.",
    variation: ["Nhà giàu"],
    example: "Sóng gió hào môn xem cuốn thực sự.",
    tags: ["ngontinh", "genre"],
  },
  {
    term: "Cưới trước yêu sau",
    definition:
      "Mô típ hai người kết hôn vì hợp đồng/lợi ích/ép buộc, sau đó mới nảy sinh tình cảm.",
    variation: ["Hợp đồng hôn nhân"],
    example: "Phim này theo mô típ cưới trước yêu sau kinh điển.",
    tags: ["ngontinh", "genre"],
  },
  {
    term: "Thanh mai trúc mã",
    definition:
      "Hai người bạn lớn lên cùng nhau từ nhỏ, hiểu rõ về nhau và thường phát triển thành tình yêu.",
    variation: ["Bạn thanh mai"],
    example: "Ước gì có anh người yêu là thanh mai trúc mã.",
    tags: ["ngontinh", "genre"],
  },
  {
    term: "Thanh xuân vườn trường",
    definition:
      "Truyện/Phim lấy bối cảnh học đường, tình yêu tuổi học trò trong sáng, ngây ngô.",
    variation: ["Học đường"],
    example: "Phim thanh xuân vườn trường Trung Quốc bao giờ cũng hay.",
    tags: ["ngontinh", "genre"],
  },
  {
    term: "Truy thê",
    definition:
      "Hành trình nam chính theo đuổi lại vợ/người yêu sau khi đã làm cô ấy tổn thương bỏ đi (Truy thê hỏa táng tràng - Theo đuổi vợ sấp mặt).",
    variation: ["Níu kéo"],
    example: "Ngược cho lắm vào rồi giờ truy thê thấy mồ.",
    tags: ["ngontinh", "plot"],
  },
  {
    term: "Gương vỡ lại lành",
    definition: "Các cặp đôi chia tay hoặc ly hôn rồi quay lại với nhau.",
    variation: ["Tái hợp"],
    example: "Tao không tin vào gương vỡ lại lành, vỡ là vứt.",
    tags: ["ngontinh", "plot"],
  },
  {
    term: "Thế thân",
    definition:
      "Nhân vật bị coi là người thay thế cho người yêu cũ/người trong mộng của nam/nữ chính (vì ngoại hình giống).",
    variation: ["Người thay thế"],
    example: "Nữ chính phát hiện mình chỉ là thế thân của chị gái.",
    tags: ["ngontinh", "drama"],
  },
  {
    term: "Trọng sinh",
    definition:
      "Nhân vật chết đi sống lại, quay về quá khứ hoặc nhập vào cơ thể người khác để làm lại cuộc đời.",
    variation: ["Hồi sinh"],
    example: "Truyện trọng sinh báo thù đọc sướng lắm.",
    tags: ["ngontinh", "genre"],
  },
  {
    term: "Xuyên nhanh",
    definition:
      "Nhân vật chính đi xuyên qua nhiều thế giới khác nhau để hoàn thành nhiệm vụ.",
    variation: ["Mau xuyên"],
    example: "Bộ xuyên nhanh này đi qua 10 thế giới rồi.",
    tags: ["ngontinh", "genre"],
  },
  {
    term: "Điền văn",
    definition:
      "Truyện nhẹ nhàng, kể về cuộc sống hàng ngày, làm ruộng, chăn nuôi, không nhiều drama kịch tính.",
    variation: ["Làm ruộng"],
    example: "Đọc điền văn cho thư thái đầu óc.",
    tags: ["ngontinh", "genre"],
  },
  {
    term: "Vả mặt",
    definition:
      "Hành động nhân vật chính chứng minh năng lực, đáp trả cực gắt khiến những kẻ coi thường mình phải bẽ mặt.",
    variation: ["Phản đòn"],
    example: "Pha vả mặt trà xanh đi vào lòng người.",
    tags: ["ngontinh", "action"],
  },
  {
    term: "Sảng văn",
    definition:
      "Truyện có nội dung khiến người đọc cảm thấy sảng khoái, nhân vật chính cực mạnh, đánh đâu thắng đó, ít gặp trắc trở.",
    variation: ["Bá đạo"],
    example: "Dạo này chỉ thích đọc sảng văn cho đỡ stress.",
    tags: ["ngontinh", "genre"],
  },
  {
    term: "Bàn tay vàng",
    definition:
      "Năng lực đặc biệt, may mắn vô lý hoặc sự ưu ái quá mức của tác giả dành cho nhân vật chính.",
    variation: ["Buff bẩn"],
    example: "Tác giả buff bàn tay vàng cho main lố quá.",
    tags: ["ngontinh", "feature"],
  },
  {
    term: "Cường thủ hào đoạt",
    definition:
      "Nam chính dùng quyền lực, sức mạnh để ép buộc nữ chính ở bên mình (chiếm đoạt).",
    variation: ["Chiếm đoạt"],
    example: "Mấy truyện cường thủ hào đoạt giờ đọc thấy toxic.",
    tags: ["ngontinh", "genre"],
  },
  {
    term: "Oan gia",
    definition:
      "Hai người ghét nhau, hay cãi nhau nhưng cuối cùng lại yêu nhau (Oan gia ngõ hẹp).",
    variation: ["Ghét của nào trời trao của ấy"],
    example: "Cặp này đúng kiểu oan gia ngõ hẹp.",
    tags: ["ngontinh", "genre"],
  },
  {
    term: "Hệ thống",
    definition:
      "Một chương trình ảo đi theo nhân vật chính (thường trong truyện xuyên không/trọng sinh) để giao nhiệm vụ và tặng vật phẩm.",
    variation: ["System"],
    example: "Hệ thống bắt nữ chính phải quyến rũ nam chính.",
    tags: ["ngontinh", "feature"],
  },
  {
    term: "Sắc",
    definition:
      "Truyện có nhiều cảnh nóng, mô tả chi tiết quan hệ tình dục (H, Cao H).",
    variation: ["Thịt", "H văn"],
    example: "Bộ này là truyện sắc, cẩn thận khi đọc nơi công cộng.",
    tags: ["ngontinh", "adult"],
  },
  {
    term: "Thanh thủy văn",
    definition:
      "Truyện trong sáng, hoàn toàn không có cảnh nóng (nước trong veo).",
    variation: ["Trong sáng"],
    example: "Tưởng có thịt ai ngờ là thanh thủy văn.",
    tags: ["ngontinh", "genre"],
  },
  // =================================================================
  // NHÓM: TEENCODE & TỪ VIẾT TẮT (CHAT SLANG)
  // =================================================================
  {
    term: "Ko",
    definition:
      "Không. Từ viết tắt kinh điển nhất của mọi thế hệ khi nhắn tin.",
    variation: ["K", "Hok", "Khum"],
    example: "Tối nay đi chơi ko?",
    tags: ["teencode", "daily"],
  },
  {
    term: "Dc",
    definition: "Được. Viết tắt bỏ dấu, dùng trong hầu hết các cuộc hội thoại.",
    variation: ["Đc", "Ok"],
    example: "Thế thì dc, chốt đơn.",
    tags: ["teencode", "daily"],
  },
  {
    term: "Hỉu",
    definition:
      "Hiểu. Cách viết trại âm tạo cảm giác dễ thương, bớt nghiêm trọng hơn từ gốc.",
    variation: ["Hiểu hông"],
    example: "Nói nãy giờ có hỉu gì hông?",
    tags: ["teencode", "daily"],
  },
  {
    term: "Lém",
    definition: "Lắm. Cách nói điệu đà, thường dùng để khen hoặc than thở.",
    variation: ["Lắm"],
    example: "Hôm nay xinh lém nha.",
    tags: ["teencode", "daily"],
  },
  {
    term: "J",
    definition: "Gì. Viết tắt theo cách phát âm tiếng Anh (G -> J).",
    variation: ["Gì"],
    example: "Đang làm j đó?",
    tags: ["teencode", "daily"],
  },
  {
    term: "Z",
    definition:
      "Vậy. Dùng thay cho chữ 'V' hoặc 'Vậy' ở cuối câu hỏi/cảm thán.",
    variation: ["Zậy", "V"],
    example: "Sao z? Có chuyện j à?",
    tags: ["teencode", "daily"],
  },
  {
    term: "Iu",
    definition:
      "Yêu. Cách viết ngắn gọn, nhìn mềm mại và dễ thương hơn từ gốc.",
    variation: ["Yêu"],
    example: "Iu bạn nhìu.",
    tags: ["teencode", "love"],
  },
  {
    term: "Thui",
    definition: "Thôi. Cách nói giảm nhẹ, nghe nũng nịu hoặc nhẹ nhàng hơn.",
    variation: ["Thôi"],
    example: "Muộn rồi, đi ngủ thui.",
    tags: ["teencode", "daily"],
  },
  {
    term: "Rùi",
    definition:
      "Rồi. Tương tự như 'Gòi', dùng để báo cáo hoàn thành hoặc xác nhận.",
    variation: ["Rồi", "Gòi"],
    example: "Làm xong bài tập rùi.",
    tags: ["teencode", "daily"],
  },
  {
    term: "Mk",
    definition: "Mình. Viết tắt thường thấy trong các confession hoặc tâm sự.",
    variation: ["Mình"],
    example: "Mk muốn tìm bạn nữ ngồi bàn 3 hôm nay.",
    tags: ["teencode", "xungho"],
  },
  {
    term: "Cx",
    definition: "Cũng. Viết tắt phổ biến.",
    variation: ["Cũng"],
    example: "Hôm nay trời cx đẹp ha.",
    tags: ["teencode", "daily"],
  },
  {
    term: "Ms",
    definition: "Mới. Dùng chỉ thời gian hoặc tính chất.",
    variation: ["Mới"],
    example: "Em ms đi học về.",
    tags: ["teencode", "daily"],
  },
  {
    term: "Bít",
    definition: "Biết. Cách viết sai chính tả cố ý cho nhanh.",
    variation: ["Biết"],
    example: "Ai bít đâu, đừng hỏi tui.",
    tags: ["teencode", "daily"],
  },
  {
    term: "Ak",
    definition: "À, Á. Từ đệm cuối câu.",
    variation: ["Ah"],
    example: "Ủa vậy ak, giờ ms biết.",
    tags: ["teencode", "daily"],
  },
  {
    term: "Hăm",
    definition: "Không/Hông. Một biến thể khác của 'Khum', nghe nũng nịu hơn.",
    variation: ["Hông", "Hem"],
    example: "Đi ăn hăm?",
    tags: ["teencode", "daily"],
  },
  {
    term: "Chài ai",
    definition: "Trời ơi. Than vãn kiểu miền Nam, kéo dài giọng.",
    variation: ["Trời ơi", "Chời ơi"],
    example: "Chài ai, sao mà khổ dữ thần.",
    tags: ["teencode", "camthan"],
  },
  {
    term: "Wá",
    definition: "Quá. Thay Q bằng W cho nhanh.",
    variation: ["Quá"],
    example: "Dễ thương wá đi.",
    tags: ["teencode", "khen"],
  },
  {
    term: "Gato",
    definition: "Ghen ăn tức ở (viết tắt). Ghen tị với người khác.",
    variation: ["Ghen"],
    example: "Bớt Gato với thành công của người khác đi.",
    tags: ["teencode", "slang"],
  },
  {
    term: "Uk",
    definition: "Ừ/Ok. Cách trả lời đồng ý ngắn gọn (đôi khi hơi lạnh lùng).",
    variation: ["Uhm", "Ukie"],
    example: "Uk, biết rồi.",
    tags: ["teencode", "daily"],
  },
  {
    term: "Nà",
    definition: "Nè hoặc Là (nói ngọng/nói điệu).",
    variation: ["Nè"],
    example: "Em nà, nhớ em hông?",
    tags: ["teencode", "daily"],
  },
];

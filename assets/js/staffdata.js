/* staffData.js — วิทยาลัยพณิชยการบางนา (ฉบับสมบูรณ์) */

/* ── ผู้บริหาร ── */
const staffData = {
  directors: [
    {
      name: "นางสาวรุ่งนภา ปุณยานุเดช",
      role: "ผู้อำนวยการสถานศึกษา",
      department: "ผู้บริหาร ชำนาญการพิเศษ",
      education: "ปริญญาเอกหรือเทียบเท่า",
      image: "assets/images/director.jpg"
    }
  ],
  deputies: [
    { name: "นางสาวเอมอร อุปชีวะ",    role: "รองผู้อำนวยการ ฝ่ายพัฒนากิจการนักเรียน นักศึกษา", department: "ผู้บริหาร ชำนาญการพิเศษ", education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/deputy1.jpg" },
    { name: "นางสาวอุรชา สารสรรค์",    role: "รองผู้อำนวยการ ฝ่ายวิชาการ",                        department: "ผู้บริหาร ชำนาญการพิเศษ", education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/deputy2.jpg" },
    { name: "นางสาวสุจิตรา เกิดผล",    role: "รองผู้อำนวยการ ฝ่ายแผนงานและความร่วมมือ",           department: "ผู้บริหาร ชำนาญการพิเศษ", education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/deputy3.jpg" },
    { name: "นางสาวรัตติยา วานิชกลาง", role: "รองผู้อำนวยการ ฝ่ายบริหารทรัพยากร",                 department: "ผู้บริหาร ชำนาญการพิเศษ", education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/deputy4.jpg" }
  ]
};

/* ── บุคลากรแยกหมวด ── */
const staffCategoryData = {

  /* ทั้งหมด — populate อัตโนมัติด้านล่าง */
  all: { label: "ทั้งหมด", members: [] },

  /* ── [1] หัวหน้าแผนก (12 คน) ── */
  dept_head: {
    label: "หัวหน้าแผนก",
    members: [
      { name: "นายสมคิด มิตรอารีย์",           role: "หัวหน้าแผนกวิชาสามัญสัมพันธ์",             department: "แผนกวิชาสามัญสัมพันธ์",             education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นายสมคิด มิตรอารีย์.jpg" },
      { name: "นางสาวสายฝน อินอ่วม",            role: "หัวหน้าแผนกวิชาการจัดการโลจิสติกส์",       department: "แผนกวิชาการจัดการโลจิสติกส์",       education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นางสาวสายฝน อินอ่วม.jpg" },
      { name: "นายสมโชค ราชบุรี",               role: "หัวหน้าแผนกวิชาการบัญชี",                  department: "แผนกวิชาการบัญชี",                  education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายสมโชค ราชบุรี.jpg" },
      { name: "นายพรชัย ตุ่นแก้ว",              role: "หัวหน้าแผนกวิชาเทคโนโลยีสารสนเทศ",         department: "แผนกวิชาเทคโนโลยีสารสนเทศ",         education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายพรชัย ตุ่นแก้ว.jpg" },
      { name: "นางปุณณสิริ เทียนชัยสุธารัตน์",  role: "หัวหน้าแผนกวิชาการจัดการธุรกิจค้าปลีก",   department: "แผนกวิชาการจัดการธุรกิจค้าปลีก",   education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นางปุณณสิริ เทียนชัยสุธารัตน์.jpg" },
      { name: "นางสุภาพร ภู่พัด",               role: "หัวหน้าแผนกวิชาการจัดการสำนักงาน",          department: "แผนกวิชาการจัดการสำนักงาน",          education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสุภาพร ภู่พัด.jpg" },
      { name: "นางกุฎาพร วัฒนสินไพศาล",         role: "หัวหน้าแผนกวิชาการโรงแรม",                 department: "แผนกวิชาการโรงแรม",                 education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นางกุฎาพร วัฒนสินไพศาล.jpg" },
      { name: "นางสาวธัญรัตน์ ธัญญานุกูล",      role: "หัวหน้าแผนกวิชาการจัดประชุมและนิทรรศการ", department: "แผนกวิชาการจัดประชุมและนิทรรศการ", education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นางสาวธัญรัตน์ ธัญญานุกูล.jpg" },
      { name: "นางสาวพัฒน์นรี ถาวรทวีพัฒน์",    role: "หัวหน้าแผนกวิชาภาษาต่างประเทศ",            department: "แผนกวิชาภาษาต่างประเทศ",            education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวพัฒน์นรี ถาวรทวีพัฒน์.jpg" },
      { name: "นางสาวปราชญา สุขวิเศษ",           role: "หัวหน้าแผนกวิชาการตลาด",                   department: "แผนกวิชาการตลาด",                   education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวปราชญา สุขวิเศษ.jpg" },
      { name: "นายธรรมนูญ กองกูล",               role: "หัวหน้าแผนกวิชาคอมพิวเตอร์ธุรกิจ",        department: "แผนกวิชาคอมพิวเตอร์ธุรกิจ",        education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นายธรรมนูญ กองกูล.jpg" },
      { name: "นายณัชพล ชุ่มเย็น",               role: "หัวหน้าแผนกวิชาอาหารและโภชนาการ",          department: "แผนกวิชาอาหารและโภชนาการ",          education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายณัชพล ชุ่มเย็น.jpg" }
    ]
  },

  /* ── [2] หัวหน้างาน (25 คน) ── */
  work_head: {
    label: "หัวหน้างาน",
    members: [
      { name: "นายธิติชาติ เจือจันทร์",         role: "หัวหน้างานทะเบียน",                                  department: "แผนกวิชาสามัญสัมพันธ์",            education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นายธิติชาติ เจือจันทร์.jpg" },
      { name: "นางพรจิรา เงินเจริญ",             role: "หัวหน้างานพัสดุ",                                     department: "แผนกวิชาเทคโนโลยีสารสนเทศ",        education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นางพรจิรา เงินเจริญ.jpg" },
      { name: "นายชญานนท์ บนแท่นทิพย์",         role: "หัวหน้างานศูนย์บริการเครือข่ายการผลิต (CVM)",         department: "แผนกวิชาการจัดการธุรกิจค้าปลีก",  education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นายชญานนท์ บนแท่นทิพย์.jpg" },
      { name: "นายบัญชากร บัณฑิตย์",            role: "หัวหน้างานอาชีวศึกษาระบบทวิภาคี",                     department: "แผนกวิชาการจัดการโลจิสติกส์",      education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นายบัญชากร บัณฑิตย์.jpg" },
      { name: "นายอดิศร กล่องทอง",               role: "หัวหน้างานศูนย์ข้อมูลสารสนเทศ",                      department: "แผนกวิชาเทคโนโลยีสารสนเทศ",        education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นายอดิศร กล่องทอง.jpg" },
      { name: "นายศุภชัย แก้ววิลัย",             role: "หัวหน้างานสื่อการเรียนการสอน",                        department: "แผนกวิชาคอมพิวเตอร์ธุรกิจ",       education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นายศุภชัย แก้ววิลัย.jpg" },
      { name: "นางสาวภัทรวดี วงษ์ไกร",          role: "หัวหน้างานตรวจสอบคุณภาพภายใน",                       department: "แผนกวิชาการบัญชี",                 education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวภัทรวดี วงษ์ไกร.jpg" },
      { name: "นางสาวอัญชลี ศรียงพะเนาว์",      role: "หัวหน้างานแนะแนวอาชีพและการจัดหางาน",                department: "แผนกวิชาสามัญสัมพันธ์",            education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวอัญชลี ศรียงพะเนาว์.jpg" },
      { name: "นางสาวนภาพร บัวน้อย",             role: "หัวหน้างานครูที่ปรึกษา",                              department: "แผนกวิชาภาษาต่างประเทศ",           education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวนภาพร บัวน้อย.jpg" },
      { name: "นางสาวปรียาภัทร์ ปันแก้ว",       role: "หัวหน้างานวิทยบริการและห้องสมุด",                     department: "แผนกวิชาสามัญสัมพันธ์",            education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวปรียาภัทร์ ปันแก้ว.jpg" },
      { name: "นายสิทธิชัย ปัญญา",               role: "หัวหน้างานพัสดุ (อาคารสถานที่)",                      department: "แผนกวิชาสามัญสัมพันธ์",            education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายสิทธิชัย ปัญญา.jpg" },
      { name: "นางนภาพร ธิยาม",                  role: "หัวหน้างานพัฒนาหลักสูตรการเรียนการสอน",              department: "แผนกวิชาการจัดการธุรกิจค้าปลีก",  education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางนภาพร ธิยาม.jpg" },
      { name: "นางสาวสุนิสา แก้วศรีสุข",        role: "หัวหน้างานกิจกรรมนักเรียนนักศึกษา",                   department: "แผนกวิชาการบัญชี",                 education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวสุนิสา แก้วศรีสุข.jpg" },
      { name: "นางสาวกันฑรัตน์ การิยา",         role: "หัวหน้างานบุคลากร",                                   department: "แผนกวิชาการบัญชี",                 education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวกันฑรัตน์ การิยา.jpg" },
      { name: "นางสาวสิราวรรณ เอี่ยมทัด",       role: "หัวหน้างานความร่วมมือ",                               department: "แผนกวิชาการโรงแรม",                education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวสิราวรรณ เอี่ยมทัด.jpg" },
      { name: "นางสาวพิลาพร กลุ่มกลาง",         role: "หัวหน้างานบัญชี",                                     department: "แผนกวิชาการบัญชี",                 education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวพิลาพร กลุ่มกลาง.jpg" },
      { name: "นายณัฐปกรณ์ สงนวล",              role: "หัวหน้างานบริหารงานทั่วไป (ประชาสัมพันธ์)",           department: "แผนกวิชาสามัญสัมพันธ์",            education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายณัฐปกรณ์ สงนวล.jpg" },
      { name: "นางสาวพัชราภรณ์ ช่วยเจริญ",      role: "หัวหน้างานโครงการพิเศษและการบริการชุมชน",             department: "แผนกวิชาคอมพิวเตอร์ธุรกิจ",       education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวพัชราภรณ์ ช่วยเจริญ.jpg" },
      { name: "นางสาวรัชนีวรรณ วงษ์น้อย",       role: "หัวหน้างานวัดผลและประเมินผล",                         department: "แผนกวิชาคอมพิวเตอร์ธุรกิจ",       education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวรัชนีวรรณ วงษ์น้อย.jpg" },
      { name: "นางสาวอัญชลี ศักดิ์ศรีจันทร์",  role: "หัวหน้างานสวัสดิการนักเรียนนักศึกษา (พยาบาล)",        department: "แผนกวิชาสามัญสัมพันธ์",            education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวอัญชลี ศักดิ์ศรีจันทร์.jpg" },
      { name: "นายเจิมวุฒิ แจ่มดวง",            role: "หัวหน้างานประกันคุณภาพและมาตรฐานการศึกษา",           department: "แผนกวิชาเทคโนโลยีสารสนเทศ",        education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายเจิมวุฒิ แจ่มดวง.jpg" },
      { name: "นางสาววิไลพรรณ ขาวประภา",        role: "หัวหน้างานบริหารงานทั่วไป (สารบรรณ)",                department: "แผนกวิชาภาษาต่างประเทศ",           education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาววิไลพรรณ ขาวประภา.jpg" },
      { name: "นายวรท บุญหล่อ",                  role: "หัวหน้างานปกครอง",                                    department: "แผนกวิชาสามัญสัมพันธ์",            education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายวรท บุญหล่อ.jpg" },
      { name: "นายฐากูร ศิริยอด",                role: "หัวหน้างานวิจัย พัฒนานวัตกรรมและสิ่งประดิษฐ์",       department: "แผนกวิชาการจัดการโลจิสติกส์",      education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายฐากูร ศิริยอด.jpg" },
      { name: "นางสาวณัฐธิมณฑ์ แพรเมือง",       role: "หัวหน้างานวางแผนและงบประมาณ",                         department: "แผนกวิชาการตลาด",                  education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวณัฐธิมณฑ์ แพรเมือง.jpg" },
      { name: "นางเชอลักษ์ ธนะบุญปวง",          role: "หัวหน้างานการเงิน",                                   department: "แผนกวิชาสามัญสัมพันธ์",            education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางเชอลักษ์ ธนะบุญปวง.jpg" }
    ]
  },

  /* ── [3] ครูประจำ (25 คน) ── */
  teacher: {
    label: "ครูประจำ",
    members: [
      { name: "นางสิริพันธ์ วิเชียรรัตน์",      role: "ครูประจำ ชำนาญการพิเศษ", department: "แผนกวิชาการบัญชี",             education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นางสิริพันธ์ วิเชียรรัตน์.jpg" },
      { name: "นางสาวปิยะนุช เจริญศรี",          role: "ครูประจำ ชำนาญการพิเศษ", department: "แผนกวิชาภาษาต่างประเทศ",       education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นางสาวปิยะนุช เจริญศรี.jpg" },
      { name: "นางปริมลดาญ์ ทองลำพู",            role: "ครูประจำ ชำนาญการพิเศษ", department: "แผนกวิชาภาษาต่างประเทศ",       education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นางปริมลดาญ์ ทองลำพู.jpg" },
      { name: "นางสาวทุนมา ชินวงศ์",             role: "ครูประจำ ชำนาญการพิเศษ", department: "แผนกวิชาคอมพิวเตอร์ธุรกิจ",   education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นางสาวทุนมา ชินวงศ์.jpg" },
      { name: "นางสาวธัญญรัตน์ ดีรักษา",        role: "ครูประจำ ชำนาญการพิเศษ", department: "แผนกวิชาการบัญชี",             education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นางสาวธัญญรัตน์ ดีรักษา.jpg" },
      { name: "นางสาวสุจิตรา ไวยรัตนา",         role: "ครูประจำ ชำนาญการพิเศษ", department: "แผนกวิชาคอมพิวเตอร์ธุรกิจ",   education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นางสาวสุจิตรา ไวยรัตนา.jpg" },
      { name: "นายไกรสิทธิ เพ็ชรมณี",           role: "ครูประจำ ชำนาญการพิเศษ", department: "แผนกวิชาสามัญสัมพันธ์",        education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นายไกรสิทธิ เพ็ชรมณี.jpg" },
      { name: "นายดำรงณ์ เชื้อจิตร",             role: "ครูประจำ ชำนาญการพิเศษ", department: "แผนกวิชาคอมพิวเตอร์ธุรกิจ",   education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นายดำรงณ์ เชื้อจิตร.jpg" },
      { name: "นางสาวชลธิชา บุญสอง",            role: "ครูประจำ ชำนาญการ",       department: "แผนกวิชาการตลาด",              education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นางสาวชลธิชา บุญสอง.jpg" },
      { name: "นายสมภพ ชิมารักษ์",               role: "ครูประจำ ชำนาญการ",       department: "แผนกวิชาการจัดการโลจิสติกส์", education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นายสมภพ ชิมารักษ์.jpg" },
      { name: "นายจารุวัฒน์ เจริญผล",            role: "ครูประจำ ชำนาญการ",       department: "แผนกวิชาสามัญสัมพันธ์",        education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายจารุวัฒน์ เจริญผล.jpg" },
      { name: "นางวรัญญา เลี่ยมสกุล",            role: "ครูประจำ ชำนาญการ",       department: "แผนกวิชาภาษาต่างประเทศ",       education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางวรัญญา เลี่ยมสกุล.jpg" },
      { name: "นางสาวนลินรัตน์ สุขวราเรืองกุล", role: "ครูประจำ ชำนาญการ",       department: "แผนกวิชาภาษาต่างประเทศ",       education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวนลินรัตน์ สุขวราเรืองกุล.jpg" },
      { name: "นายอรรตพล มีใหม่",                role: "ครูประจำ ชำนาญการ",       department: "แผนกวิชาคอมพิวเตอร์ธุรกิจ",   education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายอรรตพล มีใหม่.jpg" },
      { name: "นายนฤดล เตปินสาย",               role: "ครูประจำ",                  department: "แผนกวิชาสามัญสัมพันธ์",        education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นายนฤดล เตปินสาย.jpg" },
      { name: "นางสาวมนปพร ปานเพ็ชร์",           role: "ครูประจำ",                  department: "แผนกวิชาการตลาด",              education: "ปริญญาโทหรือเทียบเท่า", image: "assets/images/staff/นางสาวมนปพร ปานเพ็ชร์.jpg" },
      { name: "นางสาวจิราภัค โพธิ์ทอง",          role: "ครูประจำ",                  department: "แผนกวิชาการตลาด",              education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวจิราภัค โพธิ์ทอง.jpg" },
      { name: "นางสาวกรกานต์ พลายพิชิต",        role: "ครูประจำ",                  department: "แผนกวิชาภาษาต่างประเทศ",       education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวกรกานต์ พลายพิชิต.jpg" },
      { name: "นายสุทธิพงศ์ ประทุมมาศ",          role: "ครูประจำ",                  department: "แผนกวิชาคอมพิวเตอร์ธุรกิจ",   education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายสุทธิพงศ์ ประทุมมาศ.jpg" },
      { name: "นางสาวดวงจันทร์ ตันตุลา",        role: "ครูประจำ",                  department: "แผนกวิชาการตลาด",              education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวดวงจันทร์ ตันตุลา.jpg" },
      { name: "นายธนกฤต จันทราศิริธนา",          role: "ครูประจำ",                  department: "แผนกวิชาภาษาต่างประเทศ",       education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายธนกฤต จันทราศิริธนา.jpg" },
      { name: "นายยุทธศักดิ์ รัชตปวุฒิ",        role: "ครูประจำ",                  department: "แผนกวิชาการจัดการสำนักงาน",    education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายยุทธศักดิ์ รัชตปวุฒิ.jpg" },
      { name: "นางสกลสุภา โรจน์รัตน์ศิริกุล",  role: "ครูประจำ",                  department: "แผนกวิชาสามัญสัมพันธ์",        education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสกลสุภา โรจน์รัตน์ศิริกุล.jpg" },
      { name: "นางสาวรัตติยา พิมพ์แน่น",        role: "ครูประจำ",                  department: "แผนกวิชาการจัดการโลจิสติกส์", education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวรัตติยา พิมพ์แน่น.jpg" },
      { name: "นายโสภณ คณาดี",                   role: "ครูประจำ",                  department: "แผนกวิชาคอมพิวเตอร์ธุรกิจ",   education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายโสภณ คณาดี.jpg" },
      { name: "นายธนินท์รัฐ เจริญธีราพงษ์",     role: "ครูประจำ",                  department: "แผนกวิชาสามัญสัมพันธ์",        education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายธนินท์รัฐ เจริญธีราพงษ์.jpg" }
    ]
  },

  /* ── [4] ข้าราชการพลเรือน (1 คน) ── */
  civil_service: {
    label: "ข้าราชการพลเรือน",
    members: [
      { name: "นางสาววันทนีย์ อุวะไร", role: "ข้าราชการพลเรือน งานการเงิน / งานบัญชี", department: "งานการเงิน", education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาววันทนีย์ อุวะไร.jpg" }
    ]
  },

  /* ── [5] พนักงานราชการ (สอน) (13 คน) ── */
  gov_teach: {
    label: "พนักงานราชการ (สอน)",
    members: [
      { name: "นางยุพา ปรีชา",                   role: "พนักงานราชการ (สอน)", department: "แผนกวิชาคอมพิวเตอร์ธุรกิจ",        education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางยุพา ปรีชา.jpg" },
      { name: "นายอานนท์ ดำรงวงค์วิจิตร",       role: "พนักงานราชการ (สอน)", department: "แผนกวิชาคอมพิวเตอร์ธุรกิจ",        education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายอานนท์ ดำรงวงค์วิจิตร.jpg" },
      { name: "นางสาวนนทิยา อ่อนพลี",            role: "พนักงานราชการ (สอน)", department: "แผนกวิชาการบัญชี",                  education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวนนทิยา อ่อนพลี.jpg" },
      { name: "ว่าที่ร้อยตรีณัชพล สูงเรือง",    role: "พนักงานราชการ (สอน)", department: "แผนกวิชาสามัญสัมพันธ์",             education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/ว่าที่ร้อยตรีณัชพล สูงเรือง.jpg" },
      { name: "นางพิศมัย ทองวิเศษ",              role: "พนักงานราชการ (สอน)", department: "แผนกวิชาการบัญชี",                  education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางพิศมัย ทองวิเศษ.jpg" },
      { name: "นายมนัส หัสกุล",                  role: "พนักงานราชการ (สอน)", department: "แผนกวิชาการบัญชี",                  education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายมนัส หัสกุล.jpg" },
      { name: "นางสาวอาทิตยา ทองวิเศษ",          role: "พนักงานราชการ (สอน)", department: "แผนกวิชาคอมพิวเตอร์ธุรกิจ",        education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวอาทิตยา ทองวิเศษ.jpg" },
      { name: "นางสาวบุษดากร ศิริมงคล",          role: "พนักงานราชการ (สอน)", department: "แผนกวิชาการบัญชี",                  education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวบุษดากร ศิริมงคล.jpg" },
      { name: "นางสาวนภัสสร ชวดมา",              role: "พนักงานราชการ (สอน)", department: "แผนกวิชาการตลาด",                   education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวนภัสสร ชวดมา.jpg" },
      { name: "นางสาวปรีณาภา ลีดี",              role: "พนักงานราชการ (สอน)", department: "แผนกวิชาการจัดการธุรกิจท่องเที่ยว", education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวปรีณาภา ลีดี.jpg" },
      { name: "นางสาวณัฏฐา สมสะอาด",             role: "พนักงานราชการ (สอน)", department: "แผนกวิชาการบัญชี",                  education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวณัฏฐา สมสะอาด.jpg" },
      { name: "นางสาวณัฐชา แก้วชิน",             role: "พนักงานราชการ (สอน)", department: "แผนกวิชาการจัดการโลจิสติกส์",      education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวณัฐชา แก้วชิน.jpg" },
      { name: "นางสาวนิภาพรรณ ดาน้อย",          role: "พนักงานราชการ (สอน)", department: "แผนกวิชาการจัดการสำนักงาน",         education: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)", image: "assets/images/staff/นางสาวนิภาพรรณ ดาน้อย.jpg" }
    ]
  },

  /* ── [6] พนักงานราชการ (งาน) (6 คน) ── */
  gov_work: {
    label: "พนักงานราชการ (งาน)",
    members: [
      { name: "นางสาวพิกุล ทุมพานิชย์",    role: "พนักงานราชการ (งาน) งานพัสดุ",                      department: "งานพัสดุ",          education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวพิกุล ทุมพานิชย์.jpg" },
      { name: "นางสาวราตรี เขตตลาด",       role: "พนักงานราชการ (งาน) งานบริหารงานทั่วไป (สารบรรณ)", department: "งานบริหารทั่วไป",  education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวราตรี เขตตลาด.jpg" },
      { name: "นางฐิติชญาน์ รวิพลพิทักษ์", role: "พนักงานราชการ (งาน) งานวิทยบริการและห้องสมุด",     department: "งานวิทยบริการฯ",   education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางฐิติชญาน์ รวิพลพิทักษ์.jpg" },
      { name: "นางสาวนภาพร อำพล",          role: "พนักงานราชการ (งาน) งานพัสดุ (อาคารสถานที่)",       department: "งานพัสดุ (อาคารฯ)", education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวนภาพร อำพล.jpg" },
      { name: "นางสาวหฤทัย อยู่สวน",       role: "พนักงานราชการ (งาน) งานการเงิน",                    department: "งานการเงิน",        education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวหฤทัย อยู่สวน.jpg" },
      { name: "นายไชยา ขำชุ่ม",            role: "พนักงานราชการ (งาน) งานทะเบียน",                    department: "งานทะเบียน",        education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายไชยา ขำชุ่ม.jpg" }
    ]
  },

  /* ── [7] ครูอัตราจ้าง (8 คน) — เรียงตามรูป ── */
  contract: {
    label: "ครูอัตราจ้าง",
    members: [
      { name: "Mr. Josephus James Jacobs",        role: "ครูอัตราจ้าง", department: "แผนกวิชาภาษาต่างประเทศ",      education: "ไม่ระบุ",                 image: "assets/images/staff/Mr. Josephus James Jacobs.jpg" },
      { name: "Mr. Bryan Michael G. Badana",      role: "ครูอัตราจ้าง", department: "แผนกวิชาภาษาต่างประเทศ",      education: "ไม่ระบุ",                 image: "assets/images/staff/Mr.Bryan Michael G. Badana.jpg" },
      { name: "นางสาวอรอิสรา โชงโลง",            role: "ครูอัตราจ้าง", department: "แผนกวิชาสามัญสัมพันธ์",       education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวอรอิสรา โชงโลง.jpg" },
      { name: "นางสาวนาตาชา มะตะระกี",           role: "ครูอัตราจ้าง", department: "แผนกวิชาการจัดการโลจิสติกส์", education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวนาตาชา มะตะระกี.jpg" },
      { name: "Miss XIAOYI CHEN",                 role: "ครูอัตราจ้าง", department: "แผนกวิชาภาษาต่างประเทศ",      education: "ไม่ระบุ",                 image: "assets/images/staff/Miss XIAOYI CHEN.jpg" },
      { name: "นางสาวอินอาม อับดุลลากาซิม",      role: "ครูอัตราจ้าง", department: "แผนกวิชาการตลาด",             education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวอินอาม อับดุลลากาซิม.jpg" },
      { name: "Mr. S M Muttaquim Reza",           role: "ครูอัตราจ้าง", department: "แผนกวิชาการบัญชี",            education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/Mr. S M Muttaquim Reza.jpg" },
      { name: "Mr. JAN MICHAEL JAMILI PALABRICA", role: "ครูอัตราจ้าง", department: "แผนกวิชาการโรงแรม",           education: "ไม่ระบุ",                 image: "assets/images/staff/MR. JAN MICHAEL JAMILI PALABRICA.jpg" }
    ]
  },

  /* ── [8] เจ้าหน้าที่ (25 คน) ── มีรูปและไม่มีรูป ทั้งหมดแสดง card */
  officer: {
    label: "เจ้าหน้าที่",
    members: [
      { name: "นายดอน บุตรมี",                  role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "ประถมศึกษาตอนต้น",                            image: "assets/images/staff/นายดอน บุตรมี.jpg" },
      { name: "นางสาวปรียาภรณ์ เย็นจิตร์",      role: "เจ้าหน้าที่งานพัฒนาหลักสูตรการเรียนการสอน",             department: "งานวิชาการ",            education: "ปริญญาตรีหรือเทียบเท่า",                      image: "assets/images/staff/นางสาวปรียาภรณ์ เย็นจิตร์.jpg" },
      { name: "นางสาวรัตนา บุญชู",              role: "เจ้าหน้าที่งานบุคลากร",                                 department: "งานบุคลากร",            education: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",          image: "assets/images/staff/นางสาวรัตนา บุญชู.jpg" },
      { name: "นางสาวณัชกมล พูนมาก",            role: "เจ้าหน้าที่งานปกครอง / งานกิจกรรม / งานครูที่ปรึกษา", department: "งานปกครอง",             education: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",          image: "assets/images/staff/นางสาวณัชกมล พูนมาก.jpg" },
      { name: "นางนภา ดวงไชย",                  role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "มัธยมศึกษาตอนต้น",                            image: "assets/images/staff/นางนภา ดวงไชย.jpg" },
      { name: "นางสาวปุณยตา ปานแก้ว",           role: "เจ้าหน้าที่งานอาชีวศึกษาระบบทวิภาคี",                   department: "งานทวิภาคี",            education: "ปริญญาตรีหรือเทียบเท่า",                      image: "assets/images/staff/นางสาวปุณยตา ปานแก้ว.jpg" },
      { name: "นางสาวสุรีรัตน์ จั่นพา",         role: "เจ้าหน้าที่งานบริหารงานทั่วไป / งานสวัสดิการนักเรียน", department: "งานบริหาร",             education: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",          image: "assets/images/staff/นางสาวสุรีรัตน์ จั่นพา.jpg" },
      { name: "นายอภินัทธ์ ไรมันซา",            role: "เจ้าหน้าที่ระบบ STDAC / ครูผู้ช่วยแผนกเทคโนโลยีฯ",     department: "งานเทคโนโลยีสารสนเทศ", education: "ปริญญาตรีหรือเทียบเท่า",                      image: "assets/images/staff/นายอภินัทธ์ ไรมันซา.jpg" },
      { name: "นายวงศธร สถาพรวิริยกุล",         role: "เจ้าหน้าที่งานศูนย์ข้อมูล / งานสื่อการสอน",             department: "งานศูนย์ข้อมูล",       education: "ประกาศนียบัตรการศึกษาชั้นสูง",                image: "assets/images/staff/นายวงศธร สถาพรวิริยกุล.jpg" },
      { name: "นายสมศักดิ์ โพธิ์มณี",           role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "ไม่ระบุ",                                     image: "assets/images/staff/นายสมศักดิ์ โพธิ์มณี.jpg" },
      { name: "นางอุบล โพธิ์มณี",               role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "มัธยมศึกษาตอนต้น",                            image: "assets/images/staff/นางอุบล โพธิ์มณี.jpg" },
      { name: "นางสาวจิรสุตา มีมูลผล",          role: "เจ้าหน้าที่งานวางแผนและงบประมาณ / งานความร่วมมือ",      department: "งานแผนงาน",             education: "ประกาศนียบัตรวิชาชีพ (ปวช.)",                 image: "assets/images/staff/นางสาวจิรสุตา มีมูลผล.jpg" },
      /* ไม่มีรูป — แสดง card + placeholder */
      { name: "นายวิรัช สิทธิพิศาลกุล",         role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "ไม่ระบุ",                                     image: null },
      { name: "นางสาวซันดาเอ",                  role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "ไม่ระบุ",                                     image: null },
      { name: "นางสาววันจันทร์ สิงหรา",         role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "ไม่ระบุ",                                     image: null },
      { name: "นางกุมารี จำปีรัตน์",            role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "ไม่ระบุ",                                     image: null },
      { name: "นางกินา จินะวงษา",               role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "ไม่ระบุ",                                     image: null },
      { name: "นางสาวมัลลิกา พลับพลึงศรี",      role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "ไม่ระบุ",                                     image: null },
      { name: "นางปราณี สุขเทศ",                role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "ไม่ระบุ",                                     image: null },
      { name: "นายซอ ไว่ ยาน มิน",             role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "ไม่ระบุ",                                     image: null },
      { name: "นายอ่า เซน",                     role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "ไม่ระบุ",                                     image: null },
      { name: "นางสาวสมบูรณ์ แจ่มใส",          role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "ไม่ระบุ",                                     image: null },
      { name: "นางสาวนาน ติน ติน ยิ",           role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "ไม่ระบุ",                                     image: null },
      { name: "นางสาวบี",                       role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "ไม่ระบุ",                                     image: null },
      { name: "นางสมศรี บุญสูง",                role: "เจ้าหน้าที่งานพัสดุ (อาคารสถานที่)",                     department: "งานพัสดุ",              education: "ไม่ระบุ",                                     image: null }
    ]
  },

  /* ── [9] ครูผู้ช่วย (6 คน) ── */
  asst_teacher: {
    label: "ครูผู้ช่วย",
    members: [
      { name: "นายภานุวัฒน์ ศรีแสง",           role: "ครูผู้ช่วย", department: "แผนกวิชาการตลาด",                   education: "ปริญญาโทหรือเทียบเท่า",  image: "assets/images/staff/นายภานุวัฒน์ ศรีแสง.jpg" },
      { name: "นายกษิดิศ สมทรัพย์",            role: "ครูผู้ช่วย", department: "แผนกวิชาการจัดการโลจิสติกส์",       education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นายกษิดิศ สมทรัพย์.jpg" },
      { name: "นางสาวชูใจ ปานบางพงศ์",         role: "ครูผู้ช่วย", department: "แผนกวิชาการจัดการสำนักงาน",          education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวชูใจ ปานบางพงศ์.jpg" },
      { name: "นางณิชาภัทร นางาม",             role: "ครูผู้ช่วย", department: "แผนกวิชาอาหารและโภชนาการ",           education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางณิชาภัทร นางาม.jpg" },
      { name: "นางสาวพัชราภรณ์ อยู่ขอบเวียง", role: "ครูผู้ช่วย", department: "แผนกวิชาการจัดการโลจิสติกส์",       education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวพัชราภรณ์ อยู่ขอบเวียง.jpg" },
      { name: "นางสาวยลภัทร มโนทัศน์",         role: "ครูผู้ช่วย", department: "แผนกวิชาภาษาต่างประเทศ",            education: "ปริญญาตรีหรือเทียบเท่า", image: "assets/images/staff/นางสาวยลภัทร มโนทัศน์.jpg" }
    ]
  }

};

/* ════════════════════════════════════════════════════════
   Auto-populate แถบ "ทั้งหมด"
   - รวมทุกหมวดตามลำดับ
   - dedup ด้วยชื่อ (ป้องกันซ้ำ)
   - รวม officer ที่ image=null ด้วย (แสดง placeholder card)
   ════════════════════════════════════════════════════════ */
(function () {
  var ORDER = [
    'dept_head','work_head','teacher',
    'civil_service','gov_teach','gov_work',
    'contract','officer','asst_teacher'
  ];
  var seen = {};
  var all  = [];
  ORDER.forEach(function (key) {
    var cat = staffCategoryData[key];
    if (!cat) return;
    cat.members.forEach(function (m) {
      if (!seen[m.name]) {
        seen[m.name] = true;
        all.push(m);
      }
    });
  });
  staffCategoryData.all.members = all;
}());
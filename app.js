// ==========================================
// CCTV Repair Dashboard Core Logic & Data
// ==========================================

// High-fidelity Mathematically Exact Municipal Dataset (9 Projects)
const PROJECT_DATA = [
    {
        id: 1,
        year: 2567,
        order: 1,
        name: "เคลื่อนย้ายอุปกรณ์และเดินสายส่งสัญญาณ ที่สถานีตำรวจภูธรเมืองนครสวรรค์",
        jobtype: "ย้าย/เดินสายส่งสัญญาณ",
        cameras: 0,
        poles: 0,
        budget: 163000,
        procure: "เฉพาะเจาะจง",
        status: "เสร็จสิ้น",
        location: "สภ.เมืองนครสวรรค์",
        coords: "15.7032, 100.1378",
        desc: "ดำเนินการรื้อถอน ย้ายตู้ควบคุม เสาสัญญาณกล้อง CCTV และดึงสายสัญญาณใหม่เนื่องจากมีการก่อสร้างอาคารและปรับทางเท้าบริเวณสถานีตำรวจภูธรเมืองนครสวรรค์ เพื่อความปลอดภัยและการเชื่อมต่อระบบที่ต่อเนื่อง",
        note: "ไม่มีจำนวนกล้องในรายงาน",
        logs: [
            { time: "12/04/2567 16:00", text: "ส่งงาน ทดสอบสัญญาณและภาพเชื่อมต่อไปยังศูนย์ควบคุมเรียบร้อย", tech: "ตำแหน่ง: นายช่างเทคนิคคอมพิวเตอร์" },
            { time: "10/04/2567 11:30", text: "ทำการติดตั้งกล้อง ยึดฐานเสาไฟใหม่ และจัดระเบียบโครงสร้าง", tech: "ตำแหน่ง: นายช่างไฟฟ้า" },
            { time: "08/04/2567 09:00", text: "ขุดเปิดหน้าดิน เดินท่อร้อยสายใยแก้วนำแสงใต้ดินแนวเส้นทางใหม่", tech: "ตำแหน่ง: นายช่างเทคนิคเครือข่าย" }
        ],
        imgBefore: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=300&q=80",
        imgAfter: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 2,
        year: 2567,
        order: 2,
        name: "ซ่อมแซมระบบกล้องโทรทัศน์วงจรปิด ระยะที่ 3, 4 และ 5",
        jobtype: "ซ่อมระบบกล้อง",
        cameras: 32,
        poles: 0,
        budget: 454000,
        procure: "เฉพาะเจาะจง",
        status: "เสร็จสิ้น",
        location: "เขตพื้นที่การดูแลระยะที่ 3, 4, 5",
        coords: "15.7015, 100.1255",
        desc: "ซ่อมบำรุงรักษาอุปกรณ์กล้องวงจรปิดจำนวน 32 กล้องในจุดติดตั้งเขตการดูแลระยะที่ 3, 4 และ 5 แก้ไขกล้องที่ดับ ขัดข้อง สัญญาณวิดีโอขาดหาย สลับภาพกระตุก รวมถึงเปลี่ยนอะไหล่ชิ้นส่วนที่เสื่อมสภาพเพื่อให้พร้อมใช้งาน",
        note: "ซ่อมระบบกล้องตามรายงาน",
        logs: [
            { time: "25/05/2567 14:00", text: "ทำความสะอาดหน้ากระจกเฮ้าส์ซิ่งเลนส์กล้อง ทดสอบซูมและโฟกัสครบ 32 ตัว", tech: "ตำแหน่ง: นายช่างไฟฟ้า" },
            { time: "22/05/2567 10:15", text: "เปลี่ยนพาวเวอร์ซัพพลายขนาดเล็กภายในตัวกล้อง และมีเดียคอนเวอร์เตอร์ไฟเบอร์จำนวน 6 ตัว", tech: "ตำแหน่ง: วิศวกรควบคุมงาน" },
            { time: "20/05/2567 09:00", text: "ตรวจหาตำแหน่งสายเชื่อมชำรุดบนตัวเสา และเปลี่ยนสาย UTP แพทช์ภายนอกอาคาร", tech: "ตำแหน่ง: นายช่างเทคนิคเครือข่าย" }
        ],
        imgBefore: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=300&q=80",
        imgAfter: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 3,
        year: 2567,
        order: 3,
        name: "ซ่อมแซมระบบกล้องโทรทัศน์วงจรปิด ระยะที่ 2, 3, 4, 6 และ 8",
        jobtype: "ซ่อมระบบกล้อง",
        cameras: 11,
        poles: 0,
        budget: 320000,
        procure: "เฉพาะเจาะจง",
        status: "เสร็จสิ้น",
        location: "เขตพื้นที่การดูแลระยะที่ 2, 3, 4, 6, 8",
        coords: "15.6980, 100.1190",
        desc: "งานซ่อมแซมระบบกล้องจราจรและตรวจจับความปลอดภัยบริเวณแยกสะพานเดชาติวงศ์ประตูสู่ภาคเหนือ แก้ไขปัญหาระบบไฟขัดข้องเนื่องจากพายุและฟ้าผ่าจำนวน 11 กล้อง ให้กลับมารับส่งข้อมูลได้คมชัดเรียลไทม์",
        note: "ซ่อมระบบกล้องตามรายงาน",
        logs: [
            { time: "11/06/2567 16:30", text: "ตรวจรับงานเสร็จสิ้น วิ่งกระแสไฟเสถียรดี ติดตั้งระบบเซิร์จกันไฟกระชาก (Surge Protector)", tech: "ตำแหน่ง: วิศวกรควบคุมงาน" },
            { time: "09/06/2567 13:00", text: "ดำเนินการสลับเอาบอร์ดอะไหล่และชุดเลนส์ตัวใหม่เข้าไปทดแทนตัวที่เสียหายจากฟ้าผ่า", tech: "ตำแหน่ง: นายช่างเทคนิคคอมพิวเตอร์" },
            { time: "08/06/2567 08:30", text: "ตรวจสอบแรงดันไฟต้นทาง พบฟิวส์ไฟในตู้คอนโทรลขาดเนื่องจากกระแสไฟฟ้าตก/กระชาก", tech: "ตำแหน่ง: นายช่างไฟฟ้า" }
        ],
        imgBefore: "https://images.unsplash.com/photo-1508847154043-be12a62861c1?auto=format&fit=crop&w=300&q=80",
        imgAfter: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 4,
        year: 2567,
        order: 4,
        name: "ซ่อมแซมระบบกล้องโทรทัศน์วงจรปิด ระยะที่ 2, 3, 4, 6, 7, อุทยานสวรรค์ 1 และ 2",
        jobtype: "ซ่อมระบบกล้อง",
        cameras: 38,
        poles: 0,
        budget: 488000,
        procure: "เฉพาะเจาะจง",
        status: "เสร็จสิ้น",
        location: "ระยะที่ 2, 3, 4, 6, 7, อุทยานสวรรค์ 1 และ 2",
        coords: "15.7065, 100.1285",
        desc: "งานบำรุงรักษาเชิงลึกสำหรับกล้องวงจรปิดรอบหนองสมบุญ สวนสาธารณะหลักของจังหวัด รวมทั้งสิ้น 38 กล้อง ทำการเปลี่ยนมอเตอร์และพัดลมระบายความร้อนเพื่อให้อุปกรณ์รองรับสภาพอากาศกลางแจ้งได้ดีเยี่ยม",
        note: "ซ่อมระบบกล้องตามรายงาน",
        logs: [
            { time: "18/09/2567 17:00", text: "เซ็ตพิกัดโปรแกรมการหมุนวนกวาดภาพ (Patrol Preset) ครบทุกกล้องเพื่อความคลอบคลุมพื้นที่", tech: "ตำแหน่ง: นายช่างไฟฟ้า" },
            { time: "15/09/2567 11:00", text: "ซ่อมแกนขับเคลื่อนมอเตอร์กล้องโดมหมุนส่าย (PTZ) 8 ตัวที่มีอาการฝืดขัดส่ายแล้วสะดุด", tech: "ตำแหน่ง: นายช่างเทคนิคคอมพิวเตอร์" },
            { time: "12/09/2567 09:00", text: "ตรวจสภาพสารกันชื้นภายในกล้อง และเปลี่ยนแผ่นยางโอริงซีลกรอบกระจกเพื่อกันน้ำเข้า", tech: "ตำแหน่ง: นายช่างเทคนิคเครือข่าย" }
        ],
        imgBefore: "https://images.unsplash.com/photo-1582556362249-87d7d32e7fc1?auto=format&fit=crop&w=300&q=80",
        imgAfter: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 5,
        year: 2567,
        order: 5,
        name: "ซ่อมแซมระบบกล้องโทรทัศน์วงจรปิด ระยะที่ 1-7 และสถานีขนส่ง",
        jobtype: "ซ่อมระบบกล้อง",
        cameras: 38,
        poles: 0,
        budget: 475000,
        procure: "เฉพาะเจาะจง",
        status: "เสร็จสิ้น",
        location: "ระยะที่ 1-7, สถานีขนส่ง",
        coords: "15.7145, 100.1215",
        desc: "ตรวจสอบเชิงลึกและบำรุงรักษาซ่อมกล้องจำนวน 38 ตัวในบริเวณอาคารขนส่งผู้โดยสาร จุดบริการชานชาลา และประต้านหน้า-หลังของสถานีขนส่งนครสวรรค์ เพื่อความปลอดภัยขั้นสูงสุดในการเดินทางของชาวเมืองและนักท่องเที่ยว",
        note: "ซ่อมระบบกล้องตามรายงาน",
        logs: [
            { time: "28/11/2567 15:45", text: "อัปเกรดเฟิร์มแวร์กล้องเพื่อความเสถียรและทดสอบการส่องสว่างแบบไฟอินฟราเรด (IR) กลางคืน", tech: "ตำแหน่ง: วิศวกรควบคุมงาน" },
            { time: "25/11/2567 10:00", text: "เปลี่ยนหลอดอินฟราเรดที่ชำรุดเสื่อมแสงส่งผลให้มองไม่เห็นในที่มืดสนิท จำนวน 12 กล้อง", tech: "ตำแหน่ง: นายช่างไฟฟ้า" },
            { time: "22/11/2567 08:30", text: "ซ่อมบำรุงขั้วต่อ RJ45 และกล่องกันน้ำเข้าภายนอกตู้พักกระจายสัญญาณของสถานีขนส่ง", tech: "ตำแหน่ง: นายช่างเทคนิคเครือข่าย" }
        ],
        imgBefore: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&q=80",
        imgAfter: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 6,
        year: 2568,
        order: 1,
        name: "จ้างซ่อมแซมสายสัญญาณและระบบไฟฟ้ากล้องโทรทัศน์วงจรปิด ระยะที่ 1, 2, 3, 4, 6 และ 7",
        jobtype: "งานสายสัญญาณ/โครงข่าย และระบบไฟฟ้า",
        cameras: 20,
        poles: 0,
        budget: 483000,
        procure: "เฉพาะเจาะจง",
        status: "เสร็จสิ้น",
        location: "ระยะที่ 1, 2, 3, 4, 6, 7",
        coords: "15.7100, 100.1310",
        desc: "งานบำรุงซ่อมสายเคเบิล สไปรซ์โครงข่ายใยแก้วนำแสงในเขตรัศมีการดูแลระยะที่ 1, 2, 3, 4, 6 และ 7 ดำเนินการยึดแนวรัดสายที่ตกท้องช้าง ซ่อมมีเดียคอนเวอร์เตอร์ และตรวจสอบความเสถียรการส่งสัญญาณไฟของกล้อง 20 ตัว",
        note: "ในรายงานใช้คำว่า สายสัญญาณและระบบไฟฟ้า",
        logs: [
            { time: "18/02/2568 15:00", text: "สไปรซ์สายไฟเบอร์ออปติกที่ขาดเรียบร้อย สัญญาณแสงผ่านเกณฑ์มาตรฐาน", tech: "ตำแหน่ง: วิศวกรควบคุมงาน" },
            { time: "15/02/2568 10:00", text: "ตรวจหาตำแหน่งสายเคเบิลขาดเนื่องจากโดนกิ่งไม้ตกกระแทกทับ", tech: "ตำแหน่ง: นายช่างเทคนิคเครือข่าย" }
        ],
        imgBefore: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&q=80",
        imgAfter: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 7,
        year: 2568,
        order: 2,
        name: "จ้างติดแถบสีสายสัญญาณเครือข่ายเทศบาลนครนครสวรรค์",
        jobtype: "ติดแถบสีสายสัญญาณ",
        cameras: 0,
        poles: 870,
        budget: 295000,
        procure: "เฉพาะเจาะจง",
        status: "เสร็จสิ้น",
        location: "เครือข่ายเทศบาล 870 เสา",
        coords: "15.7050, 100.1300",
        desc: "ติดตั้งแถบสีระบุตัวสายใยแก้วนำแสงของระบบกล้องวงจรปิดเทศบาลนครนครสวรรค์ เพื่อจำแนกออกจากสายเคเบิลของเอกชน บนเสาไฟฟ้าจำนวน 870 ต้นทั่วถนนสายหลัก ป้องกันสายโดนรื้อถอนผิดพลาดและช่วยร่นระยะเวลาซ่อมบำรุง",
        note: "เป็นจำนวนเสา ไม่ใช่จำนวนกล้อง",
        logs: [
            { time: "30/04/2568 16:30", text: "ติดแถบสีสะท้อนแสงเขียว-ขาว และพิมพ์ป้ายแท็กรหัสเสร็จตามเสาสายหลักครบถ้วน", tech: "ตำแหน่ง: นายช่างไฟฟ้า" },
            { time: "20/04/2568 10:00", text: "พันแถบพลาสติกสีระบุท่อส่งผ่านสายไฟเบอร์ตามจุดคอเสาไฟฟ้าสายหลัก", tech: "ตำแหน่ง: นายช่างเทคนิคเครือข่าย" }
        ],
        imgBefore: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80",
        imgAfter: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 8,
        year: 2568,
        order: 3,
        name: "จ้างซ่อมแซมสายสัญญาณและระบบไฟฟ้ากล้องโทรทัศน์วงจรปิด ระยะที่ 3, 4, 5, 6, 8 และพื้นที่สำคัญ",
        jobtype: "งานสายสัญญาณ/โครงข่าย และระบบไฟฟ้า",
        cameras: 25,
        poles: 0,
        budget: 481000,
        procure: "เฉพาะเจาะจง",
        status: "เสร็จสิ้น",
        location: "ระยะที่ 3, 4, 5, 6, 8, สนามกีฬากลาง, อุทยานสวรรค์ 1 และ 2, ชุมชนชอนตะวัน, กล้องจราจร",
        coords: "15.7080, 100.1240",
        desc: "ซ่อมบำรุงรักษาสายเคเบิลโครงข่าย ระบบเบรกเกอร์ไฟฟ้า และกล่องแยกไฟภายนอกอาคารเพื่อรักษาเสถียรภาพการจ่ายพลังงานให้กล้อง 25 ตัว ในระยะซ่อมแซมสำคัญและจุดสาธารณะหลัก เช่น สนามกีฬากลาง และชุมชนชอนตะวัน",
        note: "ในรายงานใช้คำว่า สายสัญญาณและระบบไฟฟ้า",
        logs: [
            { time: "18/09/2568 16:00", text: "เปลี่ยนตู้พักปลายทาง (Cabinet Box) และสวิตช์แลกเปลี่ยนสัญญาณจำนวน 4 โหนด", tech: "ตำแหน่ง: นายช่างเทคนิคคอมพิวเตอร์" },
            { time: "12/09/2568 11:00", text: "เปลี่ยนปลั๊กเบรกเกอร์ไฟ และสายกราวด์เดินดินลดผลกระทบฟ้าผ่าในจุดพักสายสนามกีฬากลาง", tech: "ตำแหน่ง: นายช่างไฟฟ้า" }
        ],
        imgBefore: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80",
        imgAfter: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 9,
        year: 2569,
        order: 1,
        name: "จ้างซ่อมแซมสายสัญญาณและระบบไฟฟ้ากล้องโทรทัศน์วงจรปิดภายในเขตเทศบาลนครนครสวรรค์",
        jobtype: "งานสายสัญญาณ/โครงข่าย และระบบไฟฟ้า",
        cameras: 230,
        poles: 0,
        budget: 2513000,
        procure: "คัดเลือก",
        status: "อยู่ระหว่างดำเนินการ",
        location: "ภายในเขตเทศบาลนครนครสวรรค์",
        coords: "15.7050, 100.1300",
        desc: "โครงการเมกะโปรเจกต์เชิงป้องกัน บูรณาการจ้างซ่อมแซม จัดระเบียบสายเคเบิลใยแก้วนำแสง แหล่งพลังงานไฟฟ้า และซัพพอร์ตเครือข่ายแบบคัดเลือกผู้ให้บริการ เพื่อฟื้นฟูคุณภาพการส่งภาพความเร็วสูงให้กล้อง 230 ตัวทั่วเมือง",
        note: "โครงการเดียวขนาดใหญ่ โดยวิธีคัดเลือก",
        logs: [
            { time: "10/05/2569 14:00", text: "ความคืบหน้ารวม 85% ดำเนินการสไปรซ์จัดแนวสายหลักเข้าอาคารราชการเรียบร้อย", tech: "ตำแหน่ง: วิศวกรควบคุมงาน" },
            { time: "02/05/2569 09:30", text: "ติดตั้งตัวสำรองไฟอัจฉริยะ (Smart UPS Inline) เพื่อป้องกันระบบดับชั่วคราวขณะไฟตก", tech: "ตำแหน่ง: นายช่างเทคนิคเครือข่าย" }
        ],
        imgBefore: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=300&q=80",
        imgAfter: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&q=80"
    }
];

// ==========================================
// Application Reactive State
// ==========================================
const state = {
    filters: {
        year: "2567-2569",
        jobtype: "ทั้งหมด",
        status: "ทั้งหมด",
        scenario: "ฐานข้อมูล",
        cablingScenario: 0
    },
    table: {
        currentPage: 1,
        pageSize: 5,
        sortBy: "id",
        sortOrder: "asc", // or 'desc'
        searchQuery: ""
    },
    charts: {
        trend: null,
        cabling: null
    },
    guidelines: {
        activeTab: "short"
    }
};

// Map Job Type to Styling Classes / Colors
const jobStyles = {
    "ซ่อมระบบกล้อง": { color: "#0b6887", barClass: "bar-system" },
    "งานสายสัญญาณ/โครงข่าย และระบบไฟฟ้า": { color: "#0c4a7e", barClass: "bar-network" },
    "ย้าย/เดินสายส่งสัญญาณ": { color: "#d97706", barClass: "bar-relocate" },
    "ติดแถบสีสายสัญญาณ": { color: "#2b4570", barClass: "bar-bands" }
};

// ==========================================
// Initialization & Startup
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Initialise Lucide Icons
    lucide.createIcons();
    
    // Setup UI DOM Event Listeners
    setupEventListeners();
    
    // Render Dual-axis Trend Chart (first build)
    initTrendChart();
    
    // Perform initial calculations and update UI Elements
    updateDashboard();
    
    // Set initial guideline tab step
    switchGuidelineTab("short");
    
    // Bind global tab functions
    window.switchDashboardTab = switchDashboardTab;
    window.simulateCablingReduction = simulateCablingReduction;
});

// ==========================================
// Event Listeners Setup
// ==========================================
function setupEventListeners() {
    // Top dropdowns change
    document.getElementById("filter-year").addEventListener("change", (e) => {
        state.filters.year = e.target.value;
        state.table.currentPage = 1; // Reset to page 1
        updateDashboard();
    });
    
    document.getElementById("filter-jobtype").addEventListener("change", (e) => {
        state.filters.jobtype = e.target.value;
        state.table.currentPage = 1;
        updateDashboard();
    });
    
    document.getElementById("filter-status").addEventListener("change", (e) => {
        state.filters.status = e.target.value;
        state.table.currentPage = 1;
        updateDashboard();
    });
    
    document.getElementById("filter-scenario").addEventListener("change", (e) => {
        state.filters.scenario = e.target.value;
        updateDashboard();
    });
    
    // Collapsible Filters Panel on Mobile
    const btnToggle = document.getElementById("btn-toggle-filters");
    const filterWrapper = document.getElementById("filter-wrapper-mobile");
    const chevron = document.getElementById("filter-chevron");
    if (btnToggle && filterWrapper) {
        btnToggle.addEventListener("click", () => {
            filterWrapper.classList.toggle("expanded");
            if (filterWrapper.classList.contains("expanded")) {
                chevron.style.transform = "rotate(180deg)";
            } else {
                chevron.style.transform = "";
            }
        });
    }
    
    // Reset Filters Button
    document.getElementById("btn-reset-filters").addEventListener("click", () => {
        state.filters.year = "2567-2569";
        state.filters.jobtype = "ทั้งหมด";
        state.filters.status = "ทั้งหมด";
        state.filters.scenario = "ฐานข้อมูล";
        state.table.searchQuery = "";
        state.table.currentPage = 1;
        
        // Sync Dropdowns in UI
        document.getElementById("filter-year").value = "2567-2569";
        document.getElementById("filter-jobtype").value = "ทั้งหมด";
        document.getElementById("filter-status").value = "ทั้งหมด";
        document.getElementById("filter-scenario").value = "ฐานข้อมูล";
        document.getElementById("project-search").value = "";
        
        // Close collapsed panel on mobile if reset
        if (filterWrapper && filterWrapper.classList.contains("expanded")) {
            filterWrapper.classList.remove("expanded");
            chevron.style.transform = "";
        }
        
        updateDashboard();
    });

    // Search bar listener with input reactivity
    document.getElementById("project-search").addEventListener("input", (e) => {
        state.table.searchQuery = e.target.value.trim().toLowerCase();
        state.table.currentPage = 1;
        renderProjectsTable();
    });
}

// ==========================================
// Dynamic Dashboard Refresh Engine
// ==========================================
function updateDashboard() {
    // Filter master dataset based on active filter state
    const filteredData = getFilteredData();
    
    // Update KPI Card Metrics
    renderKpis(filteredData);
    
    // Update Interactive Visual Chart
    updateTrendChart(filteredData);
    
    // Update Budget Job Type Distribution Bar list
    renderJobTypeDistribution(filteredData);
    
    // Highlight category grid columns and active states
    renderCategoryGridHighlights();
    
    // Render bottom projects data table & mobile card summary list
    renderProjectsTable();
    
    // Update scenario table row highlight
    syncScenarioTableSelection();
}

// ==========================================
// Filtering Engine
// ==========================================
function getFilteredData() {
    return PROJECT_DATA.filter(item => {
        // Year filter check
        if (state.filters.year !== "2567-2569") {
            if (item.year.toString() !== state.filters.year) return false;
        }
        // Jobtype filter check
        if (state.filters.jobtype !== "ทั้งหมด") {
            if (item.jobtype !== state.filters.jobtype) return false;
        }
        // Status filter check
        if (state.filters.status !== "ทั้งหมด") {
            if (item.status !== state.filters.status) return false;
        }
        return true;
    });
}

// Get the budget multiplier based on Scenario selection
function getBudgetMultiplier() {
    switch (state.filters.scenario) {
        case "ลด 20%": return 0.8;
        case "ลด 35%": return 0.65;
        case "ลด 50%": return 0.5;
        default: return 1.0;
    }
}

// ==========================================
// KPI Rendering Engine (Dynamic Numbers)
// ==========================================
function renderKpis(data) {
    const multiplier = getBudgetMultiplier();
    
    // 1. Projects Count
    const totalProjects = data.length;
    document.getElementById("kpi-projects").textContent = totalProjects;
    
    // 2. Cameras Count
    const totalCameras = data.reduce((sum, item) => sum + item.cameras, 0);
    document.getElementById("kpi-cameras").textContent = totalCameras;
    
    // 3. Poles Count
    const totalPoles = data.reduce((sum, item) => sum + item.poles, 0);
    document.getElementById("kpi-poles").textContent = totalPoles;
    
    // 4. Total Budget (Millions)
    const rawBudgetSum = data.reduce((sum, item) => sum + item.budget, 0);
    const simulatedBudgetSum = rawBudgetSum * multiplier;
    
    // Format to 3 decimals (e.g., 5.672M)
    const millionsBudget = (simulatedBudgetSum / 1000000).toFixed(3);
    document.getElementById("kpi-budget").textContent = millionsBudget;
    
    // Visual budget KPI accent highlight if simulated/reduced
    const budgetCard = document.getElementById("kpi-budget-card");
    const budgetKpiLabel = document.getElementById("budget-kpi-label");
    if (multiplier < 1.0) {
        budgetCard.style.border = "1.5px solid var(--accent-green)";
        budgetKpiLabel.innerHTML = `งบรวมจำลอง <span style="color:var(--accent-green); font-weight:700;">(-${Math.round((1-multiplier)*100)}%)</span>`;
    } else {
        budgetCard.style.border = "1px solid var(--border-color)";
        budgetKpiLabel.textContent = "งบรวม";
    }
    
    // 5. Section titles sync
    const kpiTitle = document.getElementById("kpi-section-title");
    const avgTitle = document.getElementById("avg-section-title");
    
    if (state.filters.year === "2567-2569") {
        kpiTitle.textContent = "ภาพรวม 3 ปี (2567-2569)";
        avgTitle.textContent = "ค่าเฉลี่ยต่อปี (ย้อนหลัง 3 ปี)";
    } else {
        kpiTitle.textContent = `ภาพรวม ปี ${state.filters.year}`;
        avgTitle.textContent = `ค่าเฉลี่ยตัวเลข ปี ${state.filters.year}`;
    }
    
    // Calculate Averages dynamically based on years count (1 or 3 years)
    const yearsDivisor = (state.filters.year === "2567-2569") ? 3 : 1;
    
    const avgBudgetVal = (simulatedBudgetSum / yearsDivisor / 1000000).toFixed(3);
    const avgCamerasVal = Math.round(totalCameras / yearsDivisor);
    const avgPolesVal = Math.round(totalPoles / yearsDivisor);
    
    document.getElementById("avg-budget").textContent = avgBudgetVal;
    document.getElementById("avg-cameras").textContent = avgCamerasVal;
    document.getElementById("avg-poles").textContent = avgPolesVal;
}

// ==========================================
// Dual-Axis Trend Chart (ApexCharts)
// ==========================================
function initTrendChart() {
    const options = {
        series: [
            {
                name: 'งบประมาณดั้งเดิม (ล้านบาท)',
                type: 'column',
                data: [1.900, 1.259, 2.513]
            },
            {
                name: 'งบประมาณจำลอง (ล้านบาท)',
                type: 'column',
                data: [1.900, 1.259, 2.513]
            },
            {
                name: 'จำนวนกล้อง (ตัว)',
                type: 'line',
                data: [119, 45, 230]
            }
        ],
        chart: {
            height: 250,
            type: 'bar',
            stacked: false,
            toolbar: { show: false },
            fontFamily: 'Sarabun, sans-serif'
        },
        stroke: {
            width: [0, 0, 4],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '55%',
                borderRadius: 4
            }
        },
        colors: ['#cbd5e1', '#0ea5e9', '#f97316'], // Original (Grey), Simulated (Blue), Cameras (Orange)
        fill: {
            opacity: [1, 1, 1],
        },
        labels: ['2567', '2568', '2569'],
        markers: {
            size: [0, 0, 5], // Show markers for line series only
            strokeWidth: 2,
            hover: { size: 7 }
        },
        xaxis: {
            type: 'category',
            labels: {
                style: {
                    colors: '#475569',
                    fontSize: '12px',
                    fontWeight: 600
                }
            }
        },
        yaxis: [
            {
                seriesName: 'งบประมาณดั้งเดิม (ล้านบาท)',
                axisTicks: { show: true },
                axisBorder: {
                    show: true,
                    color: '#94a3b8'
                },
                labels: {
                    style: { colors: '#475569', fontWeight: 600 },
                    formatter: function(val) { return val.toFixed(3) + " ล้าน"; }
                },
                title: {
                    text: "งบประมาณซ่อมบำรุง (ล้านบาท)",
                    style: { color: '#0f172a', fontWeight: 700 }
                },
                min: 0,
                max: 3.0
            },
            {
                seriesName: 'งบประมาณจำลอง (ล้านบาท)',
                show: false,
                min: 0,
                max: 3.0
            },
            {
                seriesName: 'จำนวนกล้อง (ตัว)',
                opposite: true,
                axisTicks: { show: true },
                axisBorder: {
                    show: true,
                    color: '#f97316'
                },
                labels: {
                    style: { colors: '#f97316', fontWeight: 600 },
                    formatter: function(val) { return Math.round(val) + " ตัว"; }
                },
                title: {
                    text: "จำนวนกล้องที่ซ่อม (ตัว)",
                    style: { color: '#f97316', fontWeight: 700 }
                },
                min: 0,
                max: 300
            }
        ],
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y, { seriesIndex }) {
                    if (typeof y !== "undefined") {
                        if (seriesIndex === 2) return y + " ตัว";
                        return y.toFixed(3) + " ล้านบาท";
                    }
                    return y;
                }
            }
        },
        legend: {
            horizontalAlign: 'center',
            offsetX: 0,
            markers: { radius: 12 },
            labels: { colors: '#334155' }
        }
    };

    state.charts.trend = new ApexCharts(document.querySelector("#trend-chart"), options);
    state.charts.trend.render();
}

function updateTrendChart(filteredData) {
    if (!state.charts.trend) return;
    
    const multiplier = getBudgetMultiplier();
    
    // Group budget & cameras by year based on filtered dataset
    const years = [2567, 2568, 2569];
    
    const originalBudgets = [];
    const simulatedBudgets = [];
    const camerasCount = [];
    
    years.forEach(year => {
        // Only sum items matching this year
        const yearItems = filteredData.filter(item => item.year === year);
        const originalSum = yearItems.reduce((sum, item) => sum + item.budget, 0) / 1000000;
        const simulatedSum = originalSum * multiplier;
        const camerasSum = yearItems.reduce((sum, item) => sum + item.cameras, 0);
        
        originalBudgets.push(originalSum);
        simulatedBudgets.push(simulatedSum);
        camerasCount.push(camerasSum);
    });
    
    // Update ApexChart Series
    state.charts.trend.updateSeries([
        {
            name: 'งบประมาณดั้งเดิม (ล้านบาท)',
            type: 'column',
            data: originalBudgets
        },
        {
            name: 'งบประมาณจำลอง (ล้านบาท)',
            type: 'column',
            data: simulatedBudgets
        },
        {
            name: 'จำนวนกล้อง (ตัว)',
            type: 'line',
            data: camerasCount
        }
    ]);
    
    // Update Dynamic Insights Text in the Box
    updateInsightText(originalBudgets, camerasCount);
}

function updateInsightText(budgets, cameras) {
    const insightText = document.getElementById("insight-text");
    const multiplier = getBudgetMultiplier();
    
    let text = "";
    
    if (state.filters.year === "2567-2569") {
        if (multiplier < 1.0) {
            const rawSum = budgets.reduce((sum, val) => sum + val, 0);
            const savedSum = (5.672) * (1 - multiplier);
            text = `<b>แบบจำลองสถานการณ์ ${state.filters.scenario}:</b> เมื่อปรับลดงบประมาณซ่อมบำรุงลง จะทำให้งบประมาณเฉลี่ยต่อปีเหลือ <b>${(5.672 * multiplier / 3).toFixed(3)} ล้านบาท/ปี</b> ประหยัดเงินหลวงรวม 3 ปีได้ถึง <span style="color:var(--accent-green);font-weight:700;">${savedSum.toFixed(3)} ล้านบาท</span> เพื่อนำไปจัดสรรในโครงการพัฒนาระบบเทคโนโลยีอื่น ๆ ต่อไป`;
        } else {
            text = "ปี 2569 ใช้งบสูงสุด 2.513 ล้านบาท และซ่อมครอบคลุมกล้องมากสุด 230 ตัว การรวมงานเป็นโครงการใหญ่ช่วยเพิ่มประสิทธิภาพและคุ้มค่ากว่าแบ่งซ่อมหลายรอบ";
        }
    } else {
        const year = state.filters.year;
        const yearIndex = year === "2567" ? 0 : (year === "2568" ? 1 : 2);
        const originalBudget = budgets[yearIndex];
        const cameraVal = cameras[yearIndex];
        const simBudget = originalBudget * multiplier;
        
        if (multiplier < 1.0) {
            text = `<b>ผลจำลองปี ${year}:</b> งบซ่อมถูกปรับลดจาก <b>${originalBudget.toFixed(3)} ล้านบาท</b> เหลือเพียง <span style="color:var(--primary);font-weight:700;">${simBudget.toFixed(3)} ล้านบาท</span> ประหยัดงบได้ <b>${(originalBudget - simBudget).toFixed(3)} ล้านบาท</b> สำหรับโครงการซ่อมกล้องจำนวน <b>${cameraVal} ตัว</b>`;
        } else {
            text = `<b>ภาพรวมปี ${year}:</b> ใช้งบประมาณซ่อมบำรุงจริงรวมทั้งสิ้น <b>${originalBudget.toFixed(3)} ล้านบาท</b> ครอบคลุมการบำรุงรักษากล้องทั้งหมด <b>${cameraVal} ตัว</b> ในเขตเทศบาลนครนครสวรรค์`;
        }
    }
    
    insightText.innerHTML = text;
}

// ==========================================
// Category Grid Highlight Sync
// ==========================================
function renderCategoryGridHighlights() {
    const cols = {
        "ซ่อมระบบกล้อง": document.getElementById("cat-col-system"),
        "งานสายสัญญาณ/โครงข่าย และระบบไฟฟ้า": document.getElementById("cat-col-network"),
        "ย้าย/เดินสายส่งสัญญาณ": document.getElementById("cat-col-relocate"),
        "ติดแถบสีสายสัญญาณ": document.getElementById("cat-col-bands")
    };
    
    // Clear all active classes
    Object.values(cols).forEach(col => {
        if (col) col.classList.remove("active-filter");
    });
    
    // Apply active class if single category filtered
    if (state.filters.jobtype !== "ทั้งหมด" && cols[state.filters.jobtype]) {
        cols[state.filters.jobtype].classList.add("active-filter");
    }
}

// Inline handler to quickly select a category filter by clicking panels
window.selectCategoryFilter = function(category) {
    const dropdown = document.getElementById("filter-jobtype");
    if (state.filters.jobtype === category) {
        // Toggle off if clicking the already active one
        state.filters.jobtype = "ทั้งหมด";
        dropdown.value = "ทั้งหมด";
    } else {
        state.filters.jobtype = category;
        dropdown.value = category;
    }
    state.table.currentPage = 1;
    updateDashboard();
};

// ==========================================
// Budget Job Type Distribution (Horizontal Bars)
// ==========================================
function renderJobTypeDistribution(filteredData) {
    const multiplier = getBudgetMultiplier();
    
    // Group budgets by Job Type (using exact repo database fields)
    const distData = {
        "งานสายสัญญาณ/โครงข่าย และระบบไฟฟ้า": { budget: 0, cameras: 0, poles: 0, barId: "dist-item-network" },
        "ซ่อมระบบกล้อง": { budget: 0, cameras: 0, poles: 0, barId: "dist-item-system" },
        "ติดแถบสีสายสัญญาณ": { budget: 0, cameras: 0, poles: 0, barId: "dist-item-bands" },
        "ย้าย/เดินสายส่งสัญญาณ": { budget: 0, cameras: 0, poles: 0, barId: "dist-item-relocate" }
    };
    
    // Aggregate data
    filteredData.forEach(item => {
        if (distData[item.jobtype]) {
            distData[item.jobtype].budget += item.budget * multiplier;
            distData[item.jobtype].cameras += item.cameras;
            distData[item.jobtype].poles += item.poles;
        }
    });
    
    const totalBudget = Object.values(distData).reduce((sum, item) => sum + item.budget, 0);
    
    // Render and update each item in list
    Object.entries(distData).forEach(([jobtype, info]) => {
        const itemDom = document.getElementById(info.barId);
        if (!itemDom) return;
        
        // Highlight active filter item list
        if (state.filters.jobtype === jobtype) {
            itemDom.classList.add("active-filter");
        } else {
            itemDom.classList.remove("active-filter");
        }
        
        // Calculate dynamic percentage
        const pct = totalBudget > 0 ? ((info.budget / totalBudget) * 100).toFixed(1) : "0.0";
        
        // Update values in DOM
        const budgetSpan = itemDom.querySelector(".dist-budget");
        const pctSpan = itemDom.querySelector(".dist-pct");
        const barDiv = itemDom.querySelector(".dist-bar");
        const subDiv = itemDom.querySelector(".dist-sub");
        
        budgetSpan.textContent = info.budget.toLocaleString();
        pctSpan.textContent = `${pct}%`;
        barDiv.style.width = `${pct}%`;
        
        // Update subtext
        if (jobtype === "ติดแถบสีสายสัญญาณ") {
            subDiv.textContent = `${info.poles.toLocaleString()} เสา`;
        } else if (jobtype === "ย้าย/เดินสายส่งสัญญาณ") {
            subDiv.textContent = "-";
        } else {
            subDiv.textContent = `${info.cameras.toLocaleString()} กล้อง`;
        }
    });
    
    // Update Total Budget Display
    const titleText = document.getElementById("dist-title-text");
    if (state.filters.year === "2567-2569") {
        titleText.textContent = "งบประมาณตามประเภทงาน (รวม 3 ปี)";
    } else {
        titleText.textContent = `งบประมาณตามประเภทงาน ปี ${state.filters.year}`;
    }
    
    document.getElementById("dist-total-val").textContent = `${totalBudget.toLocaleString()} บาท`;
}

// ==========================================
// Scenario Click & Selector Sync
// ==========================================
window.selectScenario = function(scenarioName) {
    state.filters.scenario = scenarioName;
    document.getElementById("filter-scenario").value = scenarioName;
    updateDashboard();
};

function syncScenarioTableSelection() {
    const table = document.getElementById("scenario-data-table");
    const rows = {
        "ฐานข้อมูล": document.getElementById("row-scenario-base"),
        "ลด 20%": document.getElementById("row-scenario-20"),
        "ลด 35%": document.getElementById("row-scenario-35"),
        "ลด 50%": document.getElementById("row-scenario-50")
    };
    
    // Remove active class from all rows
    Object.values(rows).forEach(row => {
        if (row) row.classList.remove("selected-scenario");
    });
    
    // Highlight the selected row
    if (rows[state.filters.scenario]) {
        rows[state.filters.scenario].classList.add("selected-scenario");
    }
}

// ==========================================
// Projects Table Component (Desktop Table & Mobile Cards UX)
// ==========================================
function renderProjectsTable() {
    const tbody = document.getElementById("projects-table-body");
    const mobileList = document.getElementById("projects-mobile-list");
    if (!tbody || !mobileList) return;
    
    const filteredData = getFilteredData();
    const multiplier = getBudgetMultiplier();
    
    // Apply search query if present
    let searchedData = filteredData;
    if (state.table.searchQuery !== "") {
        searchedData = filteredData.filter(item => {
            return item.name.toLowerCase().includes(state.table.searchQuery) ||
                   item.location.toLowerCase().includes(state.table.searchQuery) ||
                   item.jobtype.toLowerCase().includes(state.table.searchQuery);
        });
    }
    
    // Apply Table Sorting
    searchedData.sort((a, b) => {
        let valA = a[state.table.sortBy];
        let valB = b[state.table.sortBy];
        
        // Handle custom sorting cases (budget/string)
        if (typeof valA === "string") {
            return state.table.sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
        } else {
            return state.table.sortOrder === "asc" ? valA - valB : valB - valA;
        }
    });
    
    // Calculate Pagination Parameters
    const totalItems = searchedData.length;
    const totalPages = Math.ceil(totalItems / state.table.pageSize) || 1;
    
    // Fix current page bounds
    if (state.table.currentPage > totalPages) state.table.currentPage = totalPages;
    if (state.table.currentPage < 1) state.table.currentPage = 1;
    
    const startIndex = (state.table.currentPage - 1) * state.table.pageSize;
    const endIndex = Math.min(startIndex + state.table.pageSize, totalItems);
    
    // Extract sliced page items
    const pageItems = searchedData.slice(startIndex, endIndex);
    
    // Clear existing contents
    tbody.innerHTML = "";
    mobileList.innerHTML = "";
    
    if (pageItems.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 24px; color: var(--text-muted);">ไม่พบข้อมูลโครงการที่ค้นหา</td></tr>`;
        mobileList.innerHTML = `<div style="text-align:center; padding: 24px; color: var(--text-muted);">ไม่พบข้อมูลโครงการที่ค้นหา</div>`;
        updatePaginationUI(totalItems, totalPages);
        return;
    }
    
    // 1. Draw Desktop Table Rows
    pageItems.forEach(item => {
        const tr = document.createElement("tr");
        tr.addEventListener("click", () => openProjectModal(item));
        
        // Map procurement badges
        let procureBadgeClass = "badge-procure";
        if (item.procure === "e-bidding") procureBadgeClass += " e-bid";
        else if (item.procure === "คัดเลือก") procureBadgeClass += " select";
        else procureBadgeClass += " specific";
        
        const simBudget = item.budget * multiplier;
        const displayCameras = item.cameras > 0 ? item.cameras.toLocaleString() : "-";
        const displayPoles = item.poles > 0 ? item.poles.toLocaleString() : "-";
        
        tr.innerHTML = `
            <td style="font-weight: 500;">${item.year}</td>
            <td class="font-outfit" style="color:var(--text-secondary); font-weight:600;">${item.order}</td>
            <td data-tooltip="${item.desc}" style="font-weight: 600; white-space: normal; min-width: 250px; max-width: 320px; color:var(--primary); line-height:1.35;">${item.name}</td>
            <td style="color:var(--text-secondary); font-weight: 500;">${item.jobtype}</td>
            <td class="font-outfit" style="text-align:right; font-weight:600;">${displayCameras}</td>
            <td class="font-outfit" style="text-align:right; font-weight:600;">${displayPoles}</td>
            <td class="font-outfit" style="text-align:right; font-weight:700; color:var(--primary-light);">${simBudget.toLocaleString()}</td>
            <td><span class="${procureBadgeClass}">${item.procure}</span></td>
        `;
        tbody.appendChild(tr);
    });
    
    // Add Subtotal Row at the bottom of desktop table
    const pageBudgetTotal = pageItems.reduce((sum, item) => sum + (item.budget * multiplier), 0);
    const pageCamerasTotal = pageItems.reduce((sum, item) => sum + item.cameras, 0);
    const pagePolesTotal = pageItems.reduce((sum, item) => sum + item.poles, 0);
    
    const summaryTr = document.createElement("tr");
    summaryTr.className = "summary-row";
    summaryTr.innerHTML = `
        <td colspan="4" style="text-align:left;">รวมผลบนหน้านี้</td>
        <td class="font-outfit" style="text-align:right;">${pageCamerasTotal > 0 ? pageCamerasTotal.toLocaleString() : "-"}</td>
        <td class="font-outfit" style="text-align:right;">${pagePolesTotal > 0 ? pagePolesTotal.toLocaleString() : "-"}</td>
        <td class="font-outfit" style="text-align:right; color:var(--primary-dark);">${pageBudgetTotal.toLocaleString()}</td>
        <td></td>
    `;
    tbody.appendChild(summaryTr);
    
    // 2. Draw Mobile Cards List (Transform rows into gorgeous card layout)
    pageItems.forEach(item => {
        const card = document.createElement("div");
        card.className = "project-mobile-card";
        card.addEventListener("click", () => openProjectModal(item));
        
        const simBudget = item.budget * multiplier;
        const targets = `${item.cameras > 0 ? item.cameras + ' กล้อง' : ''} ${item.poles > 0 ? item.poles + ' เสา' : ''}`.trim() || "-";
        
        card.innerHTML = `
            <div class="pm-card-header">
                <span class="pm-card-year">ปี พ.ศ. ${item.year}</span>
                <span class="pm-card-procure">${item.procure}</span>
            </div>
            <h4 class="pm-card-name">${item.name}</h4>
            <div class="pm-card-meta">
                <div>
                    <span class="pm-meta-label">ประเภทงาน:</span>
                    <span class="pm-meta-val">${item.jobtype}</span>
                </div>
                <div style="margin-top: 4px; display: flex; justify-content: space-between;">
                    <div>
                        <span class="pm-meta-label">เป้าหมาย:</span>
                        <span class="pm-meta-val">${targets}</span>
                    </div>
                    <div>
                        <span class="pm-meta-label">งบประมาณ:</span>
                        <span class="pm-meta-budget">${simBudget.toLocaleString()} บาท</span>
                    </div>
                </div>
            </div>
            <div class="pm-card-footer">
                <span>แตะเพื่อดูรายละเอียดและพิกัดแผนที่</span>
                <i data-lucide="chevron-right" size="14"></i>
            </div>
        `;
        mobileList.appendChild(card);
    });
    
    // Re-initialize newly drawn lucide icons in cards
    lucide.createIcons();
    
    // Update pagination labels and buttons state
    updatePaginationUI(totalItems, totalPages);
}

function updatePaginationUI(totalItems, totalPages) {
    // Label count
    const label = document.getElementById("table-count-label");
    const multiplier = getBudgetMultiplier();
    
    const startNum = totalItems > 0 ? (state.table.currentPage - 1) * state.table.pageSize + 1 : 0;
    const endNum = Math.min(startNum + state.table.pageSize - 1, totalItems);
    
    label.innerHTML = `แสดง <b>${startNum}-${endNum}</b> จาก <b>${totalItems}</b> รายการโครงการ`;
    if (multiplier < 1.0) {
        label.innerHTML += ` <span style="color:var(--accent-green);font-weight:600;">(จำลองลดงบแล้ว)</span>`;
    }
    
    // Page numbering
    document.getElementById("page-current").textContent = state.table.currentPage;
    document.getElementById("page-total").textContent = totalPages;
    
    // Prev/Next buttons state
    document.getElementById("btn-page-prev").disabled = (state.table.currentPage === 1);
    document.getElementById("btn-page-next").disabled = (state.table.currentPage === totalPages);
    
    // Generate page numbers block
    const pageNumbersDiv = document.getElementById("page-numbers");
    pageNumbersDiv.innerHTML = "";
    
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.className = `btn-page ${i === state.table.currentPage ? 'active-page' : ''}`;
        btn.textContent = i;
        btn.onclick = (e) => {
            e.stopPropagation();
            state.table.currentPage = i;
            renderProjectsTable();
        };
        pageNumbersDiv.appendChild(btn);
    }
}

// Table Sorting Handlers
window.sortTable = function(columnKey) {
    // Map header column clicks to schema properties
    const keyMap = {
        'year': 'year',
        'id': 'order',
        'name': 'name',
        'jobtype': 'jobtype',
        'cameras': 'cameras',
        'poles': 'poles',
        'budget': 'budget',
        'procure': 'procure'
    };
    
    const field = keyMap[columnKey];
    if (!field) return;
    
    // Toggle sort order or set new sorting field
    if (state.table.sortBy === field) {
        state.table.sortOrder = state.table.sortOrder === "asc" ? "desc" : "asc";
    } else {
        state.table.sortBy = field;
        state.table.sortOrder = "asc";
    }
    
    // Update headers style in DOM
    const ths = document.querySelectorAll("#projects-data-table th");
    ths.forEach(th => {
        th.classList.remove("sorted-asc", "sorted-desc");
    });
    
    // Find the clicked header and add class
    const clickedHeader = Array.from(ths).find(th => th.outerHTML.includes(columnKey));
    if (clickedHeader) {
        clickedHeader.classList.add(state.table.sortOrder === "asc" ? "sorted-asc" : "sorted-desc");
    }
    
    renderProjectsTable();
};

window.changePage = function(dir) {
    state.table.currentPage += dir;
    renderProjectsTable();
};

// ==========================================
// Interactive Drill-Down Project Modal
// ==========================================
window.openProjectModal = function(project) {
    // Populate simple detail items
    const multiplier = getBudgetMultiplier();
    const simBudget = project.budget * multiplier;
    
    document.getElementById("modal-project-year").textContent = `โครงการปี พ.ศ. ${project.year}`;
    document.getElementById("modal-project-name").textContent = project.name;
    document.getElementById("modal-project-budget").textContent = `${simBudget.toLocaleString()} บาท`;
    document.getElementById("modal-project-jobtype").textContent = project.jobtype;
    
    const targetsText = `${project.cameras > 0 ? project.cameras + ' กล้อง' : ''} ${project.poles > 0 ? project.poles + ' เสา' : ''}`;
    document.getElementById("modal-project-targets").textContent = targetsText.trim() !== "" ? targetsText : "-";
    document.getElementById("modal-project-procure").textContent = project.procure;
    
    // Inject notes and complete description
    let finalDesc = project.desc;
    if (project.note) {
        finalDesc += `<br><br><strong style="color:var(--primary-light);">ข้อมูลเพิ่มเติม:</strong> ${project.note}`;
    }
    document.getElementById("modal-project-desc").innerHTML = finalDesc;
    
    // Set Map information
    document.getElementById("modal-map-pin-label").textContent = project.location;
    document.getElementById("modal-map-coords").textContent = project.coords;
    
    // Technical Logs timeline rendering
    const logsContainer = document.getElementById("modal-tech-logs");
    logsContainer.innerHTML = "";
    
    project.logs.forEach((log, idx) => {
        const logItem = document.createElement("div");
        logItem.className = "log-item";
        
        // Define dot status class (make first log stand out if still running)
        const dotStatus = (project.status === "อยู่ระหว่างดำเนินการ" && idx === 0) ? "log-pending" : "log-success";
        
        logItem.innerHTML = `
            <div class="log-dot ${dotStatus}"></div>
            <div class="log-content">
                <span class="log-time">${log.time}</span>
                <span class="log-text">${log.text}</span>
                <span class="log-tech">${log.tech}</span>
            </div>
        `;
        logsContainer.appendChild(logItem);
    });
    
    // Set Unsplash mockup photos matching the category for realism
    let imgB = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80";
    let imgA = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80";
    
    if (project.jobtype === "ติดแถบสีสายสัญญาณ") {
        imgB = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80";
        imgA = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80";
    } else if (project.jobtype.includes("สายสัญญาณ")) {
        imgB = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&q=80";
        imgA = "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&w=300&q=80";
    }
    
    document.getElementById("modal-img-before").src = imgB;
    document.getElementById("modal-img-after").src = imgA;
    
    // Toggle Modal visibility with animation
    toggleModal(true);
};

window.closeProjectModal = function(e) {
    // Only close if clicking the actual backdrop
    if (e.target === document.getElementById("project-detail-modal")) {
        toggleModal(false);
    }
};

function toggleModal(show) {
    const modal = document.getElementById("project-detail-modal");
    if (show) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Disable background scrolling
    } else {
        modal.classList.remove("active");
        document.body.style.overflow = ""; // Re-enable background scrolling
    }
}
window.toggleModal = toggleModal;

// ==========================================
// 3-Stage Guidelines Accordion Navigation (Mobile Viewports)
// ==========================================
window.switchGuidelineTab = function(tabId) {
    // Update local state
    state.guidelines.activeTab = tabId;
    
    // Update Tab Buttons UI
    const tabBtns = {
        "short": document.getElementById("tab-btn-short"),
        "mid": document.getElementById("tab-btn-mid"),
        "long": document.getElementById("tab-btn-long")
    };
    
    Object.entries(tabBtns).forEach(([id, btn]) => {
        if (!btn) return;
        if (id === tabId) {
            btn.classList.add("active-tab");
        } else {
            btn.classList.remove("active-tab");
        }
    });
    
    // Update Guideline Card Display
    const steps = {
        "short": document.getElementById("guide-step-short"),
        "mid": document.getElementById("guide-step-mid"),
        "long": document.getElementById("guide-step-long")
    };
    
    Object.entries(steps).forEach(([id, element]) => {
        if (!element) return;
        if (id === tabId) {
            element.classList.add("active-mobile-step");
        } else {
            element.classList.remove("active-mobile-step");
        }
    });
};

// ==========================================
// Cabling Cost Driver Dashboard Controller & Switcher
// ==========================================
// Cabling Cost Driver Dashboard Controller & Switcher
// ==========================================
window.switchDashboardTab = function(tabId) {
    const overallView = document.getElementById("overall-dashboard-view");
    const cablingView = document.getElementById("cabling-dashboard-view");
    const overallTabBtn = document.getElementById("tab-btn-overall");
    const cablingTabBtn = document.getElementById("tab-btn-cabling");
    
    if (tabId === "cabling") {
        overallView.classList.add("hidden");
        overallView.classList.remove("fade-in");
        
        cablingView.classList.remove("hidden");
        cablingView.classList.add("fade-in");
        
        overallTabBtn.classList.remove("active");
        cablingTabBtn.classList.add("active");
        
        // Render dynamic KPIs
        renderCablingKPIs();
        
        // Load cost table
        renderCablingTable();
        
        // Initialize cabling charts if not already done
        if (!state.charts.cabling) {
            // Use setTimeout to ensure container is fully visible for ApexCharts sizes
            setTimeout(() => {
                initCablingCharts();
            }, 50);
        } else {
            updateCablingCharts();
        }
    } else {
        overallView.classList.remove("hidden");
        overallView.classList.add("fade-in");
        
        cablingView.classList.add("hidden");
        cablingView.classList.remove("fade-in");
        
        overallTabBtn.classList.add("active");
        cablingTabBtn.classList.remove("active");
        
        updateDashboard(); // Sync main dashboard stats
    }
    
    // Reinitialize newly drawn lucide icons in views
    lucide.createIcons();
};

window.switchCablingChartTab = function(tabName) {
    const budgetGroup = document.getElementById("cabling-charts-group-budget");
    const riskGroup = document.getElementById("cabling-charts-group-risk");
    const budgetBtn = document.getElementById("subtab-budget");
    const riskBtn = document.getElementById("subtab-risk");
    
    if (tabName === 'budget') {
        budgetGroup.classList.remove("hidden");
        riskGroup.classList.add("hidden");
        budgetBtn.classList.add("active");
        riskBtn.classList.remove("active");
    } else {
        budgetGroup.classList.add("hidden");
        riskGroup.classList.remove("hidden");
        budgetBtn.classList.remove("active");
        riskBtn.classList.add("active");
    }
    
    // Trigger resize event so hidden ApexCharts render correctly when shown
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 50);
};

function renderCablingKPIs() {
    const reduction = state.filters.cablingScenario; // 0, 10, 20, 30
    const multiplier = (100 - reduction) / 100;
    
    const totalBudget = 3477000;
    const simBudget = totalBudget * multiplier;
    
    const budgetEl = document.getElementById("cab-kpi-budget");
    const avgEl = document.getElementById("cab-kpi-avg");
    
    // 1. Total Cabling Budget (Millions)
    budgetEl.textContent = (simBudget / 1000000).toFixed(3);
    
    // 2. Savings indicator
    const savings = totalBudget - simBudget;
    document.getElementById("cab-sim-savings").textContent = `ประหยัดได้: ${savings.toLocaleString()} บาท`;
    
    const savingsTextDom = document.getElementById("cab-sim-savings");
    const budgetCard = document.getElementById("cabling-budget-card");
    const budgetBadge = document.getElementById("cabling-budget-badge");

    if (reduction > 0) {
        savingsTextDom.style.color = "var(--accent-green-text)";
        if (budgetCard) {
            budgetCard.classList.remove("cabling-card-highlight", "pulse-warning");
            budgetCard.classList.add("cabling-card-savings");
        }
        if (budgetBadge) {
            budgetBadge.classList.add("badge-savings");
            budgetBadge.innerHTML = `<i data-lucide="check-circle" size="10"></i><span>ลดงบประหยัดสำเร็จ</span>`;
        }
    } else {
        savingsTextDom.style.color = "var(--text-secondary)";
        if (budgetCard) {
            budgetCard.classList.remove("cabling-card-savings");
            budgetCard.classList.add("cabling-card-highlight", "pulse-warning");
        }
        if (budgetBadge) {
            budgetBadge.classList.remove("badge-savings");
            budgetBadge.innerHTML = `<i data-lucide="alert-triangle" size="10"></i><span>Cost Driver หลัก</span>`;
        }
    }
    
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
    
    // 3. Average cost per camera
    const avgCost = Math.round(simBudget / 275);
    avgEl.textContent = avgCost.toLocaleString();
    
    // Trigger CSS pulse values animation
    budgetEl.classList.remove("pulse-value");
    avgEl.classList.remove("pulse-value");
    void budgetEl.offsetWidth; // Force element reflow
    void avgEl.offsetWidth;
    budgetEl.classList.add("pulse-value");
    avgEl.classList.add("pulse-value");
}

function renderCablingTable() {
    const tbody = document.getElementById("cabling-table-body");
    if (!tbody) return;
    
    const reduction = state.filters.cablingScenario;
    const multiplier = (100 - reduction) / 100;
    
    // Filter cabling-specific projects
    const cablingProjects = PROJECT_DATA.filter(p => p.jobtype === "งานสายสัญญาณ/โครงข่าย และระบบไฟฟ้า");
    
    tbody.innerHTML = "";
    
    const projectAnalysis = {
        6: {
            rootCause: "สายใยแก้วนำแสงขาดจากกิ่งไม้ร่วงหล่นกระแทกและแนวสายตกท้องช้างบนเสาไฟหลัก",
            risk: "สัญญาณล่มทั้งโหนด ระบบรับส่งข้อมูลภาพดับเป็นแนวกว้าง เสี่ยงภัยจราจร",
            proposal: "สไปรซ์แนวสายใหม่ จัดระเบียบท่อร้อยสาย PE ในส่วนสัญจรหนาแน่น",
            urgency: "สูง"
        },
        8: {
            rootCause: "ระบบจ่ายไฟฟ้าขัดข้อง เบรกเกอร์ตู้คอนโทรลชำรุดเนื่องจากแรงดันไฟฟ้ากระชากและฟ้าผ่า",
            risk: "อุปกรณ์แปลงสัญญาณ (Media Converter) และสวิตช์เครือข่ายพังถาวร เสียเวลาจัดหาอะไหล่",
            proposal: "ติดตั้งตู้พักไฟฟ้ามาตรฐาน ต่อสายดินตามระบบ พร้อมเสริม Surge Protector และ UPS ปลายทาง",
            urgency: "สูงสุด"
        },
        9: {
            rootCause: "สายใยแก้วทางกายภาพหมดอายุการใช้งาน เสื่อมสภาพตามเวลา และพาดทับพัวพันจนถูกรื้อถอนผิดพลาด",
            risk: "เครือข่ายกล้องจราจรและหน่วยงานราชการสำคัญล่มเป็นวงกว้าง กระทบการทำงานศูนย์ควบคุมหลัก",
            proposal: "จัดหาผู้รับจ้างรื้อถอนสายไม่ได้ใช้งาน จัดระเบียบตามแผนร่วม กสทช. และบันทึกพิกัดด้วย GIS Asset Map",
            urgency: "สูงสุด"
        }
    };
    
    cablingProjects.forEach(project => {
        const tr = document.createElement("tr");
        
        const simBudget = project.budget * multiplier;
        const avgCost = Math.round(simBudget / project.cameras);
        const analysis = projectAnalysis[project.id] || {
            rootCause: "ความเสื่อมโทรมตามอายุใช้งานทั่วไป",
            risk: "ระบบสัญญาณดับเป็นบางจุด",
            proposal: "ตรวจเช็ค PM ปรับสายหย่อนรายไตรมาส",
            urgency: "ปกติ"
        };
        
        let urgencyBadge = "badge-procure";
        if (analysis.urgency === "สูงสุด") urgencyBadge += " specific";
        else if (analysis.urgency === "สูง") urgencyBadge += " select";
        else urgencyBadge += " e-bid";
        
        tr.innerHTML = `
            <td data-label="ปีงบประมาณ" class="font-outfit" style="font-weight: 500; text-align:center;">${project.year}</td>
            <td data-label="ชื่อโครงการ" style="font-weight: 600; color: var(--primary); line-height: 1.3;">${project.name}</td>
            <td data-label="พื้นที่ดำเนินการ" style="color:var(--text-secondary); font-size:0.76rem; font-weight:500;">${project.location}</td>
            <td data-label="จำนวนกล้อง" class="font-outfit" style="text-align:right; font-weight:600;">${project.cameras}</td>
            <td data-label="งบซ่อมสายสัญญาณ" class="font-outfit" style="text-align:right; font-weight:700; color:var(--primary-light);">${simBudget.toLocaleString()}</td>
            <td data-label="งบเฉลี่ยต่อกล้อง" class="font-outfit" style="text-align:right; font-weight:600;">${avgCost.toLocaleString()}</td>
            <td data-label="สาเหตุหลักของปัญหา" class="table-truncate" data-tooltip="${analysis.rootCause}" style="font-size:0.75rem; color:var(--text-secondary); line-height:1.4;">${analysis.rootCause}</td>
            <td data-label="ความเสี่ยงหากละเลย" class="table-truncate" data-tooltip="${analysis.risk}" style="font-size:0.75rem; color:#991b1b; font-weight:500; line-height:1.4;">${analysis.risk}</td>
            <td data-label="ข้อเสนอแนวทางแก้ไข" class="table-truncate" data-tooltip="${analysis.proposal}" style="font-size:0.75rem; color:#15803d; font-weight:500; line-height:1.4;">${analysis.proposal}</td>
            <td data-label="ระดับความเร่งด่วน" style="text-align:center;"><span class="${urgencyBadge}" style="font-size:0.7rem; padding:2px 8px;">${analysis.urgency}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

window.simulateCablingReduction = function(pct) {
    state.filters.cablingScenario = pct;
    
    // Sync scenario button active styles
    const pcts = [0, 10, 20, 30];
    pcts.forEach(p => {
        const btn = document.getElementById(`cab-sim-${p}`);
        if (btn) {
            if (p === pct) btn.classList.add("active");
            else btn.classList.remove("active");
        }
    });
    
    // Update Cabling dashboard metrics
    renderCablingKPIs();
    renderCablingTable();
    updateCablingCharts();
    
    // Update simulation summary insight
    const insightTextDom = document.getElementById("cab-sim-insight-text");
    const totalBudget = 3477000;
    const savedSum = totalBudget * (pct / 100);
    
    if (pct > 0) {
        insightTextDom.innerHTML = `<b>แผนแบบจำลองงบซ่อมสายสัญญาณ (ลด ${pct}%):</b> สามารถประหยัดงบซ่อมแซมและปรับจัดระเบียบสายได้ถึง <span style="color:var(--accent-green);font-weight:700;">${savedSum.toLocaleString()} บาท</span> เพื่อนำไปตั้งกองทุนปรับปรุงสายสัญญาณหลักระยะยาวโดยที่ตัวเลขซ่อมกล้องยังคงครบถ้วน!`;
    } else {
        insightTextDom.innerHTML = `<b>สถานะปัจจุบัน:</b> ดำเนินการซ่อมสายสัญญาณตามรอบความเสียหายจริง หากเริ่มทำการ PM หรือวางระบบป้องกันถาวรจะส่งผลในการประหยัดงบประมาณสะสมได้ทันที`;
    }
};

function initCablingCharts() {
    const commonFont = 'Sarabun, Outfit, sans-serif';
    
    // 1. Bar Chart: Yearly comparison
    const barOptions = {
        series: [
            {
                name: 'งบประมาณดั้งเดิม',
                data: [0.000, 0.964, 2.513]
            },
            {
                name: 'งบประมาณจำลอง',
                data: [0.000, 0.964, 2.513]
            }
        ],
        chart: { type: 'bar', height: 210, toolbar: { show: false }, fontFamily: commonFont },
        colors: ['#cbd5e1', '#0ea5e9'],
        plotOptions: { bar: { columnWidth: '45%', borderRadius: 4 } },
        dataLabels: { enabled: false },
        xaxis: { categories: ['2567', '2568', '2569'] },
        yaxis: { labels: { formatter: v => v.toFixed(3) + " ล้านบาท" } }
    };
    
    // 2. Donut Chart: Cabling vs CCTV System vs Others
    const donutOptions = {
        series: [61.3, 30.6, 5.2, 2.9],
        chart: { type: 'donut', height: 210, fontFamily: commonFont },
        labels: ['สายสัญญาณ & ระบบไฟฟ้า', 'ซ่อมระบบกล้อง', 'ติดแถบสีสายสัญญาณ', 'ย้ายสายส่งสัญญาณ'],
        colors: ['#0c4a7e', '#0b6887', '#2b4570', '#d97706'],
        legend: { position: 'bottom', labels: { colors: '#334155' } },
        dataLabels: { formatter: val => val.toFixed(1) + "%" }
    };
    
    // 3. Line Chart: 3-Year Trend (Cumulative Savings)
    const lineOptions = {
        series: [{
            name: 'ผลประหยัดงบสะสม (ล้านบาท)',
            data: [0.000, 0.000, 0.000]
        }],
        chart: { type: 'line', height: 210, toolbar: { show: false }, fontFamily: commonFont },
        stroke: { width: 4, curve: 'smooth' },
        colors: ['#047857'],
        markers: { size: 6 },
        xaxis: { categories: ['2567', '2568', '2569'] },
        yaxis: { labels: { formatter: v => v.toFixed(3) + " ล้านบาท" } }
    };
    
    // 4. Scatter Plot: Cabling budget vs cameras
    const scatterOptions = {
        series: [{
            name: 'โครงการสายสัญญาณ',
            data: [
                [20, 24.15],
                [25, 19.24],
                [230, 10.93]
            ]
        }],
        chart: { type: 'scatter', height: 210, toolbar: { show: false }, fontFamily: commonFont },
        xaxis: {
            title: { text: 'จำนวนกล้องที่ซ่อม (ตัว)', style: { fontWeight: 700 } },
            tickAmount: 5,
            labels: { formatter: v => Math.round(v) + " กล้อง" }
        },
        yaxis: {
            title: { text: 'งบเฉลี่ยต่อกล้อง (พันบาท)', style: { fontWeight: 700 } },
            labels: { formatter: v => v.toFixed(1) + " พันบาท" }
        },
        colors: ['#0ea5e9'],
        markers: { size: 10 },
        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                const names = [
                    "ซ่อมสายสัญญาณและไฟฟ้า ระยะ 1,2,3,4,6,7 (ปี 2568)",
                    "ซ่อมสายสัญญาณและไฟฟ้า ระยะ 3,4,5,6,8 (ปี 2568)",
                    "ซ่อมสายสัญญาณและไฟฟ้า ทั่วเขตเทศบาล (ปี 2569)"
                ];
                const budgetStr = ["4.83 แสนบาท", "4.81 แสนบาท", "2.51 ล้านบาท"];
                const name = names[dataPointIndex];
                const cost = w.config.series[seriesIndex].data[dataPointIndex][1];
                const cams = w.config.series[seriesIndex].data[dataPointIndex][0];
                return `<div class="chart-tooltip" style="padding:10px; background:#072854; color:#fff; border-radius:6px; font-size:0.75rem;">
                    <strong>${name}</strong><br>
                    งบประมาณรวม: ${budgetStr[dataPointIndex]}<br>
                    จำนวนกล้อง: ${cams} ตัว<br>
                    เฉลี่ยต่อกล้อง: ${(cost * 1000).toLocaleString()} บาท/ตัว
                </div>`;
            }
        }
    };
    
    // 5. Heatmap: repeated network problems
    const heatmapOptions = {
        series: [
            { name: 'แยกเดชาติวงศ์', data: [{ x: 'ไฟดับ/ฟ้าผ่า', y: 92 }, { x: 'สายสัญญาณขาด', y: 45 }, { x: 'เบรกเกอร์เสีย', y: 65 }] },
            { name: 'อุทยานสวรรค์', data: [{ x: 'ไฟดับ/ฟ้าผ่า', y: 35 }, { x: 'สายสัญญาณขาด', y: 78 }, { x: 'เบรกเกอร์เสีย', y: 40 }] },
            { name: 'สนามกีฬากลาง', data: [{ x: 'ไฟดับ/ฟ้าผ่า', y: 25 }, { x: 'สายสัญญาณขาด', y: 55 }, { x: 'เบรกเกอร์เสีย', y: 88 }] },
            { name: 'ชุมชนชอนตะวัน', data: [{ x: 'ไฟดับ/ฟ้าผ่า', y: 40 }, { x: 'สายสัญญาณขาด', y: 68 }, { x: 'เบรกเกอร์เสีย', y: 50 }] },
            { name: 'ตลาดบ่อนไก่', data: [{ x: 'ไฟดับ/ฟ้าผ่า', y: 50 }, { x: 'สายสัญญาณขาด', y: 72 }, { x: 'เบรกเกอร์เสีย', y: 45 }] }
        ],
        chart: { type: 'heatmap', height: 210, toolbar: { show: false }, fontFamily: commonFont },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                colorScale: {
                    ranges: [
                        { from: 0, to: 50, color: '#0ea5e9', name: 'เสี่ยงต่ำ' },
                        { from: 51, to: 75, color: '#f59e0b', name: 'เสี่ยงปานกลาง' },
                        { from: 76, to: 100, color: '#ef4444', name: 'เสี่ยงสูงวิกฤต' }
                    ]
                }
            }
        },
        dataLabels: { enabled: true, style: { colors: ['#fff'] } }
    };
    
    // 6. Pareto Chart: Project Contribution analysis
    const paretoOptions = {
        series: [
            {
                name: 'งบประมาณโครงการ (ล้านบาท)',
                type: 'column',
                data: [2.513, 0.483, 0.481]
            },
            {
                name: 'เปอร์เซ็นต์สะสม (%)',
                type: 'line',
                data: [72.3, 86.2, 100.0]
            }
        ],
        chart: { type: 'line', height: 220, toolbar: { show: false }, fontFamily: commonFont },
        colors: ['#0c4a7e', '#ef4444'],
        stroke: { width: [0, 4] },
        xaxis: { categories: ['จ้างซ่อมสายไฟฟ้าฯ ทั่วเขตเทศบาล (2569)', 'จ้างซ่อมสายสัญญาณฯ ระยะ 1,2,3,4,6,7 (2568)', 'จ้างซ่อมสายสัญญาณฯ ระยะ 3,4,5,6,8 (2568)'] },
        yaxis: [
            { title: { text: 'งบประมาณโครงการ (ล้านบาท)', style: { color: '#0c4a7e' } }, labels: { formatter: v => v.toFixed(2) } },
            { opposite: true, title: { text: 'เปอร์เซ็นต์สะสม (%)', style: { color: '#ef4444' } }, min: 0, max: 100, labels: { formatter: v => Math.round(v) + "%" } }
        ]
    };
    
    state.charts.cabling = {
        yearlyBar: new ApexCharts(document.querySelector("#cab-chart-yearly-bar"), barOptions),
        donutShare: new ApexCharts(document.querySelector("#cab-chart-donut-share"), donutOptions),
        trendLine: new ApexCharts(document.querySelector("#cab-chart-trend-line"), lineOptions),
        scatterPlot: new ApexCharts(document.querySelector("#cab-chart-scatter-plot"), scatterOptions),
        heatmapRisk: new ApexCharts(document.querySelector("#cab-chart-heatmap-risk"), heatmapOptions),
        pareto: new ApexCharts(document.querySelector("#cab-chart-pareto-analysis"), paretoOptions)
    };
    
    // Render all cabling charts
    Object.values(state.charts.cabling).forEach(c => c.render());
}

function updateCablingCharts() {
    if (!state.charts.cabling) return;
    
    const reduction = state.filters.cablingScenario;
    const multiplier = (100 - reduction) / 100;
    
    // Calculate scenario budgets
    const b2568 = (0.483 + 0.481) * multiplier;
    const b2569 = 2.513 * multiplier;
    
    // 1. Update Bar Chart
    state.charts.cabling.yearlyBar.updateSeries([
        {
            name: 'งบประมาณดั้งเดิม',
            data: [0.000, 0.964, 2.513]
        },
        {
            name: 'งบประมาณจำลอง',
            data: [0.000, b2568, b2569]
        }
    ]);
    
    // 2. Update Line Chart
    const savings2568 = 0.964 * (reduction / 100);
    const savings2569 = 3.477 * (reduction / 100);
    state.charts.cabling.trendLine.updateSeries([{
        name: 'ผลประหยัดงบสะสม (ล้านบาท)',
        data: [0.000, savings2568, savings2569]
    }]);
    
    // 3. Update Scatter Plot
    const s6 = 24.15 * multiplier;
    const s8 = 19.24 * multiplier;
    const s9 = 10.93 * multiplier;
    state.charts.cabling.scatterPlot.updateSeries([{
        name: 'โครงการสายสัญญาณ',
        data: [
            [20, s6],
            [25, s8],
            [230, s9]
        ]
    }]);
    
    // 4. Update Pareto Chart
    state.charts.cabling.pareto.updateSeries([
        {
            name: 'งบประมาณโครงการ (ล้านบาท)',
            type: 'column',
            data: [b2569, 0.483 * multiplier, 0.481 * multiplier]
        },
        {
            name: 'เปอร์เซ็นต์สะสม (%)',
            type: 'line',
            data: [72.3, 86.2, 100.0]
        }
    ]);
}

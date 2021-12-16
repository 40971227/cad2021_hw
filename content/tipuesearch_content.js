var tipuesearch = {"pages": [{'title': 'About', 'text': '本學期的電腦輔助設計實習, 要求每一位學員根據本 HW template 的格式建立個人的作業倉儲與網頁. \n \n 40971227 \n 網站倉儲:  https://github.com/40971227/cad2021_hw \n 網站連結:  https://40971227.github.io/cad2021_hw/ \n 其他與作者或作業相關資料說明或介紹 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Task', 'text': '', 'tags': '', 'url': 'Task.html'}, {'title': 'hwpages', 'text': 'cad2b w2 github account \n 倉儲\xa0 \xa0 \xa0 \xa0 \xa0 網站 40723126 40723126 40723135 40723135 40723217  40723217 40732331  40732331 40823114  40823114 40823115  40823115 40823117  pyc40823117 40823119  40823117 40823122  40823122 40823127  40823127 40823146  40823146 40823148  40823148 40823215  40823215 40871106  40871106 40923201  40923201 40923203  youshin40923203 40923204  40923204 40923205  40923205 40923206  40923206-1 40923207  40923207 40923208  nfu40923208 40923209  nfu40923209 40923210  40923210 40923211  a40923211 40923212  40923212 40923213  40923213 40923214  40923214 40923216  40923216 40923217  40923217 40923218  40923218 40923219  nfu40923219 40923220  40923220 40923221  40923221 40923223  40923223 40923224  s40923224 40923225  40923225 40923226  40923226 40923227  40923227 40923228  40923228 40923229  40923229 40923230  40923230 40923231  40923231 40923232 40923232 40923233  40923233 40923234  40923234 40923235  40923235 40923236  40923236 40923237  40923237 40923238  40923238 40923239  40923239 40923240  40923240 40923241  40923241 40923242  40923242 40923243  40923243 40923244  40923244 40923245  40923245-1 40923246  40923246 40923247  40923247 40923248  40923248 40923249  40923249-1 40923250  40923250 40923251  40923251 40923252  40923252 40923253  40923253 40971220  40971220 40971227  40971227 \n', 'tags': '', 'url': 'hwpages.html'}, {'title': 'HW1', 'text': 'HW1 佔學期成績 25% \n HW1 必須在 2021.11.10 22:00 之前完成. \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.11.10 22:00 關閉. \n 作業一: meArm Robot 零件繪圖與機電運動模擬場景製作 \n Step1 : 下載  meARM.7z  這個包含尚未完成組立的 meArm Robot 場景與雷射切割零件組立手冊. \n meArm_75-0040_v1.pdf  則是另外一本組立參考手冊. \n Step2 : 從課程網頁中的  Compile CoppeliaSim 頁面 , 下載  coppeliaSim 4.1.0 官方版與 MSYS2 編譯版.7z  (檔案大小 412 MB, 解開壓縮後 1GB) 可攜套件. \n Step3 : 在 HW1 中, 要求每一位學員透過程式亂數分配 (兩班實際亂數分配結果以上課時點擊下列按鈕所得結果為準) 所使用的兩套參數式 CAD 套件, 從軟體發展緣起開始進行介紹,\xa0 經過教育版軟體套件檔案的取得, 下載安裝以及配置使用. 根據 Step1 中的零件尺寸, 逐一完成 meArm Robot 各零件繪製與組立. 並將零件 匯入  CoppeliaSim 進行組裝配置後, 以  UI 介面 中的 slider 控制 meArm Robot 各軸的旋轉作動. \n 2b CAD 套件分配結果:  https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件: \n 1. CAD 套件分配表: \n sw: Solidworks, inv: Inventor, nx: NX12, ons: Onshape, slvs: Solvespace \n 2a 套件亂數分配結果 \n 2b 套件亂數分配結果 \n 2. 在兩套 CAD 完成零件繪圖並轉入 CoppeliaSim 後, 為了建立 Dynamic Model 必須利用  shape edit modes  轉為  clean model , 並與實際轉入的 STL 格式零件外形結合應用後建立模擬場景 (scenes). \n 3. meARM Robot  動態模擬場景 的建構, 可參考  0 ,  1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 , 也可參考  Uarm Robot model  與相關 影片 . \n 4. CoppeliaSim design dynamic simulations  說明頁面 . \n 5.  網際 Lua  程式執行. \n 6.  meArm.slvs ,  meArm_in_solvespace.slvs \n 7. UI 介面程式參考: \n function closeEventHandler(h)\n    sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')\n    simUI.hide(h)\nend\n\nfunction joint1_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)\n    sim.setJointTargetPosition(joint1, newVal*deg)\nend\n\nfunction joint2_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta2 set to \'..newVal)\n    sim.setJointTargetPosition(joint2, newVal*deg)\nend\n\nfunction joint3_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta3 set to \'..newVal)\n    sim.setJointTargetPosition(joint3, newVal*deg)\nend\n\nfunction joint16_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta16 set to \'..newVal)\n    sim.setJointTargetPosition(joint16, newVal*deg)\n    sim.setJointTargetPosition(joint20, -newVal*deg)\nend\n\nfunction sysCall_init()\n    -- do some initialization here\n    joint1 = sim.getObjectHandle(\'motor1\')\n    joint2 = sim.getObjectHandle(\'motor2\')\n    joint3 = sim.getObjectHandle(\'motor3\')\n    joint16 = sim.getObjectHandle(\'motor16\')\n    joint20 = sim.getObjectHandle(\'motor20\')\n    i = 0\n    deg = math.pi/180\n    print(i)\n    xml = [[\n<ui closeable="true" on-close="closeEventHandler" resizable="true">\n    <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />\n    <tabs>\n        <tab title="Numeric">a\n            <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />\n            <label text="" id="3000" wordwrap="true" />\n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="360" on-change="joint1_rotate" />\n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="65" on-change="joint2_rotate" />\n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="185" on-change="joint3_rotate" />\n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="15" on-change="joint16_rotate" />\n        </tab>\n    </tabs>\n</ui>\n]]\n    ui=simUI.create(xml)\n    \nend \n \n (From:  2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf ) \n \n \n solvespace運動場景 \n onshape 運動場景 \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'W13', 'text': '', 'tags': '', 'url': 'W13.html'}, {'title': '匯入CoppeliaSim', 'text': '\n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': '匯入CoppeliaSim.html'}, {'title': '零件', 'text': '\n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': '零件.html'}, {'title': 'solvespace', 'text': '2013 年在Libre Graphics World上 發表了對開發人員的簡短評論和採訪 。這篇評論稱讚 SolveSpace 的可執行文件小、先進的約束求解器和輸出格式範圍。 同一篇評論指出了一些缺點，主要是它對 NURBS 布爾值的緩慢和有限的處理以及缺乏原生 Linux 支持。 但是，此後添加了本地 Linux 支持。 \n \n 以前同樣由 Westhues 開發的名為 SketchFlat 的軟件包已被 SolveSpace 取代。 \n \n', 'tags': '', 'url': 'solvespace.html'}, {'title': 'solvespace運動場景', 'text': '\n', 'tags': '', 'url': 'solvespace運動場景.html'}, {'title': 'solvespace下載方法', 'text': 'https://youtu.be/z1pvsTnX8Mw \n \n \n', 'tags': '', 'url': 'solvespace下載方法.html'}, {'title': 'solvespace操作方法', 'text': '快捷指令介紹 \n 幾何 \n S 直線 R 矩形 C 圓形 P 點 Shift+X 擠出 Shift+L 迴轉 \n 視角 \n W 正視 (指定或編輯面) F2 正視 (與螢幕最接近平行的工作面轉正) F3 等角 \n 約束指令 \n M 中心 D 標註(直線) N 標註(角度) Q 等長 H 水平 V 垂直 L 平行 O 重合 [ 垂直 \n \n', 'tags': '', 'url': 'solvespace操作方法.html'}, {'title': 'onshape', 'text': '● 2012年11月，SolidWorks的前任首席執行官喬恩·希施蒂克（Jon Hirschtick）和約翰·麥克利尼（John McEleney）領導了一個由六位聯合創始人組成的團隊，發起了Belmont Technology，該公司的佔位符名稱後來更改為Onshape。該公司的第一輪融資來自北橋風險投資公司（North Bridge Venture Partners）和聯邦資本（Commonwealth Capital）的900萬美元。 \n ●\xa0 在與52個國家/地區的1000多名CAD專業人員進行了生產前測試之後，2015年3月，Onshape發布了其Cloud CAD軟件的公開測試版。測試版中包括用於iPhone的Onshape。 \n ●\xa02015年8月，該公司發布了適用於Android應用的Onshape。 \n ●\xa02015年12月，Onshape發布了其完整的商業版本。[14] Onshape App Store與24個開發人員合作夥伴一起啟動。 \n ●\xa02016年4月，Onshape推出了其教育計劃，其中包括面向大學生和教育工作者的免費版本的Onshape Professional。 \n ●\xa02016年5月，Onshape發布了FeatureScript，這是一種新的開源（由MIT許可）的編程語言，用於創建和自定義CAD功能。 \n ●\xa02019年10月，Onshape同意被收購。 \n \n', 'tags': '', 'url': 'onshape.html'}, {'title': 'onshape運動場景', 'text': '\n', 'tags': '', 'url': 'onshape運動場景.html'}, {'title': 'onshape申請帳號', 'text': 'https://youtu.be/uK8jKE1oa8M \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'onshape申請帳號.html'}, {'title': 'onshape操作方法', 'text': 'https://youtu.be/Up3r2_SiuHI \n \n \n \n \n \n \n', 'tags': '', 'url': 'onshape操作方法.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於  2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至  Task1-1  中六個自由度的 Mirobot 機械手臂. \n mirobot_part1_to_part5.7z  為取自 \xa0 https://github.com/wlkata/Mirobot-STL  的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過  UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據  Task1-1  中的說明, 完成各項指定任務. \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於  2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將  https://github.com/mdecourse/meArm  中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用  Task2  中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf \n Robot Manipulator Control with Inverse Kinematics PD-Pseudoinverse Jacobian and Forward Kinematics Denavit Hartenber.pdf \n KINEMATIC ANALYSIS FOR ROBOT ARM.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 40% \n 2a 與 2b 必須在 2022.01.06 上課之前完成 Final Project \n Final Project 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n 彈性製造系統場景設計與製作 \n 請從  https://github.com/mdecourse/scenes  與  https://github.com/mdecourse/models  中選擇場景或模型, 配合  cad2021_textbook.pdf  (登入 @gm 帳號後下載) 教材中的內容, 自選製作與組立產品, 組合成一個 Flexible Manufacturing System 系統場景. \n 彈性製造系統內容說明 \n 範例: \n \n \n', 'tags': '', 'url': 'Final Project.html'}, {'title': 'run', 'text': ' 以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n \n', 'tags': '', 'url': 'run.html'}, {'title': 'W11', 'text': '', 'tags': '', 'url': 'W11.html'}, {'title': '下載零件', 'text': '零件1 /downloads/組合件1 - 1-1.STL \n 零件2 /downloads/組合件1 - 2-1.STL \n 零件3 /downloads/組合件1 - 3-1.STL \n 零件4 /downloads/組合件1 - 4-1.STL \n', 'tags': '', 'url': '下載零件.html'}, {'title': '繪圖過程wink', 'text': '\n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '繪圖過程wink.html'}, {'title': '模擬場景wink', 'text': '\n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '模擬場景wink.html'}]};
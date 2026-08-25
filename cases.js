window.GAME_DATA_CASES = [
  {
    "id": "case-001",
    "code": "CASE-001",
    "title": "心臟支架的隱形殺手",
    "star": 1,
    "student": {
      "patient": "魯先生，曾發生心肌梗塞並放置冠狀動脈支架，目前規律服用 Clopidogrel 預防再次發病。\n病人近期抱怨胸口灼熱、胃酸逆流，醫師診斷為胃食道逆流（GERD）。",
      "context": "",
      "rx": "Esomeprazole 40mg/Tab 1Tab QD",
      "evidence": "PPI 與 clopidogrel 的交互作用具臨床意義：clopidogrel 是前驅藥，主要經 CYP2C19 活化；而 omeprazole、esomeprazole 等會強力抑制此酵素，可能降低 clopidogrel 的抗血小板效果，增加心肌梗塞、缺血性中風等心血管事件風險。相關指引建議：對有腸胃道出血高風險、又在使用雙重抗血小板治療的病人可用 PPI 保護腸胃，但應避免強力抑制 CYP2C19 的 PPI（如 omeprazole）。pantoprazole 因對 CYP2C19 抑制極小、與 clopidogrel 無明顯臨床交互作用而為首選。近期統合分析與隨機試驗顯示整體影響可能不大，且 PPI 能降低腸胃道出血風險。",
      "refs": [
        {
          "title": "Proton Pump Inhibitor and Clopidogrel Interaction: Fact or Fiction?",
          "url": "https://www.ovid.com/jnls/ajg/abstract/10.1038/ajg.2009.638~proton-pump-inhibitor-and-clopidogrel-interaction-fact-or"
        }
      ],
      "drugInfo": {
        "drugs": [
          "Famotidine 20mg/2mL/Amp",
          "Pantoprazole 40mg/Vial",
          "Alginos oral susp.(複方) 210mL/Bot",
          "Dexlansoprazole 60mg/Cap",
          "Dibismuth Trioxide 120mg/Tab",
          "Esomeprazole(錠劑) 40mg/Tab",
          "Famotidine  20mg/Tab",
          "Lansoprazole 30mg/Tab(口溶錠)",
          "Misoprostol 200mcg/Tab",
          "Rabeprazole 20mg/Tab",
          "Sucralfate  500mg/Tab",
          "Topaal(Algitab) chewable Tab(複方)"
        ],
        "fields": [
          "商品名稱",
          "成分及含量",
          "藥品手冊適應症",
          "成人常用劑量說明",
          "貯藏方式",
          "用藥方法",
          "健保價格",
          "自費價"
        ]
      }
    },
    "interactions": [
      {
        "drugs": "CLOPIDOGREL HYDROGEN SULFATE — ESOMEPRAZOLE MAGNESIUM",
        "sev": "Major",
        "doc": "Excellent",
        "summary": "併用可能降低 clopidogrel 活性代謝物暴露量、削弱抗血小板作用。"
      },
      {
        "drugs": "CLOPIDOGREL HYDROGEN SULFATE — ESOMEPRAZOLE SODIUM",
        "sev": "Major",
        "doc": "Excellent",
        "summary": "併用可能降低 clopidogrel 活性代謝物暴露量、削弱抗血小板作用。"
      },
      {
        "drugs": "CLOPIDOGREL HYDROGEN SULFATE — RABEPRAZOLE SODIUM",
        "sev": "Moderate",
        "doc": "Excellent",
        "summary": "併用可能降低抗血小板作用。"
      }
    ],
    "interactionImage": "",
    "teacher": {
      "review": "實習生必須抓出 Esomeprazole 會強烈抑制 CYP2C19 酵素活性。",
      "risk": "Clopidogrel 需經 CYP2C19 代謝才有活性。併服 Esomeprazole 會導致 Clopidogrel 療效大幅降低，增加心血管血栓風險。",
      "planB": "（關鍵考點）不能只說「不能用 PPI」，而要精準提出：改用對 CYP2C19 幾乎無影響的 Pantoprazole（保衛康），或改用 H2-blocker（如 Famotidine）。",
      "chips": [
        "若藥師未發現而照發藥品，後續將引發心肌梗塞，扣除綠籌碼（健康度）5 枚。",
        "若成功提出 Pantoprazole 的精確替代方案，因藥價可能微幅變動，扣除紅籌碼（藥費）2 枚。"
      ]
    }
  },
  {
    "id": "case-1786345086314",
    "code": "CASE-003",
    "title": "葡萄柚危機",
    "star": 1,
    "student": {
      "patient": "陳小姐，55 歲。高膽固醇血症，目前規律服用降血脂藥物控制病情。\n回診領藥時，提到最近朋友送了一大箱葡萄柚，想要補充維他命C，詢問可不可以每天榨汁來喝。",
      "context": "",
      "rx": "Atorvastatin 20mg/Tab 1tab QD",
      "evidence": "",
      "refs": [
        {
          "title": "CYP3A4和CYP2D6影響的藥品",
          "url": "https://drive.google.com/file/d/1MJYYd9W4vlpx0cejat3BsDxFk9Wynb3d/view?usp=drive_link"
        }
      ],
      "drugInfo": {
        "drugs": [
          "AtorvaStatin 20mg/Tab",
          "Pitavastatin(友霖) calcium 四mg/Tab",
          "Pitavastatin(台田) 2mg/Tab",
          "Rosuvastatin 10mg/Tab"
        ],
        "fields": [
          "商品名稱",
          "藥品手冊適應症",
          "成人常用劑量說明",
          "貯藏方式",
          "用藥方法",
          "特別用藥指示",
          "健保價格",
          "自費價"
        ]
      }
    },
    "interactions": [
      {
        "drugs": "ATORVASTATIN CALCIUM",
        "sev": "Major",
        "doc": "Excellent",
        "summary": "Concurrent use of ATORVASTATIN and GRAPEFRUIT JUICE may result in increased atorvastatin exposure and an increased risk of myopathy and rhabdomyolysis."
      },
      {
        "drugs": "SIMVASTATIN",
        "sev": "Major",
        "doc": "Excellent",
        "summary": "Concurrent use of SIMVASTATIN and GRAPEFRUIT JUICE may result in increased bioavailability of simvastatin resulting in an increased risk of  myopathy and rhabdomyolysis."
      }
    ],
    "interactionImage": "",
    "teacher": {
      "review": "實習生必須抓出 Atorvastatin 在體內主要是經由腸道與肝臟的 CYP3A4 酵素代謝 。",
      "risk": "葡萄柚汁含有強烈抑制 CYP3A4 酵素的成分。若併服會抑制 Atorvastatin 的代謝，使藥物血中濃度大幅增加，極易引發肌肉毒性，嚴重甚至導致橫紋肌溶解症 (rhabdomyolysis) 或急性腎衰竭 。",
      "planB": "1. 基礎解法： 衛教病人服藥期間「絕對禁止」食用葡萄柚或葡萄柚汁。\n2. 進階解法： 若病人非常堅持想吃，建議醫師將降血脂藥物更改為幾乎不經由 CYP3A4 代謝的品項，例如 Rosuvastatin 或 Pravastatin。",
      "chips": [
        "-若藥師未發現而照發藥品且未衛教，病人一週後因全身肌肉劇痛掛急診，扣除綠籌碼（健康度）5 枚。",
        "-若藥師成功攔截並衛教病人禁食葡萄柚，不扣額外籌碼。",
        "-若藥師建議「更換不受影響的 Statins」，展現極高專業度，獎勵綠籌碼（健康度）1 枚（病人滿意度提升）。但因變更藥品，藥價可能微幅變動，扣除紅籌碼（藥費）1 枚。",
        "- 難點解析：國考必考的經典 CYP3A4 食物交互作用。重點在於測驗藥師「有沒有記得開口做衛教」。"
      ]
    }
  },
  {
    "id": "case-1786347811192",
    "code": "CASE-004",
    "title": "聰明藥危機",
    "star": 1,
    "student": {
      "patient": "[近期臨床現象：許多高中生/大學生在準備大考（學測、國考）時，會服用長效型 ADHD 藥物來集中注意力。]\n林同學，18 歲高三生。近期因注意力不集中被診斷為輕度 ADHD。\n下週即將面臨學測，林同學跟醫師抱怨專思達 (Concerta) 藥丸太大顆吞不下去，而且他希望晚上熬夜看書時藥效能發揮。\n醫師在門診很忙，便口頭安撫：「吞不下去就咬碎吃，晚上要看書就傍晚吃。」",
      "context": "",
      "rx": "MethylPhenidate ER 36mg/Tab 1Tab 咬碎/剝半 於傍晚 6 點服用。",
      "evidence": "",
      "refs": [
        {
          "title": "藥品仿單：Concerta (專思達) 中文仿單（特別標註 OROS 滲透壓技術與「必須整粒吞服」之警語）",
          "url": "https://drive.google.com/file/d/1WzRIiz3C7UhanxMnQiG-b45EdtSa82hm/view?usp=drive_link"
        }
      ],
      "drugInfo": {
        "drugs": [
          "MethylPheNidate LA持續 20mg/Cap",
          "Methylphenidate 10mg/Tab",
          "METHYLPHENIDATE ER 18mg/Tab",
          "Methylphenidate S.R. 22mg/Cap",
          "Methylphenidate S.R. 33mg/Cap",
          "MethylPhenidate ER 36mg/Tab"
        ],
        "fields": [
          "商品名稱",
          "成分及含量",
          "藥品手冊適應症",
          "成人常用劑量說明",
          "兒童常用劑量說明",
          "貯藏方式",
          "用藥方法",
          "特別用藥指示",
          "健保價格",
          "自費價"
        ]
      }
    },
    "interactions": [],
    "interactionImage": "",
    "teacher": {
      "review": "實習生必須敏銳識別出 Concerta 是採用高科技的 OROS（滲透壓控制釋放）專利技術。",
      "risk": "- 劑量傾瀉 (Dose Dumping)：OROS 劑型絕對不可咬碎、切半或磨粉。一旦破壞外殼，原本設計要在 12 小時內緩慢釋放的藥物，會在一瞬間全部進入血液，導致嚴重的藥物過量（極度焦慮、血壓狂飆），且下午藥效退去後會產生嚴重的「崩潰感 (Crash)」。\n- 嚴重失眠：傍晚服用長效興奮劑，會導致整夜無法入睡，隔天精神更差，完全本末倒置。",
      "planB": "1. 衛教防守：嚴格糾正服藥觀念，強調 Concerta 必須「整粒吞服」，且務必在「早上」服用。\n2. 劑型替代：若林同學「真的吞不下去」，建議醫師改開立短效的 Ritalin (利他能，可剝半)，或是新型的長效膠囊 Methydur (思有得，可打開膠囊將藥粒撒在布丁或蘋果泥上吞服，但同樣不可咬碎裡面的微粒)。",
      "chips": [
        "- 若藥師未進行劑型衛教，放任學生咬碎吃，導致學生考前因心悸與極度焦慮掛急診，扣除綠籌碼（健康度）5 枚。",
        "- 若藥師成功糾正服藥時間與方法，不扣籌碼。",
        "- 若藥師主動建議醫師將處方更改為「可打開撒在食物上」的 Methydur (思有得膠囊)，完美解決吞嚥困難的問題，獎勵綠籌碼 1 枚（展現對藥物劑型的深度掌握！）。",
        "- 難點解析：劑型學 (OROS 滲透壓) 的基礎應用。學生必須立刻察覺「不可咬碎」，主要考驗衛教觀念的糾正"
      ]
    }
  },
  {
    "id": "case-1787195179741",
    "code": "CASE-005",
    "title": "綜合感冒藥的疊加陷阱",
    "star": 1,
    "student": {
      "patient": "李同學，大學生。因發燒、喉嚨痛前來看診。醫師開了常規的退燒止痛藥。\n李同學在領藥時提問：「藥師，我昨天晚上有去藥局買『伏冒熱飲』泡來喝，現在還可以繼續喝嗎？」",
      "context": "",
      "rx": "Acetaminophen 500mg/tab 1tab QID",
      "evidence": "",
      "refs": [
        {
          "title": "普拿疼伏冒熱飲散劑加強配方-衛署藥製字第050881號-仿單",
          "url": "https://drive.google.com/file/d/1TcTnXExsxWQC3Rki-BnqIBjtA1MGxI78/view?usp=sharing"
        }
      ],
      "drugInfo": {
        "drugs": [
          "Acetaminophen Syrup 24mg/mL 60mL/Bot",
          "Acetaminophen  500mg/Tab",
          "Utraphen 37.5/325 mg/Tab(複方)"
        ],
        "fields": [
          "成人常用劑量說明",
          "貯藏方式",
          "用藥方法",
          "特別用藥指示"
        ]
      }
    },
    "interactions": [],
    "interactionImage": "",
    "teacher": {
      "review": "實習生必須立刻計算 Acetaminophen 的「每日最高安全劑量（4000mg）」",
      "risk": "醫師開的處方已經是一天 2000mg。市售的綜合感冒藥或熱飲，幾乎都含有高劑量的 Acetaminophen。如果李同學把診所的藥和自己買的成藥一起吃，極容易超過每日 4000mg 的上限，引發猛爆性肝炎（肝毒性）。",
      "planB": "強烈阻止病人：「診所的藥已經有退燒成分了，你買的熱飲絕對不能再一起喝！」",
      "chips": [
        "- 若藥師回答「可以啊，多喝水就好」，導致學生肝指數飆高，扣除綠籌碼（健康度）3 枚。",
        "- 若藥師立刻制止重複用藥，不扣籌碼。"
      ]
    }
  },
  {
    "id": "case-1787196691600",
    "code": "CASE-006",
    "title": "鐵胃的代價",
    "star": 2,
    "student": {
      "patient": "先生，20 歲男性。泌尿道感染，同時向醫師抱怨近期壓力大常胃痛。",
      "context": "",
      "rx": "Ciprofloxacin 500mg/tab 1tab BID \nTopaal(Algitab) chewable Tab(複方) 1tab TID。",
      "evidence": "",
      "refs": [
        {
          "title": "Algitab 仿單",
          "url": "https://drive.google.com/file/d/1gpp9ZL4cKrgVk34SpSTQ8bpXAjOg48vl/view?usp=sharing"
        },
        {
          "title": "CIPROfloxacin 500mgTab 仿單",
          "url": "https://drive.google.com/file/d/143WhE8py2suvaghobFDsuCUMzlH9rCje/view?usp=sharing"
        }
      ],
      "drugInfo": {
        "drugs": [
          "Pantoprazole 40mg/Vial",
          "Aluminum hydroxide 324mg/Tab",
          "Calcium Carbonate  500mg/Tab",
          "CIPROfloxacin  500mg/Tab",
          "Dexlansoprazole 60mg/Cap",
          "Esomeprazole(錠劑) 40mg/Tab",
          "Famotidine  20mg/Tab",
          "Lansoprazole 30mg/Tab(口溶錠)",
          "Misoprostol 200mcg/Tab",
          "Rabeprazole 20mg/Tab",
          "Topaal(Algitab) chewable Tab(複方)"
        ],
        "fields": [
          "成分及含量",
          "藥品手冊適應症",
          "成人常用劑量說明",
          "貯藏方式",
          "用藥方法",
          "特別用藥指示",
          "健保價格",
          "自費價"
        ]
      }
    },
    "interactions": [
      {
        "drugs": "CIPROFLOXACIN - FAMOTIDINE:",
        "sev": "Major",
        "doc": "GOOD",
        "summary": "Concurrent use of CIPROFLOXACIN and QT PROLONGING AGENTS may result in an increased risk of QT interval prolongation and torsade de pointes."
      },
      {
        "drugs": "CALCIUM CARBONATE - CIPROFLOXACIN:",
        "sev": "Major",
        "doc": "GOOD",
        "summary": "Concurrent use of CIPROFLOXACIN and ANTACIDS may result in reduced ciprofloxacin exposure."
      }
    ],
    "interactionImage": "",
    "teacher": {
      "review": "Ciprofloxacin 遇多價陽離子（鋁、鎂、鈣、鐵）會產生「螯合作用 (Chelation)」，導致抗生素在腸道沉澱，吸收率大幅下降而失效。",
      "risk": "發藥時強制衛教：「抗生素與胃藥必須『錯開至少 2 小時』服用。或更換胃藥」",
      "planB": "",
      "chips": [
        "- 未衛教導致感染惡化引發腎盂腎炎，扣綠籌碼 3 枚。",
        "- 成功衛教錯開時間，不扣籌碼，獎勵綠籌碼 1 枚。",
        "- 可以於藥品資料中提問 碳酸鈣錠",
        "1.當作胃藥使用：應飯後嚼碎後吞服。",
        "2.治療高磷酸血症：請盡量磨粉或自行咬碎與飯菜、肉類、湯一起吃，使藥物能立即有效防止食物中的磷自腸胃道吸收。",
        "- 可以於藥品資料中提問為何不使用PPI"
      ]
    }
  },
  {
    "id": "case-1787619158538",
    "code": "CASE-007",
    "title": "顯影劑的隱藏危機",
    "star": 2,
    "student": {
      "patient": "張阿伯，65 歲。第二型糖尿病患者，長期服用降血糖藥物。\n張阿伯近期因疑似腹部腫瘤，安排了下週二進行「腹部電腦斷層掃描 (CT with IV contrast)」。他拿著連續處方箋來領每個月的常規血糖藥。",
      "context": "",
      "rx": "Metformin 500mg/Tab 1Tab TID",
      "evidence": "",
      "refs": [
        {
          "title": "仿單 METFORMIN.pdf",
          "url": "https://drive.google.com/file/d/1h4r2QCAqSZdURZzIm-Rm-iXoNU4oJcir/view?usp=drive_link"
        },
        {
          "title": "2023 中華民國放射線醫學會對比劑手冊",
          "url": "https://drive.google.com/file/d/1UtdwDuyhwjjfNEgVpaJGV2sc1viWKiIk/view?usp=drive_link"
        }
      ],
      "drugInfo": {
        "drugs": [
          "ActosMET(Pioglitazone15mg+Metformin850mg",
          "Metformin  500mg/Tab"
        ],
        "fields": [
          "成人常用劑量說明",
          "貯藏方式",
          "用藥方法",
          "特別用藥指示"
        ]
      }
    },
    "interactions": [],
    "interactionImage": "",
    "teacher": {
      "review": "實習生必須對「含碘顯影劑」與特定藥物的關係有敏感度。",
      "risk": "靜脈注射含碘顯影劑可能會引起急性的腎功能下降。若病人體內還有 Metformin，在腎功能變差的情況下，Metformin 無法排出，會引發極度致命的「乳酸中毒 (Lactic acidosis)」。",
      "planB": "不用改處方，但藥師必須在藥袋上標記並衛教：「做電腦斷層的當天，以及檢查後的 48 小時內，Metformin 必須暫停服用！」待檢查後確認腎功能正常才可恢復吃藥。",
      "chips": [
        "- 若藥師只管發藥沒做特殊衛教，阿伯做完檢查後乳酸中毒進加護病房，扣除綠籌碼（健康度）4 枚。",
        "- 若藥師成功圈出重點並完成停藥衛教，不扣籌碼。"
      ]
    }
  },
  {
    "id": "case-1787620332146",
    "code": "CASE-008",
    "title": "一口水的失敗",
    "star": 2,
    "student": {
      "patient": "Rybelsus (瑞倍適) 是目前全球唯一一款「口服」的 GLP-1 藥物，造福了怕打針的病人。但其吸收條件極度嚴苛，臨床上高達一半的病人因為「吃錯方法」導致藥效歸零。\n\n李媽媽，55 歲。害怕打針，醫師將她的減重藥/降糖藥換成口服的 Rybelsus。\n\n李媽媽在領藥時說：「改這個藥太好了，這樣我就不用打針！我明天早上起床，會把這個藥跟我的甲狀腺藥、高血壓藥，配一大杯溫開水一起吞下去。」",
      "context": "",
      "rx": "Semaglutide 7mg/Tab 1tab QD",
      "evidence": "",
      "refs": [
        {
          "title": "Rybelsus 仿單.pdf",
          "url": "https://drive.google.com/file/d/1DiKjVT1VDh_O3R8dnC4TWgDsfBr0xsVR/view?usp=drive_link"
        }
      ],
      "drugInfo": {
        "drugs": [
          "Semaglutide 14mg/Tab(30顆/盒)",
          "Semaglutide 7mg/Tab(30顆/盒)"
        ],
        "fields": [
          "成人常用劑量說明",
          "貯藏方式",
          "用藥方法",
          "特別用藥指示"
        ]
      }
    },
    "interactions": [],
    "interactionImage": "",
    "teacher": {
      "review": "實習生必須了解 Rybelsus 特殊的 SNAC 吸收促進劑機轉",
      "risk": "只要胃裡有其他藥物、食物，甚至「水喝超過 120ml (約半杯)」，該藥物的吸收率就會降至 0%，等於吃安慰劑",
      "planB": "-必須在每天早晨第一件事（完全空腹）吃。\n-只能配「半杯白開水 (不超過 120ml)」，不能用茶或飲料。\n-吃完後「至少等待 30 分鐘」，才能吃早餐或其他任何藥物。",
      "chips": [
        "- 若藥師只說「空腹吃」未強調水量與時間，李媽媽三個月後糖化血色素完全沒降，扣除綠籌碼（健康度）3 枚（治療失敗）。",
        "- 若藥師完美講出「三個必須」的衛教關鍵，不扣籌碼。"
      ]
    }
  },
  {
    "id": "case-1787621083018",
    "code": "CASE-009",
    "title": "年齡與體重的致命落差",
    "star": 2,
    "student": {
      "patient": "小明，3歲，體重 11 公斤（體重過輕，正常3歲約14-15公斤）。因發燒至診所就醫。\n醫師開立退燒糖漿。藥袋上系統自動帶入標準年齡用法：「3-5歲，每次 5 cc」。",
      "context": "",
      "rx": "Ibuprofen Syrup 20mg/mL 60mL/Bot  5 mL Q6H PRN",
      "evidence": "",
      "refs": [
        {
          "title": "衛福部國民健康署的兒童生長曲線及發展評估工具",
          "url": "https://growth.healthinfo.tw/"
        },
        {
          "title": "乖乖手冊2014-10-13.pdf",
          "url": "https://drive.google.com/file/d/1UUAxu2xKT0T_y-g3pUOO6J_bSjvMpa3f/view?usp=drive_link"
        },
        {
          "title": "Ibuprofen仿單.pdf",
          "url": "https://drive.google.com/file/d/1eCYaakCyWOPPxfeqFQkzkKWlwK1AdR5M/view?usp=drive_link"
        }
      ],
      "drugInfo": {
        "drugs": [
          "Ibuprofen(液劑) Syrup 20mg/mL 60mL/Bot"
        ],
        "fields": [
          "成人常用劑量說明",
          "兒童常用劑量說明",
          "貯藏方式",
          "用藥方法",
          "特別用藥指示"
        ]
      }
    },
    "interactions": [],
    "interactionImage": "",
    "teacher": {
      "review": "兒童用藥絕對是看「體重」而非「年齡」。Ibuprofen 兒童單次劑量為 5-10 mg/kg。",
      "risk": "11公斤的幼兒喝 5cc (100mg) 雖然在上限邊緣，但若家長多餵，極易過量引發低體溫或腸胃道不適。",
      "planB": "攔截處方，依體重重新計算精準劑量（約 2.5 - 3 cc），並更改藥袋指示，發藥時與家長確認體重並給予專屬衛教。",
      "chips": [
        "- 若依系統盲目發藥，幼兒因過量導致低體溫急診，扣除綠籌碼（健康度）3 枚。",
        "- 若藥師主動依體重重算劑量並更正藥袋，不扣籌碼，獎勵綠籌碼 1 枚（展現兒科藥師專業）。"
      ]
    }
  },
  {
    "id": "case-1787622098154",
    "code": "CASE-010",
    "title": "糖尿病老藥的復古陷阱",
    "star": 2,
    "student": {
      "patient": "70歲阿嬤，近期腎功能變差 (eGFR <15 )，血糖控制不佳。\n醫師為了加強控糖，調整了血糖劑量。",
      "context": "",
      "rx": "Glimepiride 2mg/Tab 2# BID",
      "evidence": "",
      "refs": [
        {
          "title": "2024 台灣糖尿病腎臟疾病臨床照護指引_編排 v10.pdf",
          "url": "https://drive.google.com/file/d/1cMrgVQycMiqcltXkdYNIJr9B42EKw5Z9/view?usp=drive_link"
        }
      ],
      "drugInfo": {
        "drugs": [
          "Glimepiride  2mg/Tab",
          "Glimet 2/500 mg/Tab(複方)",
          "Linagliptin F.C. 5mg/Tab",
          "Trajenta duo 2.5/850 mg/Tab"
        ],
        "fields": [
          "成分及含量",
          "成人常用劑量說明",
          "用藥方法",
          "特別用藥指示"
        ]
      }
    },
    "interactions": [],
    "interactionImage": "",
    "teacher": {
      "review": "",
      "risk": "在 CKD 病人體內會累積，導致嚴重且長期的致命性低血糖，老人家極易在半夜昏迷休克",
      "planB": "建議改用不需依腎功能調整劑量的 DPP-4 抑制劑（如 linagliptin/Trajenta）",
      "chips": [
        "- 若未攔截導致阿嬤半夜低血糖昏迷，扣除綠籌碼（健康度）4 枚。",
        "- 若成功建議換成不需調劑量的 DPP-4 抑制劑，不扣籌碼。"
      ]
    }
  }
];

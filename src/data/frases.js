// 30 frases de sobrevivência em japonês para a viagem da família Coelho
// Cada item: { id, categoria, pt, jp, romaji }

export const CATEGORIAS = [
  { id: 'cumprimentos', label: 'Cumprimentos', emoji: '🙇' },
  { id: 'restaurante',  label: 'Restaurante',  emoji: '🍣' },
  { id: 'transporte',   label: 'Transporte',   emoji: '🚆' },
  { id: 'emergencia',   label: 'Emergência',   emoji: '🚨' },
  { id: 'criancas',     label: 'Crianças',     emoji: '🧒' },
]

export const FRASES = [
  // Cumprimentos
  { id: 'c1', categoria: 'cumprimentos', pt: 'Bom dia',                jp: 'おはようございます',     romaji: 'Ohayou gozaimasu' },
  { id: 'c2', categoria: 'cumprimentos', pt: 'Olá / Boa tarde',        jp: 'こんにちは',             romaji: 'Konnichiwa' },
  { id: 'c3', categoria: 'cumprimentos', pt: 'Obrigado',               jp: 'ありがとうございます',   romaji: 'Arigatou gozaimasu' },
  { id: 'c4', categoria: 'cumprimentos', pt: 'Com licença / Desculpe', jp: 'すみません',             romaji: 'Sumimasen' },
  { id: 'c5', categoria: 'cumprimentos', pt: 'Tchau',                  jp: 'さようなら',             romaji: 'Sayounara' },
  { id: 'c6', categoria: 'cumprimentos', pt: 'Prazer em conhecê-lo',   jp: 'はじめまして',           romaji: 'Hajimemashite' },

  // Restaurante
  { id: 'r1', categoria: 'restaurante', pt: 'Uma mesa para 4, por favor', jp: '四人ですが、席はありますか？', romaji: 'Yonin desu ga, seki wa arimasu ka?' },
  { id: 'r2', categoria: 'restaurante', pt: 'Sem peixe cru, por favor',   jp: '生魚なしでお願いします',     romaji: 'Namazakana nashi de onegaishimasu' },
  { id: 'r3', categoria: 'restaurante', pt: 'A conta, por favor',         jp: 'お会計お願いします',         romaji: 'Okaikei onegaishimasu' },
  { id: 'r4', categoria: 'restaurante', pt: 'Está delicioso!',            jp: '美味しいです！',             romaji: 'Oishii desu!' },
  { id: 'r5', categoria: 'restaurante', pt: 'Tem cardápio em inglês?',    jp: '英語のメニューはありますか？', romaji: 'Eigo no menyuu wa arimasu ka?' },
  { id: 'r6', categoria: 'restaurante', pt: 'Com hashi, por favor',       jp: 'お箸でお願いします',         romaji: 'Ohashi de onegaishimasu' },

  // Transporte
  { id: 't1', categoria: 'transporte', pt: 'Onde fica a estação?',         jp: '駅はどこですか？',                   romaji: 'Eki wa doko desu ka?' },
  { id: 't2', categoria: 'transporte', pt: 'Quanto custa?',                jp: 'いくらですか？',                     romaji: 'Ikura desu ka?' },
  { id: 't3', categoria: 'transporte', pt: 'Esse trem vai para Kyoto?',    jp: 'この電車は京都に行きますか？',       romaji: 'Kono densha wa Kyouto ni ikimasu ka?' },
  { id: 't4', categoria: 'transporte', pt: 'Aceita JR Pass?',              jp: 'JRパスは使えますか？',               romaji: 'JR pasu wa tsukaemasu ka?' },
  { id: 't5', categoria: 'transporte', pt: 'Qual é a próxima parada?',     jp: '次の駅はどこですか？',               romaji: 'Tsugi no eki wa doko desu ka?' },
  { id: 't6', categoria: 'transporte', pt: 'Onde é o ponto de táxi?',      jp: 'タクシー乗り場はどこですか？',       romaji: 'Takushii noriba wa doko desu ka?' },

  // Emergência
  { id: 'e1', categoria: 'emergencia', pt: 'Estou perdido',         jp: '道に迷いました',           romaji: 'Michi ni mayoimashita' },
  { id: 'e2', categoria: 'emergencia', pt: 'Preciso de um médico',  jp: '医者が必要です',           romaji: 'Isha ga hitsuyou desu' },
  { id: 'e3', categoria: 'emergencia', pt: 'Onde fica o banheiro?', jp: 'トイレはどこですか？',     romaji: 'Toire wa doko desu ka?' },
  { id: 'e4', categoria: 'emergencia', pt: 'Pode me ajudar?',       jp: '助けてください',           romaji: 'Tasukete kudasai' },
  { id: 'e5', categoria: 'emergencia', pt: 'Não falo japonês',      jp: '日本語が話せません',       romaji: 'Nihongo ga hanasemasen' },
  { id: 'e6', categoria: 'emergencia', pt: 'Polícia!',              jp: '警察！',                   romaji: 'Keisatsu!' },

  // Crianças (Pedro 12, Felipe 10)
  { id: 'k1', categoria: 'criancas', pt: 'Obrigado!',              jp: 'ありがとう！',         romaji: 'Arigatou!' },
  { id: 'k2', categoria: 'criancas', pt: 'Posso tirar foto?',      jp: '写真を撮ってもいいですか？', romaji: 'Shashin o totte mo ii desu ka?' },
  { id: 'k3', categoria: 'criancas', pt: 'Que legal!',             jp: 'すごい！',             romaji: 'Sugoi!' },
  { id: 'k4', categoria: 'criancas', pt: 'Que gostoso!',           jp: 'おいしい！',           romaji: 'Oishii!' },
  { id: 'k5', categoria: 'criancas', pt: 'Olha isso!',             jp: 'これを見て！',         romaji: 'Kore o mite!' },
  { id: 'k6', categoria: 'criancas', pt: 'Banheiro?',              jp: 'トイレ？',             romaji: 'Toire?' },
]

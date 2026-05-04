export const ITINERARY = [
  // Dia 1 — Voo de ida
  { date: '27/06 Sáb', city: 'São Paulo → Doha', hotel: null, note: '20:30 Decolagem GRU T3 · QR780 (A350-1000)', type: 'travel',
    activities: ['Check-in aeroporto GRU T3', '20:30 Decolagem · QR780 GRU→DOH (Airbus A350-1000)'] },
  // Dia 2 — Em trânsito
  { date: '28/06 Dom', city: 'Em trânsito', hotel: null, note: '16:50 Pouso Doha · Conexão 3h45 · 20:35 QR808', type: 'travel',
    activities: ['16:50 Pouso Doha', 'Conexão 3h45 em Doha', '20:35 Decolagem · QR808 DOH→NRT (Boeing 777-300ER)'] },
  // Dia 3 — Chegada Tóquio
  { date: '29/06 Seg', city: 'Tóquio · Shinjuku', hotel: 'Sunroute Plaza Shinjuku', note: 'Chegada Narita 12:50 · Adaptação jet lag', type: 'normal',
    activities: ['12:50 Pouso Narita T2', 'Imigração + bagagem + deslocamento (~2h)', 'Narita Express → Shinjuku (~1h30)', 'Chegada ao hotel ~15h · Check-in', '16h30 Yamanote → Ikebukuro · Pokémon Center Mega Tokyo (Sunshine City · 3º andar)', '18h Retorno a Shinjuku', 'Jantar: Omoide Yokocho (yakitori — Torien ou similar)'],
    alert: { level: 'green', text: 'Dia leve, ideal para ajuste de jet lag. Manter livre — priorizar refeição e descanso após ~30h de viagem' },
    planB: ['🍜 Fuunji Shinjuku (tsukemen — o melhor ramen de Shinjuku, fila rápida)', '🍛 CoCo Ichibanya (curry japonês — opção leve e rápida)', '🚶 Kabukicho (passear pelo bairro iluminado de noite)'],
    planC: ['🍣 Numazuko Shinjuku (sushi fresco com ótimo custo-benefício)', '🏪 Don Quijote Shinjuku (loja 24h — explorar souvenirs)', '🍜 Ichiran Shinjuku (ramen tonkotsu — cabines individuais)'] },
  // Dia 4 — Meiji > Harajuku > Shibuya
  { date: '30/06 Ter', city: 'Tóquio · Harajuku · Shibuya', hotel: 'Sunroute Plaza Shinjuku', note: 'Meiji Shrine → Harajuku → Shibuya', type: 'normal',
    activities: ['Meiji Shrine', 'Harajuku (a pé)', 'Takeshita Street + crepe japonês', '🥐 Amam Dacotan (Kita-Aoyama — pão de morango / Mentaiko French · ~10 min de Harajuku no caminho pra Omotesando)', 'Almoço: Sushi no Midori / Afuri Harajuku / Maisen Aoyama', 'Omotesando', 'Shibuya Crossing + foto', 'Shibuya Sky (reservar!)', 'Hachiko (foto)', 'Compras + café', 'Jantar: Uobei Shibuya Dogenzaka / Gyukatsu Motomura / Ichiran', 'Shibuya à noite iluminada'],
    alert: { level: 'red', text: '⚠️ Dia muito carregado (7-8 atrações com jet lag). Remover Omotesando ou mover Shibuya Sky para início da tarde' },
    planB: ['🍣 Genki Sushi Shibuya (sushi no trilho — crianças adoram!)', '☕ Blue Bottle Coffee Aoyama (café especial)', '🛍️ Tokyu Hands Shibuya (loja de gadgets e curiosidades)', '🍰 Pablo Harajuku (cheese tart famoso)'],
    planC: ['🍜 Afuri Harajuku (ramen de yuzu — leve e refrescante)', '🎮 @cosme Harajuku (mega loja de cosméticos)', '🏯 Yoyogi Park (parque ao lado do Meiji — piquenique)', '🍔 Shake Shack Harajuku (hamburger americano no Japão)'] },
  // Dia 5 — Tokyo Disneyland
  { date: '01/07 Qua', city: 'Tóquio · Disneyland', hotel: 'Sunroute Plaza Shinjuku', note: 'Tokyo Disneyland — dia inteiro 🏰', type: 'disney',
    activities: ['Tokyo Disneyland (dia inteiro)', 'Comprar Disney Premier Access para atrações principais'],
    alert: { level: 'yellow', text: 'Julho = alta temporada, filas longas. Reservar tickets e Premier Access com antecedência' },
    planB: ['🏖️ Se chuva forte: Ikspiari (shopping ao lado da Disney — cinema + restaurantes)', '🍜 Rokurinsha Tokyo Station (tsukemen top — na volta pro hotel)', '🛍️ Akihabara (eletrônicos + anime — dia alternativo se Disney cancelar)'],
    planC: ['🏙️ Tokyo Skytree + Solamachi (torre + shopping — dia coberto)', '🎮 Pokémon Center Mega Tokyo (Ikebukuro)', '🍣 Sushizanmai Tsukiji (sushi 24h — lanche na volta)'] },
  // Dia 6 — TeamLab + Odaiba
  { date: '02/07 Qui', city: 'Tóquio · Odaiba', hotel: 'Sunroute Plaza Shinjuku', note: 'TeamLab Planets 8h · Odaiba · Rainbow Bridge', type: 'normal',
    activities: ['8h TeamLab Planets (reservar!)', 'Almoço: Gyukatsu Kyoto Katsugyu DiverCity / Bills Odaiba / Kua Aina Aqua City', 'Odaiba: Gundam gigante', 'Shopping + Orla', 'Café', 'Pôr do sol no Rainbow Bridge', 'Jantar: Gonpachi Odaiba / Tsukiji Dining Genchan Aqua City / The Grill on 30th'],
    alert: { level: 'yellow', text: 'TeamLab às 8h — dia anterior foi Disneyland, acordar cedo pode ser difícil. Planejar transporte com antecedência' },
    planB: ['🎡 Palette Town (roda-gigante com vista da baía)', '🔬 Miraikan (Museu Nacional de Ciência — ótimo para crianças)', '🍕 Trattoria Toscana DiverCity (italiano top em Odaiba)', '🛒 Venus Fort (outlet de marcas)'],
    planC: ['🏙️ Se cansados: Shinjuku Gyoen (jardim nacional — tranquilo)', '🍜 Tsuta Ramen (Michelin star ramen — Yoyogi)', '🛍️ Akihabara (trocar Odaiba por dia de compras de eletrônicos)', '🍦 Ise Sueyoshi (sorvete matcha premium)'] },
  // Dia 7 — Tokyo DisneySea
  { date: '03/07 Sex', city: 'Tóquio · DisneySea', hotel: 'Sunroute Plaza Shinjuku', note: 'Tokyo DisneySea — dia inteiro 🏰', type: 'disney',
    activities: ['Tokyo DisneySea (dia inteiro)', 'Comprar Disney Premier Access'],
    alert: { level: 'yellow', text: '3º dia intenso consecutivo (Disney + TeamLab + Disney). Risco de exaustão — considere dia mais calmo entre os Disney parks' },
    planB: ['🛍️ Se muito cansados: Akihabara (dia leve de compras — Yodobashi, Sofmap)', '🍜 Fuunji Shinjuku (tsukemen top de Tóquio)', '🏙️ Shinjuku Gyoen + Kabukicho noturno (dia relax)'],
    planC: ['🗼 Tokyo Tower + Zojoji Temple (vista clássica)', '🍣 Tsukiji Outer Market (sushi fresco + tamagoyaki)', '🎮 Nakano Broadway (anime/manga — menos lotado que Akihabara)'] },
  // Dia 8 — Tóquio livre (Asakusa + Akihabara)
  { date: '04/07 Sáb', city: 'Tóquio · Asakusa + Akihabara', hotel: 'Sunroute Plaza Shinjuku', note: 'Tóquio livre · Asakusa · Akihabara', type: 'normal',
    activities: ['7h30 Tsukiji: mercado + café da manhã (atum, tamagoyaki, suco)', '9h30 Ginza: compras + Itoya (papelaria 12 andares — imperdível)', 'Asakusa: Templo Senso-ji (chegar ao meio-dia)', 'Nakamise-dori (rua de souvenirs — a mais famosa do Japão)', 'Almoço em Asakusa', 'Akihabara: Yodobashi Camera · Super Potato (retrogames) · lojas de anime · arcades', 'Jantar: Shinjuku (Omoide Yokocho ou similar)'],
    planB: ['🏛️ Ueno: museus + parque (alternativa calma)', '🛍️ Shibuya: Tokyu Hands + Loft (última chance de compras)', '🎮 Super Potato Akihabara (retrogames — crianças adoram)'],
    planC: ['🖼️ Pola Museum of Art (museu premium — ótimo para dia de chuva)', '♨️ Hakone Kowakudani Yunessun (parque aquático de onsens)', '🍵 Amazake-chaya (casa de chá com 400 anos na Tokaido Road)'] },
  // Dia 9 — Tóquio → Kyoto
  { date: '05/07 Dom', city: 'Tóquio → Kyoto', hotel: 'Good Nature Hotel Kyoto', note: 'Shinkansen Tokyo → Kyoto · Check-in · Pontocho', type: 'normal',
    activities: ['Café da manhã em Shinjuku', 'Check-out Sunroute Plaza Shinjuku', 'Shinkansen Hikari Tokyo Station → Kyoto (~2h15) · sentar assento A ou B lado direito (vista Fuji!) — entre Shin-Fuji e Shizuoka', 'Check-in Good Nature Hotel Kyoto', 'Caminhada em Kawaramachi (opcional)', 'Jantar: Pontocho'],
    alert: { level: 'green', text: '💡 Vista Fuji: assentos A ou B (lado direito), trecho Shin-Fuji↔Shizuoka. Em julho a visibilidade é baixa (~20-25%) — melhor de manhã' },
    planB: ['🍜 Ippudo Kyoto (ramen tonkotsu top — perto de Kawaramachi)', '🛍️ Teramachi Street (rua coberta de lojas — bom para passeio leve)', '🍵 Saryo Suisen (chá matcha + doces em Kawaramachi)'],
    planC: ['🍣 Musashi Sushi Kyoto (sushi esteira — barato e bom)', '🏪 Nishiki Market (só passar e provar petiscos se tiver energia)', '🍰 Nakamura Tokichi (matcha parfait — o melhor de Kyoto)'] },
  // Dia 10 — Hiroshima + Miyajima (bate-volta)
  { date: '06/07 Seg', city: 'Kyoto + Hiroshima/Miyajima', hotel: 'Good Nature Hotel Kyoto', note: 'Bate-volta: Torii flutuante + Memorial da Paz', type: 'normal',
    activities: ['7h Shinkansen para Hiroshima (Hikari/Sakura)', 'Ferry para Miyajima', 'Itsukushima Shrine + Torii flutuante', 'Almoço na ilha (Hayashi)', 'Ferry de volta para Hiroshima', 'Hiroshima: Memorial da Paz + Cúpula da Bomba Atômica', 'Retorno a Kyoto (Shinkansen)'],
    alert: { level: 'red', text: '⚠️ Dia mais pesado do roteiro (~12-14h). Memorial pode ser emocionalmente intenso para Felipe (9 anos). Preparar contexto histórico. Considere pernoite em Hiroshima' },
    planB: ['🍜 Bakudanya (ramen de Hiroshima — tsukemen estilo local)', '🦪 Kakiya (ostras grelhadas de Miyajima — imperdível!)', '🍁 Momijido (doce momiji manjuu — souvenir clássico da ilha)'],
    planC: ['🏯 Se cancelar Hiroshima: Uji (entre Kyoto e Nara — templos + matcha)', '🍵 Tsuen Tea (casa de chá mais antiga do Japão — em Uji)', '⛩️ Byodoin Temple Uji (patrimônio UNESCO — na nota de ¥10)'] },
  // Dia 11 — Nara (bate-volta)
  { date: '07/07 Ter', city: 'Kyoto + Nara', hotel: 'Good Nature Hotel Kyoto', note: 'Nara: cervos + Todai-ji · Gion · Pontocho', type: 'normal',
    activities: ['8h Trem para Nara', 'Parque de Nara (cervos — experiência mágica para crianças!)', 'Todai-ji (Buda gigante)', 'Almoço em Nara', 'Retorno a Kyoto', 'Passeio no bairro Gion', 'Jantar: Pontocho (18h–20h30)'],
    alert: { level: 'green', text: 'Dia mais calmo que o anterior. Considere voltar um pouco mais cedo para garantir descanso' },
    planB: ['🍜 Menbou Nara (udon artesanal — perto do Todai-ji)', '🏛️ Kasuga Taisha (santuário com 3.000 lanternas de pedra)', '🍡 Nakatanidou (mochi pounding show — espetáculo de preparo ao vivo!)'],
    planC: ['🍵 Yoshimura Nara (matcha com vista para o parque dos cervos)', '🏯 Isuien Garden (jardim japonês perfeito — refúgio do calor)', '🍜 Gion Kappa (jantar kaiseki acessível em Kyoto na volta)'] },
  // Dia 12 — Kyoto: Higashiyama
  { date: '08/07 Qua', city: 'Kyoto · Higashiyama + Templos NW', hotel: 'Good Nature Hotel Kyoto', note: 'Kiyomizu-dera · Kinkaku-ji · Ryoan-ji · Gion', type: 'normal',
    activities: ['Taxi → Higashiyama (antes das 8h — calor intenso em julho!)', 'Kiyomizu-dera', 'Sannenzaka e Ninenzaka', 'Café / almoço', 'Taxi → Kinkaku-ji (Pavilhão Dourado)', 'Ryoan-ji (jardim de pedras — a 10 min de Kinkaku-ji)', 'Descanso no hotel', 'Nishiki Market / Kawaramachi', 'Gion + jantar: Pontocho'],
    planB: ['🍜 Honke Owariya (soba desde 1465! — a mais antiga de Kyoto)', '🏯 Kodai-ji Temple (iluminação noturna linda)', '🍡 Kasagiya (doces japoneses tradicionais em Ninenzaka)'],
    planC: ['🍵 % Arabica Kyoto Higashiyama (café specialty com vista)', '🛍️ Kyoto Handicraft Center (artesanato local — souvenirs premium)', '🍜 Men-ya Inoichi (ramen chicken — estrelado no Tabelog)'] },
  // Dia 13 — Aniversário da Elaine 🎂
  { date: '09/07 Qui', city: 'Kyoto · Aniversário Elaine 🎂', hotel: 'Good Nature Hotel Kyoto', note: 'Fushimi Inari · Chá c/ quimono · Massagem · Jantar especial', type: 'birthday',
    activities: ['7h Taxi → Fushimi Inari (antes das multidões — timing perfeito!)', 'Café da manhã', 'Cerimônia do Chá com quimono em Gion (Maikoya Kyoto — reservar!)', 'Almoço: Gion Tanto', 'Massagem japonesa (Hiyoshi-Do Gion)', 'Experiência Samurai', 'Jantar especial de aniversário (reservar!)'],
    alert: { level: 'yellow', text: 'Dia especial — muitas atividades. Priorizar momentos memoráveis e avaliar se Samurai cabe no tempo' },
    planB: ['🍣 Gion Sushi Masa (omakase de aniversário — experiência premium)', '🎎 Jidai-ya Gion (aluguel de quimono alternativo)', '💆 Fufu Kyoto Spa (spa de luxo — alternativa ao Hiyoshi-Do)'],
    planC: ['🍜 Nishiki Warai (okonomiyaki top em Nishiki Market)', '🌸 Philosopher\'s Path (caminhada romântica para casal)', '🍰 Jouvencelle Gion (parfait de matcha premiado)'] },
  // Dia 14 — Arashiyama + Templos
  { date: '10/07 Sex', city: 'Kyoto · Arashiyama', hotel: 'Good Nature Hotel Kyoto', note: 'Bamboo Grove · Tenryu-ji · Togetsukyo', type: 'normal',
    activities: ['7h30 Taxi → Arashiyama', 'Bamboo Grove (antes das multidões)', 'Jardim Tenryu-ji', 'Ponte Togetsukyo', 'Almoço', 'Tarde livre em Arashiyama (Iwatayama Monkey Park / passeio leve)', 'Volta ao hotel', 'Jantar'],
    alert: { level: 'green', text: 'Dia mais leve depois da remarcação: Kinkaku-ji e Ryoan-ji foram pra 08/07. Foco em Arashiyama' },
    planB: ['🍜 Yoshimura Soba Arashiyama (soba com vista do rio — nota 4.5★)', '🐒 Iwatayama Monkey Park (macacos no topo da montanha — crianças amam!)', '🍦 Arashiyama Rilakkuma Café (fofo + sorvete matcha)'],
    planC: ['🏯 Daikaku-ji Temple (templo tranquilo com lago — pouco turista)', '🍵 eX café Arashiyama (café em casa tradicional japonesa)', '🍜 Tenkaippin Kinkaku-ji (ramen cremoso — perto do Pavilhão Dourado)'] },
  // Dia 15 — Osaka
  { date: '11/07 Sáb', city: 'Osaka', hotel: 'Mercure Tokyu Stay Osaka Namba', note: 'Transfer Kyoto→Osaka · Shinsaibashi · Dotonbori', type: 'normal',
    activities: ['10h Trem Kyoto → Osaka', 'Check-in Mercure Tokyu Stay Osaka Namba (guardar bagagem se quartos não disponíveis)', 'Rua Shinsaibashi', 'Dotonbori: Okonomiyaki (panqueca) + Takoyaki (bolinha de polvo)'],
    alert: { level: 'green', text: 'Check-in às 10h pode ser cedo — quartos geralmente disponíveis às 15h. Deixe bagagem na recepção e explore' },
    planB: ['🐙 Kukuru Takoyaki (o melhor takoyaki de Dotonbori — fila vale a pena)', '🍖 Daruma Kushikatsu (fritura no espeto — clássico de Osaka!)', '🛍️ Kuromon Market (mercado de rua — sashimi + frutas frescas)'],
    planC: ['🍜 Ichiran Dotonbori (ramen com vista pro canal — atmosfera única)', '🏯 Osaka Castle (castelo + parque — alternativa para tarde)', '🍣 Endo Sushi Kuromon (sushi de mercado — fresco do dia)'] },
  // Dia 16 — USJ
  { date: '12/07 Dom', city: 'Osaka · USJ', hotel: 'Mercure Tokyu Stay Osaka Namba', note: 'Universal Studios Japan — dia inteiro 🎢', type: 'disney',
    activities: ['Universal Studios Japan (dia inteiro)', 'Harry Potter World', 'Super Nintendo World', 'Jantar no parque ou Dotonbori'],
    alert: { level: 'yellow', text: 'Julho = alta temporada, filas 60-90 min. Comprar Express Pass antecipadamente. Chegar na abertura (8h–8h30)' },
    planB: ['🏙️ Se chuva: Namba Parks + Namba City (shopping gigante coberto)', '🐙 Takoyaki Museum (dentro do USJ — provar 5 estilos diferentes)', '🍜 Kamukura Ramen (perto do USJ — ramen light)'],
    planC: ['🏯 Shinsekai + Tsutenkaku Tower (bairro retrô de Osaka — kushikatsu)', '🛍️ Shinsaibashi Shopping (dia alternativo de compras)', '🍖 Matsusakagyu Yakiniku M (Wagyu A5 em Dotonbori — se quiser celebrar)'] },
  // Dia 17 — Hakone (ryokan)
  { date: '13/07 Seg', city: 'Hakone', hotel: 'Hakone Kowakien Tenyu', note: 'Transfer Osaka→Hakone · Ryokan 5★ · Onsen privativo', type: 'normal',
    activities: ['Check-out Mercure Tokyu Stay Osaka Namba', '⚠️ DESPACHAR MALAS GRANDES via Takkyubin para: Hotel Metropolitan Tokyo Marunouchi — entrega garantida dia 14/07 (~¥1.500-2.000/mala)', 'Shinkansen Hikari Shin-Osaka → Odawara (~2h15) · sentar assentos A ou B lado direito (vista Fuji!)', '⚠️ ATENÇÃO: pegar Hikari — o Nozomi NÃO para em Odawara', 'Comprar Hakone Free Pass em Odawara (cobre Hakone Tozan Railway, teleférico, Lago Ashi, transporte interno)', 'Táxi Odawara → Hakone Kowakien Tenyu (~25 min · ~¥3.500)', 'Check-in ryokan', 'Onsen privativo ao ar livre · Jantar kaiseki no ryokan'],
    planB: ['🎨 Hakone Open-Air Museum (esculturas ao ar livre — lindo com qualquer tempo)', '⛩️ Hakone Shrine (torii vermelho na beira do lago Ashi)', '🍜 Hatsuhana Soba (soba artesanal — o mais famoso de Hakone)'],
    planC: ['🖼️ Pola Museum of Art (museu premium — ótimo para dia de chuva)', '♨️ Hakone Kowakudani Yunessun (parque aquático de onsens)', '🍵 Amazake-chaya (casa de chá com 400 anos na Tokaido Road)'] },
  // Dia 18 — Hakone manhã + Tóquio Marunouchi tarde
  { date: '14/07 Ter', city: 'Hakone → Tóquio · Marunouchi', hotel: 'Hotel Metropolitan Tokyo Marunouchi', note: 'Manhã Hakone · Tarde Tóquio · Hotel na Tokyo Station', type: 'normal',
    activities: ['Acordar cedo 6h — tentativa de ver o Monte Fuji (melhor janela do dia — muito nublado em julho)', 'Café da manhã no ryokan', 'Lago Ashi de barco (manhã)', 'Almoço em Hakone', 'Táxi Hakone → Odawara Station (~25 min · ~¥3.500)', 'Shinkansen Hikari Odawara → Tokyo Station (~35 min) · sentar assentos D ou E (Fuji aparece lado esquerdo nos 1os 15 min)', 'Check-in Hotel Metropolitan Tokyo Marunouchi (acesso indoor direto da Tokyo Station — sem sair ao ar livre com malas)', '✅ Malas grandes já chegaram via Takkyubin', 'Tarde leve: Marunouchi / Ginza (compras finais)', 'Jantar tranquilo no bairro'],
    planB: ['🛍️ Ginza: compras de luxo + Itoya (papelaria — imperdível se não foi no Dia 4)', '🌳 Imperial Palace East Gardens (passeio tranquilo — fecha às 17h)', '🍜 Ramen Ichiran Tokyo Station (clássico · fica no B1 da estação)'],
    planC: ['🍣 Tsukiji Outer Market (sushi fresco se não foi no Dia 4)', '🗼 Tokyo Tower + Zojoji Temple (vista clássica — alternativa noturna)', '🛍️ Tokyo Station Character Street B1 (Pokémon, Ghibli — última compra de souvenirs)'] },
  // Dia 19 — Voo de volta
  { date: '15/07 Qua', city: 'Tóquio → Narita', hotel: null, note: '17:25 Decolagem NRT · QR809 (B777-300ER)', type: 'travel',
    activities: ['Manhã livre em Tóquio — compras finais · Marunouchi / Ginza / Tokyo Station Character Street (abre 8h)', 'Check-out Hotel Metropolitan Tokyo Marunouchi (guardar malas na recepção e aproveitar até meio-dia)', "N'EX (Narita Express) Tokyo Station → Narita T2 (~75 min · acesso indoor direto do hotel via Sapia Tower)", 'Embarque às 14h-15h', '17:25 Decolagem NRT · QR809 (Boeing 777-300ER)'] },
  // Dia 20 — Chegada Brasil
  { date: '16/07 Qui', city: 'Doha → São Paulo', hotel: null, note: '22:20 Doha · 01:50 QR779 → 10:35 GRU T3', type: 'travel',
    activities: ['22:20 Pouso Doha', 'Conexão 3h35 em Doha', '01:50 Decolagem · QR779 DOH→GRU (Airbus A350-1000)', '10:35 Pouso GRU T3 — Bem-vindos de volta!'] },
]

export const SHOPPING_ITEMS = [
  { id: 'lego', name: 'LEGO 75419 UCS (9.023 peças)', yen: 144980, brl: 4760, store: 'LEGO Store Shinjuku — Takashimaya B1', tag: 'Presentes', taxFree: true, shopDay: '29/06', note: '38 minifigs · Dica: peças em sacos ziploc, deixar caixas no Japão · Manual no app LEGO · Comprar cedo para guardar no hotel' },
  { id: 'uniqlo', name: 'UNIQLO Camisas Non-Iron (x3)', yen: 12000, brl: 394, store: 'UNIQLO Shinjuku · UNIQLO Shinsaibashi (Osaka)', tag: 'Vestuário', taxFree: true, shopDay: '29/06 ou 11/07', note: 'Stretch Slim Fit · L japonês = M/G brasileiro · Buscar tag "Non-Iron" ou "Sarasara" · Anti-amasso, fácil secagem' },
  { id: 'sony-xm6', name: 'Sony WH-1000XM6', yen: 59400, brl: 1950, store: 'Yodobashi Shinjuku · BIC Camera Shibuya (30/06)', tag: 'Eletrônico', taxFree: true, shopDay: '29/06 ou 30/06', note: 'ANC top · 30h bateria · Multipoint 2 dispositivos · LDAC · Ideal para voo 24h GRU→DOH→NRT' },
  { id: 'dji-pocket', name: 'DJI Osmo Pocket 4', yen: 80000, brl: 2625, store: 'Yodobashi Shinjuku · BIC Camera Shibuya (30/06)', tag: 'Eletrônico', taxFree: true, shopDay: '29/06 ou 30/06', note: 'Gimbal mecânico + 4K/120fps · Creator Combo ~¥95.000–105.000 · Comprar SD card junto' },
  { id: 'ssd-sony', name: 'SSD Sony SL-MG1T 1TB', yen: 13000, brl: 427, store: 'Yodobashi Shinjuku · BIC Camera Shibuya', tag: 'Eletrônico', taxFree: true, shopDay: '29/06 ou 30/06', note: 'SG Series · 50g · IP55 · Backup diário fotos + vídeos DJI · Opção 2TB (SL-MG2T) ~¥20.000–25.000' },
  { id: 'anker-bank', name: 'Anker 737 Power Bank', yen: 15990, brl: 525, store: 'Yodobashi Shinjuku · Yodobashi Akihabara', tag: 'Eletrônico', taxFree: false, shopDay: '29/06', note: '24.000mAh · 140W · 88Wh (dentro do limite 100Wh avião) · SOMENTE bagagem de mão · Comprar cedo para usar na viagem' },
]

export const STORES = [
  { id: 'yodobashi-sj', name: 'Yodobashi Camera Shinjuku', area: 'Shinjuku', hours: '09h30–22h', sunday: true, items: ['sony-xm6', 'dji-pocket', 'ssd-sony', 'anker-bank'], note: 'Loja gigante próxima ao hotel · 7 andares · tax-free disponível · Melhor ponto de partida para eletrônicos', metro: 'JR Shinjuku · saída Oeste · 2 min caminhando' },
  { id: 'uniqlo-sj', name: 'UNIQLO Shinjuku', area: 'Shinjuku', hours: '10h–21h', sunday: true, items: ['uniqlo'], note: 'Maior UNIQLO de Shinjuku · 12 andares · tax-free disponível · Ampla seleção Non-Iron Slim Fit', metro: 'Metrô Shinjuku · saída Sul · 3 min' },
  { id: 'lego-sj', name: 'LEGO Store Shinjuku', area: 'Shinjuku', hours: '10h–21h', sunday: true, items: ['lego'], note: 'Dentro do Takashimaya Times Square (B1). Tax-free acima de ¥5.000. Estoque exclusivo JP.', metro: 'JR Shinjuku · saída Sul · Takashimaya B1 · 5 min' },
  { id: 'bic-shibuya', name: 'BIC Camera Shibuya', area: 'Shibuya', hours: '10h–21h', sunday: true, items: ['sony-xm6', 'dji-pocket', 'ssd-sony'], note: 'Na rota do dia 30/06 (Shibuya Crossing). Perto do Shibuya Sky. Tax-free disponível.', metro: 'JR Shibuya · saída Hachiko · 3 min' },
  { id: 'uniqlo-osaka', name: 'UNIQLO Shinsaibashi (Osaka)', area: 'Osaka', hours: '10h–21h', sunday: true, items: ['uniqlo'], note: 'Na rota do dia 11/07 (Shinsaibashi). Opção caso não compre em Tóquio.', metro: 'Metrô Shinsaibashi · saída 6 · 1 min' },
]

export const SHOPPING_PLAN = [
  {
    day: '29/06 (Seg)',
    label: 'Shinjuku — noite de chegada',
    color: 'orange',
    optional: true,
    note: 'Jet lag após ~30h de voo. Fazer só se houver energia. Todas as lojas a 5–10 min do hotel.',
    stops: [
      { time: '16h30', action: 'Check-in Sunroute Plaza Shinjuku · deixar bagagens', store: null },
      { time: '17h00', action: 'LEGO Store Shinjuku (Takashimaya B1) — LEGO UCS', store: 'lego-sj' },
      { time: '17h30', action: 'UNIQLO Shinjuku — Camisas Non-Iron (L JP = M/G BR)', store: 'uniqlo-sj' },
      { time: '18h00', action: 'Yodobashi Shinjuku — Sony XM6 · DJI Pocket 4 · SSD · Anker', store: 'yodobashi-sj' },
      { time: '19h30', action: 'Jantar: Omoide Yokocho (yakitori) · retorno ao hotel', store: null },
    ],
  },
  {
    day: '30/06 (Ter)',
    label: 'Shibuya — durante o roteiro',
    color: 'blue',
    optional: false,
    note: '"Compras + café" já está no roteiro de Harajuku → Omotesando → Shibuya. Aproveitar antes do Shibuya Sky (17h30).',
    stops: [
      { time: '09h00', action: 'Meiji Shrine → Harajuku → Takeshita Street → Omotesando', store: null },
      { time: '13h00', action: 'Shibuya Crossing + Hachiko · almoço no bairro', store: null },
      { time: '14h30', action: 'BIC Camera Shibuya — Sony XM6 · DJI Pocket 4 · SSD Sony', store: 'bic-shibuya' },
      { time: '15h30', action: 'Tax-free + embalar. Compras adicionais na área de Shibuya.', store: null },
      { time: '17h30', action: 'Shibuya Sky — mirante (reserva obrigatória!)', store: null },
      { time: '19h30', action: 'Jantar em Shibuya · retorno ao hotel', store: null },
    ],
  },
  {
    day: '11/07 (Sáb)',
    label: 'Osaka — Shinsaibashi',
    color: 'green',
    optional: false,
    note: 'Rua de compras de Osaka. Ideal para UNIQLO e souvenirs. Dotonbori a 5 min a pé.',
    stops: [
      { time: '11h00', action: 'Check-in Mercure Tokyu Stay Osaka Namba · deixar bagagem', store: null },
      { time: '12h00', action: 'Shinsaibashi — explorar a rua de compras', store: null },
      { time: '13h00', action: 'UNIQLO Shinsaibashi — itens não comprados em Tóquio', store: 'uniqlo-osaka' },
      { time: '14h00', action: 'Dotonbori: Okonomiyaki + Takoyaki · explorar', store: null },
    ],
  },
]

// Legacy alias mantido para compatibilidade
export const ROUTE_30JUN = SHOPPING_PLAN[1].stops.map((s, i) => ({ time: s.time, action: s.action, transport: null }))

export const FLIGHTS = [
  {
    type: 'ida',
    airline: 'LATAM (BSB→GRU) + Qatar Airways (intl)',
    legs: [
      { flight: 'LA3528', aircraft: 'LATAM doméstico', from: 'BSB — Brasília', to: 'GRU — Guarulhos T3', dep: '27/06 · 15h00', arr: '27/06 · 16h45', duration: '1h45', class: 'Economy' },
      { flight: 'QR780', aircraft: 'Airbus A350-1000', from: 'GRU — Guarulhos T3', to: 'DOH — Doha (Hamad)', dep: '27/06 · 20h30', arr: '28/06 · 16h50', duration: '14h20', class: 'Economy (Q)', layover: '3h45 em Guarulhos' },
      { flight: 'QR808', aircraft: 'Boeing 777-300ER', from: 'DOH — Doha (Hamad)', to: 'NRT — Narita T2', dep: '28/06 · 20h35', arr: '29/06 · 12h55', duration: '10h20', class: 'Economy (Q)', layover: '3h45 em Doha' },
    ],
  },
  {
    type: 'volta',
    airline: 'Qatar Airways (intl) + LATAM (GRU→BSB)',
    legs: [
      { flight: 'QR809', aircraft: 'Boeing 777-300ER', from: 'NRT — Narita T2', to: 'DOH — Doha (Hamad)', dep: '15/07 · 17h25', arr: '15/07 · 22h20', duration: '10h55', class: 'Economy (T)' },
      { flight: 'QR779', aircraft: 'Airbus A350-1000', from: 'DOH — Doha (Hamad)', to: 'GRU — Guarulhos T3', dep: '16/07 · 01h55', arr: '16/07 · 10h35', duration: '14h40', class: 'Economy (T)', layover: '3h35 em Doha' },
      { flight: 'LA3263', aircraft: 'LATAM doméstico', from: 'GRU — Guarulhos T3', to: 'BSB — Brasília', dep: '17/07 · 09h40', arr: '17/07 · 11h25', duration: '1h45', class: 'Economy', layover: 'Pernoite em São Paulo (16→17/07)' },
    ],
  },
]

export const TRANSFERS = [
  { from: 'Narita', to: 'Shinjuku', mode: 'Narita Express', detail: 'Narita T2 → Shinjuku · ~1h30', date: '29/06' },
  { from: 'Tóquio', to: 'Kyoto', mode: 'Shinkansen', detail: 'Tokyo Station → Kyoto · Hikari · ~2h15 · sentar assento A ou B (lado direito — vista Fuji!)', date: '05/07' },
  { from: 'Kyoto', to: 'Hiroshima', mode: 'Shinkansen', detail: 'Kyoto → Hiroshima · Hikari/Sakura · bate-volta', date: '06/07' },
  { from: 'Kyoto', to: 'Nara', mode: 'Trem', detail: 'Kyoto → Nara · JR Nara Line · ~45 min', date: '07/07' },
  { from: 'Kyoto', to: 'Osaka', mode: 'Trem', detail: 'Kyoto → Osaka · ~15 min', date: '11/07' },
  { from: 'Osaka', to: 'Hakone (via Odawara)', mode: 'Shinkansen Hikari + Táxi', detail: 'Shin-Osaka → Odawara · Hikari · ~2h15 · + Táxi Odawara→Ryokan ~25 min · ⚠️ Nozomi NÃO para em Odawara', date: '13/07' },
  { from: 'Hakone', to: 'Tóquio', mode: 'Táxi + Shinkansen', detail: 'Táxi Hakone→Odawara (~25 min) + Hikari Odawara→Tokyo Station (~35 min)', date: '14/07' },
  { from: 'Tóquio', to: 'Narita', mode: "N'EX", detail: 'Tokyo Station → Narita T2 (Narita Express) · ~75 min · acesso indoor do hotel', date: '15/07' },
]

export const JR_PASS_ROUTES = [
  { route: 'Narita → Shinjuku (Narita Express)', used: false },
  { route: 'Tokyo Station → Kyoto · Hikari · sentar A ou B', used: false },
  { route: 'Kyoto → Hiroshima (bate-volta)', used: false },
  { route: 'Kyoto → Nara (bate-volta)', used: false },
  { route: 'Kyoto → Osaka', used: false },
  { route: 'Shin-Osaka → Odawara · Hikari · ⚠️ Nozomi NÃO para em Odawara', used: false },
  { route: 'Odawara → Tokyo Station · Hikari · ~35 min', used: false },
  { route: 'Tokyo Station → Narita', used: false },
]

export const PRIORITY_RESERVATIONS = [
  { id: 'shibuya-sky', what: 'Shibuya Sky', date: '30/06', urgency: 'urgente', status: 'pendente' },
  { id: 'disneyland', what: 'Tokyo Disneyland — ticket + Premier Access', date: '01/07', urgency: 'urgente', status: 'pendente' },
  { id: 'teamlab', what: 'TeamLab Planets — sessão 8h', date: '02/07', urgency: 'urgente', status: 'pendente' },
  { id: 'disneysea', what: 'Tokyo DisneySea — ticket + Premier Access', date: '03/07', urgency: 'urgente', status: 'pendente' },
  { id: 'maikoya', what: '✅ Cerimônia do Chá Maikoya Gion Kiyomizu (#2932897, 11h, ¥30.800)', date: '09/07', urgency: 'urgente', status: 'confirmado' },
  { id: 'yururi', what: 'Massagem japonesa — Hiyoshi-Do Gion', date: '09/07', urgency: 'medio', status: 'pendente' },
  { id: 'jantar-aniversario', what: 'Jantar especial aniversário Elaine', date: '09/07', urgency: 'urgente', status: 'pendente' },
  { id: 'usj-express', what: 'USJ Express Pass', date: '12/07', urgency: 'urgente', status: 'pendente' },
  { id: 'jantar-despedida', what: 'Jantar de despedida em Marunouchi/Ginza', date: '14/07', urgency: 'medio', status: 'pendente' },
]

export const BUDGET_CATEGORIES = [
  { id: 'eletronicos', label: 'Eletrônicos', icon: '💻', default: 200000 },
  { id: 'presentes', label: 'Presentes/LEGO UCS', icon: '🎁', default: 155000 },
  { id: 'vestuario', label: 'Vestuário', icon: '👕', default: 30000 },
  { id: 'alimentacao', label: 'Alimentação', icon: '🍜', default: 80000 },
  { id: 'passeios', label: 'Passeios', icon: '🎡', default: 60000 },
  { id: 'surpresa', label: 'Surpresa Elaine', icon: '🎂', default: 50000 },
  { id: 'transporte', label: 'Transporte local', icon: '🚇', default: 30000 },
  { id: 'outros', label: 'Outros', icon: '🛒', default: 40000 },
]

export const JAPANESE_PHRASES = [
  { category: 'Compras', phrases: [
    { jp: 'これはいくらですか？', romaji: 'Kore wa ikura desu ka?', pt: 'Quanto custa isso?' },
    { jp: 'タックスフリーできますか？', romaji: 'Tax-free dekimasu ka?', pt: 'Posso fazer tax-free?' },
    { jp: 'クレジットカードは使えますか？', romaji: 'Kurejitto kaado wa tsukaemasu ka?', pt: 'Aceitam cartão de crédito?' },
    { jp: 'これをください', romaji: 'Kore o kudasai', pt: 'Quero comprar isso' },
    { jp: '袋はいりません', romaji: 'Fukuro wa irimasen', pt: 'Não preciso de sacola' },
    { jp: 'パスポートを見せます', romaji: 'Pasupōto o misemasu', pt: 'Vou mostrar o passaporte' },
  ]},
  { category: 'Restaurante', phrases: [
    { jp: 'メニューを見せてください', romaji: 'Menyuu o misete kudasai', pt: 'Me mostre o cardápio' },
    { jp: 'これをひとつください', romaji: 'Kore o hitotsu kudasai', pt: 'Um deste, por favor' },
    { jp: 'おいしい！', romaji: 'Oishii!', pt: 'Delicioso!' },
    { jp: 'お会計をお願いします', romaji: 'Okaikei o onegaishimasu', pt: 'A conta, por favor' },
    { jp: '辛くないですか？', romaji: 'Karakunai desu ka?', pt: 'É apimentado?' },
    { jp: '水をください', romaji: 'Mizu o kudasai', pt: 'Água, por favor' },
  ]},
  { category: 'Transporte', phrases: [
    { jp: '〜駅はどこですか？', romaji: '〜eki wa doko desu ka?', pt: 'Onde fica a estação 〜?' },
    { jp: 'このきっぷをください', romaji: 'Kono kippu o kudasai', pt: 'Quero este bilhete' },
    { jp: '〜まで行きます', romaji: '〜made ikimasu', pt: 'Quero ir até 〜' },
    { jp: 'タクシーをよんでください', romaji: 'Takushii o yonde kudasai', pt: 'Por favor chame um táxi' },
    { jp: 'ここで止まってください', romaji: 'Koko de tomatte kudasai', pt: 'Pare aqui, por favor' },
  ]},
  { category: 'Emergência', phrases: [
    { jp: '助けてください！', romaji: 'Tasukete kudasai!', pt: 'Socorro!' },
    { jp: '救急車を呼んでください', romaji: 'Kyuukyuusha o yonde kudasai', pt: 'Chame uma ambulância' },
    { jp: '警察を呼んでください', romaji: 'Keisatsu o yonde kudasai', pt: 'Chame a polícia' },
    { jp: '病院はどこですか？', romaji: 'Byouin wa doko desu ka?', pt: 'Onde fica o hospital?' },
    { jp: '英語を話せますか？', romaji: 'Eigo o hanasemasu ka?', pt: 'Fala inglês?' },
  ]},
  { category: 'Básico', phrases: [
    { jp: 'ありがとうございます', romaji: 'Arigatou gozaimasu', pt: 'Muito obrigado(a)' },
    { jp: 'すみません', romaji: 'Sumimasen', pt: 'Com licença / Desculpe' },
    { jp: 'わかりません', romaji: 'Wakarimasen', pt: 'Não entendo' },
    { jp: 'もう一度お願いします', romaji: 'Mou ichido onegaishimasu', pt: 'Repita, por favor' },
    { jp: 'トイレはどこですか？', romaji: 'Toire wa doko desu ka?', pt: 'Onde fica o banheiro?' },
    { jp: 'はい / いいえ', romaji: 'Hai / Iie', pt: 'Sim / Não' },
  ]},
]

export const EMERGENCY_CONTACTS = [
  { label: 'Polícia', number: '110', icon: '🚔' },
  { label: 'Bombeiros / SAMU', number: '119', icon: '🚒' },
  { label: 'Embaixada do Brasil em Tóquio', number: '+81-3-5404-5211', icon: '🇧🇷', address: '2-11-12 Kita-Aoyama, Minato-ku, Tokyo, Japan' },
  { label: 'Tourist Helpline (24h inglês)', number: '050-3816-2787', icon: '📞' },
  { label: 'Japan Helpline (24h)', number: '0120-461-997', icon: '🆘' },
  { label: 'Hospital Tóquio (falam inglês)', number: '+81-3-3436-3028', icon: '🏥', address: 'Tokyo Medical and Surgical Clinic, Minato-ku, Tokyo, Japan' },
  { label: 'Hospital Kyoto', number: '+81-75-781-5191', icon: '🏥', address: 'Japan Baptist Hospital, Kitashirakawa, Kyoto, Japan' },
]

export const METRO_LINES = [
  { name: 'JR Yamanote Line', color: '#9ACD32', desc: 'Loop circular · conecta todas as áreas principais de Tóquio · Shinjuku, Shibuya, Ueno, Akihabara' },
  { name: 'JR Sobu Line', color: '#FFD700', desc: 'Linha amarela · Shinjuku → Akihabara em ~20 min' },
  { name: 'Tokyo Metro Ginza', color: '#F97316', desc: 'Linha laranja · Centro de Tóquio · Shibuya ↔ Ueno' },
  { name: 'Odakyu Line', color: '#1D4ED8', desc: 'Shinjuku → Hakone-Yumoto · alternativa ao Shinkansen · não cobre JR Pass' },
  { name: 'Narita Express (N\'EX)', color: '#DC2626', desc: 'Narita → Shinjuku em ~80 min · ~¥3.000 · coberto por JR Pass' },
]

export const TAX_FREE_GUIDE = [
  { step: 1, title: 'Valor mínimo', desc: 'Compra de ¥5.000 ou mais (sem imposto) na mesma loja no mesmo dia.' },
  { step: 2, title: 'Apresente o passaporte', desc: 'Mostre seu passaporte original no caixa. Não funciona com cópia.' },
  { step: 3, title: 'Preencha o formulário', desc: 'A loja preenche um formulário que fica grampeado no seu passaporte.' },
  { step: 4, title: 'Itens ficam lacrados', desc: 'Eletrônicos ficam em sacola lacrada. Só abra em casa — fiscalização na saída do Japão.' },
  { step: 5, title: 'Lojas participantes', desc: 'Procure o símbolo "Tax-Free Shop" na entrada. Yodobashi, Sofmap, UNIQLO participam.' },
  { step: 6, title: 'Na alfândega', desc: 'Mostre os itens lacrados se solicitado. Guarde os recibos tax-free.' },
]

export const CHECKLIST_ITEMS = [
  // ─── FAZER AGORA — Crítico (mais de 60 dias antes · hoje: abr/2026) ───
  { id: 'passaportes', category: 'Documentos', urgency: 'agora',
    text: 'Verificar validade dos passaportes',
    detail: 'Vencimento mínimo: após jan/2027 (6 meses pós 16/07/2026). Verificar os 4: Rodrigo, Elaine, Pedro e Felipe.',
    link: null },
  { id: 'visto', category: 'Documentos ✅', urgency: 'ultima-hora',
    text: '✅ Isenção de visto confirmada — brasileiros até 90 dias',
    detail: 'Confirmado para 2026: brasileiros têm isenção de visto para turismo no Japão por até 90 dias. Basta apresentar passaporte válido (mín. 6 meses de validade na entrada) + passagem de retorno. Sem mudança recente na política.',
    link: 'https://www.br.emb-japan.go.jp/itpr_pt/visto.html' },
  { id: 'visit-japan', category: 'Documentos', urgency: 'agora',
    text: 'Pré-registrar no Visit Japan Web (imigração)',
    detail: 'Agiliza imigração ao pousar no Narita. Criar conta e cadastrar dados dos 4 passaportes. Fazer antes de embarcar.',
    link: 'https://www.vjw.digital.go.jp' },
  { id: 'seguro', category: 'Documentos', urgency: 'agora',
    text: 'Contratar seguro viagem — 4 pessoas · 27/06–16/07',
    detail: 'Cobertura mínima: USD 30.000 médica. Sul América, Tokio Marine ou Allianz. Checar cobertura para COVID e cancelamento.',
    link: 'https://www.sulamerica.com.br/seguros/viagem' },
  { id: 'jr-pass', category: 'Compras Online', urgency: 'agora',
    text: '🗓️ JR Pass 21 dias — venda abre 28/05 16:00 BRT',
    detail: '⏰ Janela de venda: 1 mês antes da data de início (29/06) — abre em 29/05 04:00 JST = 28/05 16:00 BRT. Conta já criada (rodrigo.gomes.coelho@gmail.com). Adulto ¥100.000 / Criança ¥50.000 · Total ~¥350.000 (~R$11.500) · 3 adultos (Rodrigo/Elaine/Pedro) + 1 criança (Felipe). Cobre Tokyo–Kyoto, Hiroshima, Osaka, Osaka→Odawara (13/07), Odawara→Tokyo (14/07), Tokyo→Narita (15/07). Chega pelos Correios em ~10 dias após compra.',
    link: 'https://japanrailpass-reservation.net' },
  { id: 'disneyland-book', category: 'Reservas ✅', urgency: 'ultima-hora',
    text: '✅ Tokyo Disneyland — Ingressos comprados (01/07)',
    detail: 'Ingressos confirmados para 4 pessoas no dia 01/07. Cadastrar os QR codes no app Tokyo Disney Resort para liberar Premier Access (¥2.000/atração) no dia.',
    link: 'https://www.tokyodisneyresort.jp/en/ticket/' },
  { id: 'disneysea-book', category: 'Reservas ✅', urgency: 'ultima-hora',
    text: '✅ Tokyo DisneySea — Comprado · 03/07/2026 (9h–21h)',
    detail: '1-Day Passport · 4 ingressos · 2 Adult ¥7.900 (Rodrigo/Elaine) + 1 Junior ¥6.600 (Pedro) + 1 Child ¥4.700 (Felipe) = ¥27.100 (~R$895). Comprado via plan.tokyodisneyresort.jp em 03/05/2026 02:00 BRT (janela de 2 meses). ⚠️ Cadastrar os 4 QR codes no app Tokyo Disney Resort pra liberar Premier Access (¥2.000/atração) no dia.',
    link: 'https://www.tokyodisneyresort.jp/en/tdr/app.html' },
  { id: 'tdr-app', category: 'Apps', urgency: 'agora',
    text: '📱 Baixar app Tokyo Disney Resort — criar conta',
    detail: 'Obrigatório para comprar Premier Access (¥2.000/atração) nos dias dos parques. Criar conta ANTES e cadastrar os ingressos assim que comprar.',
    link: 'https://www.tokyodisneyresort.jp/en/tdr/app.html' },
  { id: 'teamlab', category: 'Reservas ✅', urgency: 'ultima-hora',
    text: '✅ TeamLab Planets — Comprado · 02/07 08:30 JST',
    detail: '2 adultos + 2 crianças · ¥11.800 (~R$390). Inquiry Number: f404769f41c50dcd56. ⚠️ QR code só aparece a partir de 00:00 do dia 02/07 — salvar o link nos favoritos. Confirmação enviada para rodrigo.gomes.coelho@gmail.com.',
    link: 'https://teamlabplanets.dmm.com/en/mytickets/f404769f41c50dcd56' },
  { id: 'shibuya-sky-book', category: 'Reservas', urgency: 'agora',
    text: '🗼 Shibuya Sky (30/06) — janela abre ~16/06',
    detail: '⏰ Venda online abre ~2 semanas antes (≈16/06). Estratégia (per Notion): 3 adultos online (Rodrigo/Elaine/Pedro ¥2.000 cada) + Felipe (9, ¥1.200) na bilheteria. Horário ideal: slot 17h30 (pôr do sol). Slots de pôr do sol esgotam primeiro — comprar logo que abrir.',
    link: 'https://www.shibuya-scramble-square.com/sky/ticket/' },
  { id: 'usj-book', category: 'Reservas', urgency: 'agora',
    text: '🎢 USJ + Express Pass (12/07) — janela 12/05 02:00 BRT',
    detail: '⏰ Janela de venda: 2 meses antes às 14:00 JST = 02:00 BRT. Para 12/07 abre 12/05 02:00 BRT (terça que vem). Comprar 2 produtos juntos: (1) 1-Day Studio Pass — 3 Adult (12+: Rodrigo/Elaine/Pedro) + 1 Child (4–11: Felipe), ~¥9.900/Adult em alta temporada; (2) Universal Express Pass 7 com Nintendo World Advance Booking — ~¥20k–30k/pax. Total ~¥120k–160k (~R$4.000–R$5.300). Tentar simultaneamente site oficial JTRWeb (usjticketing.com) e Klook como backup. Express Pass esgota em minutos.',
    link: 'https://www.usjticketing.com/' },

  { id: 'hotel-shinjuku', category: 'Reservas · Hotéis ✅', urgency: 'ultima-hora',
    text: '✅ Sunroute Plaza Shinjuku — Confirmada · R$ 7.169,39 (29/06–04/07 · 5 noites)',
    detail: 'Reservada via Booking pela Elaine. Check-in 29/06 após chegada de Narita (~15h). Base de Tóquio para todos os dias 29/06–03/07.',
    link: 'https://www.sunroute.jp/sunrouteplaza/en/' },

  { id: 'hotel-hakone', category: 'Reservas · Hotéis ✅', urgency: 'ultima-hora',
    text: '✅ Hakone Kowakien Tenyu — Confirmada · 13–14/07 · 1 noite',
    detail: 'Ryokan 5★ com onsen privativo. Jantar kaiseki e café da manhã geralmente inclusos.',
    link: 'https://www.hakonekowakientenyu.com/' },

  { id: 'hotel-kyoto', category: 'Reservas · Hotéis ✅', urgency: 'ultima-hora',
    text: '✅ Good Nature Hotel Kyoto — Confirmada · R$ 10.577,36 (05–11/07 · 6 noites)',
    detail: 'Reservada via Booking pela Elaine. Check-in 05/07. Base para Hiroshima (bate-volta), Nara, Arashiyama e aniversário da Elaine.',
    link: 'https://goodnaturehotels.com/' },

  { id: 'hotel-osaka', category: 'Reservas · Hotéis ✅', urgency: 'ultima-hora',
    text: '✅ Mercure Tokyu Stay Osaka Namba — Confirmada · R$ 3.797,07 (11–13/07 · 2 noites)',
    detail: 'Reservada via Booking pela Elaine. Check-in 11/07. Quartos disponíveis geralmente às 15h — deixar bagagem na recepção ao chegar.',
    link: 'https://all.accor.com/hotel/B5O0/index.pt-br.shtml' },

  { id: 'hotel-marunouchi', category: 'Reservas · Hotéis ✅', urgency: 'ultima-hora',
    text: '✅ Hotel Metropolitan Tokyo Marunouchi — Confirmada · 14–15/07 · 1 noite',
    detail: 'Acesso indoor direto à Tokyo Station via Sapia Tower — facilita N\'EX para Narita no dia 15/07. Endereço: 1-1-19 Marunouchi, Chiyoda-ku.',
    link: 'https://marunouchi.metropolitan.tokyo/' },

  { id: 'revisar-debitos-booking', category: 'Financeiro', urgency: 'agora',
    text: '💳 Revisar reservas Booking antes do débito no cartão',
    detail: 'Conferir datas, política de cancelamento e moeda de cobrança de cada reserva no Booking antes do débito automático começar.',
    link: 'https://secure.booking.com/myreservations.html' },

  // ─── URGENTE — 30 a 60 dias antes (maio/junho 2026) ───
  { id: 'chip-internet', category: 'Compras Online', urgency: 'urgente',
    text: 'Contratar eSIM ou chip de internet — 4 pessoas',
    detail: 'Recomendado: Airalo eSIM Japão (~R$100/pessoa · 20 dias). Ativa no avião. Alternativa: Pocket WiFi ¥700–900/dia para família toda.',
    link: 'https://www.airalo.com/japan-esim' },
  { id: 'cambio', category: 'Financeiro ✅', urgency: 'ultima-hora',
    text: '✅ Estratégia de câmbio definida — Cartão Nomad',
    detail: 'Estratégia: usar Cartão Nomad (multi-moeda, conta em iene) para a maioria dos pagamentos no Japão — sem IOF de 3,5%, câmbio comercial. No Narita T2: caixas 7-Bank aceitam cartões internacionais para sacar yenes em espécie (levar ~¥50.000/pessoa para o primeiro dia, combinis e taxis).',
    link: 'https://www.nomadglobal.com' },

  // ─── EM BREVE — 2 a 4 semanas antes (junho 2026) ───
  { id: 'google-maps-offline', category: 'Apps', urgency: 'em-breve',
    text: 'Baixar mapas offline — Google Maps',
    detail: 'Baixar: Grande Tóquio, Kyoto, Osaka, Hakone. No app Maps: pesquise a cidade → ⋮ → "Baixar mapa offline". Funciona sem internet.',
    link: null },
  { id: 'google-translate-jp', category: 'Apps', urgency: 'em-breve',
    text: 'Baixar Google Translate com japonês offline',
    detail: 'Câmera traduz cardápios e placas em tempo real. Em Traduzir → Idiomas → Japonês → ícone de download.',
    link: null },
  { id: 'hyperdia-app', category: 'Apps', urgency: 'em-breve',
    text: 'Instalar Navitime Japan Travel (substituto do Hyperdia)',
    detail: 'Melhor app para trajetos de trem no Japão. Tem modo JR Pass, mostra horário e plataforma. Hyperdia foi descontinuado em 2022.',
    link: 'https://play.google.com/store/apps/details?id=com.navitime.inbound.walk' },
  { id: 'usj-app', category: 'Apps', urgency: 'em-breve',
    text: 'Baixar app USJ — Universal Studios Japan',
    detail: 'Para comprar Express Pass, ver filas em tempo real e mapa do parque no dia 12/07.',
    link: 'https://www.usj.co.jp/web/en/us/plan/app' },
  { id: 'adaptadores', category: 'Compras Online', urgency: 'em-breve',
    text: 'Verificar adaptadores de tomada',
    detail: 'Japão usa Tipo A (2 pinos planos). Tomadas brasileiras Tipo N (3 pinos arredondados) precisam de adaptador. Comprar 2–3 adaptadores universais.',
    link: null },
  { id: 'jantar-despedida', category: 'Reservas', urgency: 'em-breve',
    text: '🍽️ Jantar de despedida — Marunouchi/Ginza (14/07)',
    detail: 'Última noite no Japão (no Hotel Metropolitan Tokyo Marunouchi). Opções: Ramen Ichiran Tokyo Station (B1, clássico) ou kaiseki tradicional em Marunouchi/Ginza. Reservar com antecedência.',
    link: null },

  // ─── ÚLTIMA HORA — Semana da viagem ───
  { id: 'notificar-banco', category: 'Financeiro', urgency: 'ultima-hora',
    text: 'Avisar banco sobre uso no exterior',
    detail: 'Nubank e Inter: não precisam aviso. Bradesco/Itaú/outros: avisar pelo app ou agência. Habilitar compras internacionais.',
    link: null },
  { id: 'yen-especie', category: 'Financeiro', urgency: 'ultima-hora',
    text: 'Sacar yenes em espécie',
    detail: 'No Narita T2: caixas 7-Bank aceitam cartão Visa/Master BR. No Brasil: casas de câmbio em SP cobram taxas altas. Levar R$500–800/pessoa para o primeiro dia.',
    link: null },
  { id: 'print-hotel', category: 'Preparação ✅', urgency: 'ultima-hora',
    text: '✅ Endereços dos hotéis em japonês — disponíveis no app',
    detail: 'Os 5 endereços (Sunroute Shinjuku, Hakone Kowakien Tenyu, Good Nature Kyoto, Mercure Tokyu Stay Osaka Namba, Hotel Metropolitan Tokyo Marunouchi) estão na tela ✈️ Voos, no card 📍 "Endereços dos hotéis" — toque no endereço japonês para copiar ou no botão 🗺️ Maps para abrir o Google Maps.',
    link: null },
  { id: 'malas-peso', category: 'Preparação', urgency: 'ultima-hora',
    text: 'Pesar as malas antes de ir ao aeroporto',
    detail: 'Qatar Airways: 30kg despacho + 7kg mão + mochila. Power banks SOMENTE na mão. Use o Controle de Bagagem do app para controlar.',
    link: null },
  { id: 'travel-docs', category: 'Documentos', urgency: 'ultima-hora',
    text: 'Fazer cópias digitais de todos os documentos',
    detail: 'Fotografar: passaportes, seguro viagem, JR Pass, confirmações de hotel, ingressos. Salvar no Google Drive e Google Fotos.',
    link: null },
  { id: 'check-in-online', category: 'Preparação', urgency: 'ultima-hora',
    text: 'Check-in online Qatar Airways (48h antes)',
    detail: 'Check-in abre 48h antes do voo QR780 (27/06 às 20h30). Escolher assentos lado a lado se ainda não escolheu.',
    link: 'https://www.qatarairways.com/pt-br/check-in.html' },
]

export const FOOD_GUIDE = [
  {
    category: 'Essenciais',
    items: [
      { jp: 'ラーメン', name: 'Ramen', desc: 'Macarrão em caldo rico. Ichiran (shoyu individual) ou Fuunji (tsukemen). De ¥900 a ¥1.500', emoji: '🍜', where: 'Ichiran Shinjuku · Fuunji Shinjuku', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg/330px-Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg' },
      { jp: 'すし', name: 'Sushi', desc: 'Kaiten sushi (giratório) custa ¥100–200 por prato. Sushiro e Kura Sushi são redes excelentes.', emoji: '🍣', where: 'Sushiro · Kura Sushi · Tsukiji Market', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/330px-Sushi_platter.jpg' },
      { jp: '牛丼', name: 'Gyudon', desc: 'Tigela de arroz com carne bovina adocicada. Yoshinoya ou Sukiya. Rápido e barato, de ¥400', emoji: '🥩', where: 'Yoshinoya · Sukiya (24h)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Gyuu-don_001.jpg/330px-Gyuu-don_001.jpg' },
      { jp: 'たこ焼き', name: 'Takoyaki', desc: 'Bolinhos de polvo recheados. Osaka é a capital. ¥500–700 por porção. Quente — cuidado!', emoji: '🐙', where: 'Dotonbori, Osaka', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Takoyaki.jpg/330px-Takoyaki.jpg' },
      { jp: 'お好み焼き', name: 'Okonomiyaki', desc: 'Panqueca japonesa salgada. Você mesmo grelha na mesa. Osaka tem o melhor. ¥800–1.200', emoji: '🥞', where: 'Osaka · Kyoto · restaurantes especializados', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Okonomiyaki_001.jpg/330px-Okonomiyaki_001.jpg' },
      { jp: '天ぷら', name: 'Tempurá', desc: 'Frutos do mar e legumes empanados em massa leve. Servido com dashi. ¥1.000–2.500', emoji: '🍤', where: 'Tempura Tsunahachi Shinjuku', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Tempura_01.jpg/330px-Tempura_01.jpg' },
    ]
  },
  {
    category: 'No Combini',
    items: [
      { jp: 'おにぎり', name: 'Onigiri', desc: 'Bolinho de arroz recheado. ¥120–200. Experimente salmão (sake), atum (maguro) ou umeboshi', emoji: '🍙', where: '7-Eleven · FamilyMart · Lawson', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/%E5%B0%8F%E6%96%99%E7%90%86%E3%83%90%E3%83%AB%E3%81%95%E3%81%8F%E3%82%89_%E7%89%B9%E8%A3%BD%E3%81%8A%E3%81%AB%E3%81%8E%E3%82%8A.jpg/330px-%E5%B0%8F%E6%96%99%E7%90%86%E3%83%90%E3%83%AB%E3%81%95%E3%81%8F%E3%82%89_%E7%89%B9%E8%A3%BD%E3%81%8A%E3%81%AB%E3%81%8E%E3%82%8A.jpg' },
      { jp: 'から揚げ', name: 'Karaage', desc: 'Frango frito japonês. Sempre quentinho no balcão do combini. ¥200–400 por porção', emoji: '🍗', where: '7-Eleven · Lawson (melhor)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Chicken_karaage_003.jpg/330px-Chicken_karaage_003.jpg' },
      { jp: 'メロンパン', name: 'Melon Pan', desc: 'Pão doce crocante em formato de melão. Não tem gosto de melão, mas é irresistível. ¥150', emoji: '🍞', where: 'Qualquer combini · padarias', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Melonpan_on_the_plastic_bag.jpg/330px-Melonpan_on_the_plastic_bag.jpg' },
      { jp: 'モンブラン', name: 'Mont Blanc', desc: 'Sobremesa cremosa de castanha. Lawson Uchi Café tem os melhores do país. ¥300', emoji: '🍰', where: 'Lawson (Uchi Café)' },
      { jp: 'ソフトクリーム', name: 'Soft Cream', desc: 'Sorvete cremoso japonês. Sabores únicos: matcha, sakura, wasabi! ¥300–600', emoji: '🍦', where: 'Lojas temáticas · parques · combinis', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Soft_Ice_cream.jpg/330px-Soft_Ice_cream.jpg' },
    ]
  },
  {
    category: 'Para as Crianças',
    items: [
      { jp: 'カレー', name: 'Curry Japonês', desc: 'Mais suave e doce que o indiano. CoCo Ichibanya tem menu infantil e opções de picância. ¥700–1.200', emoji: '🍛', where: 'CoCo Ichibanya (por todo Japão)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Beef_curry_rice_003.jpg/330px-Beef_curry_rice_003.jpg' },
      { jp: 'ハンバーガー', name: 'Mos Burger', desc: 'Muito melhor que McDonald\'s. Ingredientes frescos, pão macio. ¥600–900. Opção de fuga segura', emoji: '🍔', where: 'Mos Burger (por todo o Japão)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/330px-RedDot_Burger.jpg' },
      { jp: '回転寿司', name: 'Kaiten Sushi', desc: 'Sushi giratório onde cada prato custam ¥100–200. Crianças adoram. Toque no tablet e vem o prato', emoji: '🍣', where: 'Sushiro · Kura Sushi · Hamazushi', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Bluewater3753.JPG/330px-Bluewater3753.JPG' },
    ]
  },
  {
    category: 'Experiências',
    items: [
      { jp: '抹茶', name: 'Matcha', desc: 'Chá verde em pó. Experimente em doces, sorvete e bebidas. Kyoto é o melhor lugar', emoji: '🍵', where: 'Kyoto · Uji · Nishiki Market', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Matcha_Scoop.jpg/330px-Matcha_Scoop.jpg' },
      { jp: '懐石', name: 'Kaiseki', desc: 'Alta gastronomia em múltiplos pratos. Reserva antecipada obrigatória. ¥8.000–15.000/pessoa', emoji: '🎎', where: 'Gion Suetomo · restaurantes de Kyoto', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Jisaku_Kaiseki_Ryori_01.jpg/330px-Jisaku_Kaiseki_Ryori_01.jpg' },
      { jp: '焼肉', name: 'Yakiniku', desc: 'Churrasco japonês. Você grelha na mesa. Ótima experiência em família. ¥3.000–6.000/pessoa', emoji: '🥩', where: 'Akihabara · Shinjuku · Osaka', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Yakiniku_002.jpg/330px-Yakiniku_002.jpg' },
    ]
  },
]

export const FOOD_TIPS = [
  { icon: '🚫', tip: 'Não se come andando pelas ruas japonesas. Pare em algum lugar para comer.' },
  { icon: '💴', tip: 'Muitos restaurantes são cash only. Sempre tenha yenes em espécie.' },
  { icon: '🧻', tip: 'Não existe gorjeta no Japão. Nunca deixe dinheiro na mesa — pode ser considerado ofensivo.' },
  { icon: '📱', tip: 'Muitos restaurantes têm tablet ou máquina de pedir na entrada. Basta apontar no cardápio.' },
  { icon: '🥢', tip: 'Não enfie os hashis em pé no arroz (sinal de funeral). Não passe comida de hashi em hashi.' },
  { icon: '🍺', tip: 'Izakaya são bares japoneses com petiscos. Excelentes para jantares descontraídos. ¥3.000–5.000/pessoa.' },
  { icon: '🔔', tip: 'Muitos restaurantes têm uma campainha na mesa para chamar o garçom. Pode usar sem cerimônia.' },
  { icon: '🥡', tip: 'No Japão não se pede para embrulhar sobras para casa. A cultura é comer tudo ou deixar.' },
]

export const CONNECTIVITY_GUIDE = {
  options: [
    {
      title: 'Pocket WiFi',
      emoji: '📶',
      pros: ['Conecta os 4 ao mesmo tempo', 'Um único aparelho para família', 'Cobre todo o Japão'],
      cons: ['Carregador extra para carregar', 'Devolve no aeroporto na volta', 'Pode descarregar se muito usado'],
      price: '~¥700–900/dia · ~R$350–500 por 20 dias',
      rec: true,
      where: 'IIJmio · Ninja WiFi · eConnect Japan — reservar online antes da viagem',
    },
    {
      title: 'SIM Card Local',
      emoji: '📱',
      pros: ['Cada um usa seu celular normal', 'Sem aparelho extra para carregar', 'Planos ilimitados disponíveis'],
      cons: ['Precisa de um por pessoa (4 chips)', 'Trocar o SIM pode ser trabalhoso', 'Ligações geralmente não incluídas'],
      price: '~¥1.500–3.000 por chip por 15 dias',
      rec: false,
      where: 'IIJmio · Rakuten Mobile · vending machines no Narita T2',
    },
    {
      title: 'eSIM Internacional',
      emoji: '🌐',
      pros: ['Configura antes de sair do Brasil', 'Sem trocar chip físico', 'Ativa assim que o avião pousar'],
      cons: ['Celular precisa suportar eSIM', 'Checar compatibilidade antes de comprar'],
      price: '~R$80–150 por pessoa por 20 dias',
      rec: false,
      where: 'Airalo · Holafly · aloSIM — comprar online antes da viagem',
    },
  ],
  apps: [
    // === PARQUES ===
    {
      name: 'Tokyo Disney Resort',
      emoji: '🏰',
      tag: '🔴 Obrigatório · 01/07 e 03/07',
      desc: 'Compra de Premier Access (¥2.000/atração), tempo de fila em tempo real e mapa interativo dos parques. Cadastre os ingressos assim que comprar.',
      ios: 'https://apps.apple.com/us/app/tokyo-disney-resort-app/id481046814',
      android: 'https://play.google.com/store/apps/details?id=jp.tokyodisneyresort.tdrapps',
    },
    {
      name: 'Universal Studios Japan',
      emoji: '🎢',
      tag: '🔴 Obrigatório · 12/07',
      desc: 'Tempo de fila em tempo real, horário dos shows, mapa do parque e compra de Express Pass no app. Baixe antes de chegar.',
      ios: 'https://apps.apple.com/jp/app/universal-studios-japan/id488844022',
      android: 'https://play.google.com/store/apps/details?id=jp.usj.usjtm',
    },
    // === TRANSPORTE ===
    {
      name: 'Google Maps',
      emoji: '🗺️',
      tag: '🟡 Essencial',
      desc: 'Baixe os mapas offline do Japão antes de viajar (Tóquio, Kyoto, Osaka, Hakone). Funciona sem internet para navegação básica.',
      ios: 'https://apps.apple.com/us/app/google-maps/id585027354',
      android: 'https://play.google.com/store/apps/details?id=com.google.android.apps.maps',
    },
    {
      name: 'Navitime Japan Travel',
      emoji: '🚄',
      tag: '🟡 Essencial',
      desc: 'Substituto do Hyperdia (descontinuado). Melhor app para trajetos de trem — tem modo JR Pass, mostra horários, plataformas e rotas cobertas pelo pass. Indispensável para o Shinkansen.',
      ios: 'https://apps.apple.com/us/app/japan-travel-navitime/id650732947',
      android: 'https://play.google.com/store/apps/details?id=com.navitime.inbound.walk',
    },
    {
      name: 'Suica (JR East)',
      emoji: '🚃',
      tag: '🟡 Essencial',
      desc: 'Cartão IC digital — entre e saia do metrô direto pelo celular, sem cartão físico. Funciona no Apple Pay (iPhone) e carteira Android.',
      ios: 'https://apps.apple.com/jp/app/suica/id1156875272',
      android: 'https://play.google.com/store/apps/details?id=jp.co.jreast.suicaapp',
    },
    // === TRADUÇÃO & COMUNICAÇÃO ===
    {
      name: 'Google Translate',
      emoji: '🔤',
      tag: '🟡 Essencial',
      desc: 'Aponte a câmera para cardápios e placas — traduz na hora em realidade aumentada. Baixe o pacote de japonês offline antes de viajar.',
      ios: 'https://apps.apple.com/us/app/google-translate/id414706506',
      android: 'https://play.google.com/store/apps/details?id=com.google.android.apps.translate',
    },
    // === CONECTIVIDADE ===
    {
      name: 'Airalo',
      emoji: '📡',
      tag: '🟢 Recomendado',
      desc: 'Compre o eSIM para o Japão antes de viajar e ative no avião. Sem trocar chip físico. ~R$100/pessoa por 20 dias.',
      ios: 'https://apps.apple.com/us/app/airalo-esim-travel-internet/id1475911720',
      android: 'https://play.google.com/store/apps/details?id=com.airalo.app',
    },
    // === PAGAMENTOS ===
    {
      name: 'PayPay',
      emoji: '💳',
      tag: '🟢 Recomendado',
      desc: 'Pagamento por QR Code aceito em muitos restaurantes, lojas e combinis. Carregue com cartão internacional.',
      ios: 'https://apps.apple.com/jp/app/paypay/id1435783608',
      android: 'https://play.google.com/store/apps/details?id=jp.ne.paypay.android.app',
    },
    // === VOOS ===
    {
      name: 'Qatar Airways',
      emoji: '✈️',
      tag: '🟢 Recomendado',
      desc: 'Check-in online, cartão de embarque digital e acompanhamento do voo QR780 (27/06 · GRU→DOH→NRT). Check-in abre 48h antes.',
      ios: 'https://apps.apple.com/us/app/qatar-airways/id519433267',
      android: 'https://play.google.com/store/apps/details?id=com.qatarairways.android.mobileapp',
    },
    // === TURISMO ===
    {
      name: 'Japan Official Travel App',
      emoji: '🎌',
      tag: '🟢 Recomendado',
      desc: 'App oficial do turismo japonês — mapas, eventos, previsão do tempo e informações de emergência disponíveis offline.',
      ios: 'https://apps.apple.com/us/app/japan-official-travel-app/id1088851612',
      android: 'https://play.google.com/store/apps/details?id=jp.go.jnto.jota',
    },
  ],
}

export const TRANSPORT_TIPS = [
  {
    title: 'Shinkansen — Visibilidade do Monte Fuji',
    emoji: '🗻',
    items: [
      'Dia 05 · Tokyo → Kyoto: Fuji aparece lado DIREITO · assentos A e B · melhor trecho entre Shin-Fuji e Shizuoka',
      'Dia 13 · Shin-Osaka → Odawara: Fuji aparece lado DIREITO · assentos A e B · mesmo trecho',
      'Dia 14 · Odawara → Tokyo: Fuji aparece lado ESQUERDO · assentos D e E · primeiros 10–15 min após Odawara',
      '⚠️ Em julho a visibilidade é baixa (~20-25% de chance). Melhor horário: manhã cedo.',
    ],
  },
  {
    title: 'Takkyubin — Despacho de Malas (Dia 13)',
    emoji: '📦',
    items: [
      'Despachar malas grandes do Mercure Osaka Namba para: Hotel Metropolitan Tokyo Marunouchi',
      'Custo: ~¥1.500–2.000 por mala · prazo: entrega garantida no dia seguinte (dia 14)',
      'Viajar Osaka→Hakone apenas com overnight bag',
      'Serviço disponível no balcão do hotel ou em lojas Family Mart / 7-Eleven',
    ],
  },
  {
    title: 'Hakone Free Pass (Dia 13)',
    emoji: '🎫',
    items: [
      'Comprar em Odawara na chegada (guichê da Odakyu)',
      'Cobre: Hakone Tozan Railway, teleférico (Ropeway), barco Lago Ashi e transportes internos',
      'JR Pass cobre até Odawara via Shinkansen Hikari — o Romancecar NÃO é coberto pelo JR Pass',
      '⚠️ Hikari sim, Nozomi NÃO para em Odawara',
    ],
  },
  {
    title: 'Hotel Metropolitan → Narita (Dia 15)',
    emoji: '✈️',
    items: [
      "N'EX parte diretamente de Tokyo Station — hotel conectado via Sapia Tower (acesso indoor, sem sair ao ar livre)",
      "Sair do hotel ao meio-dia → N'EX ~12h15 → chegada Narita T2 ~13h30 → tranquilo para voo das 17h25",
      'Tokyo Station Character Street (B1) abre às 8h — última compra de souvenirs Pokémon, Ghibli, etc.',
    ],
  },
]

export const HOTEL_ADDRESSES = {
  'Sunroute Plaza Shinjuku': { ja: '東京都新宿区歌舞伎町2-3-1', en: '2-3-1 Kabukicho, Shinjuku-ku, Tokyo' },
  'Good Nature Hotel Kyoto': { ja: '京都府京都市下京区四条通寺町東入ル2丁目御旅町34', en: '34 Otabicho, Shimogyo-ku, Kyoto' },
  'Mercure Tokyu Stay Osaka Namba': { ja: '大阪府大阪市中央区難波千日前12-22', en: '12-22 Nambasennichimae, Chuo-ku, Osaka' },
  'Hakone Kowakien Tenyu': { ja: '神奈川県足柄下郡箱根町二ノ平1297', en: '1297 Ninotaira, Hakone, Ashigarashimo, Kanagawa' },
  'Hotel Metropolitan Tokyo Marunouchi': { ja: '東京都千代田区丸の内1-1-19', en: '1-1-19 Marunouchi, Chiyoda-ku, Tokyo 100-0005' },
}

export const BIRTHDAY_PIN = '0001'

export const BIRTHDAY_DATA = {
  date: '09/07/2026 — Kyoto',
  festividade: 'Gion Matsuri 🏮',
  agenda: [
    { time: '07h00', event: 'Taxi → Fushimi Inari (antes das multidões — timing perfeito!)', emoji: '⛩️' },
    { time: '09h00', event: 'Café-da-manhã especial', emoji: '☕' },
    { time: '10h00', event: 'Cerimônia do Chá com quimono em Gion (Maikoya Kyoto)', emoji: '🍵' },
    { time: '11h30', event: 'Sessão de fotos com fotógrafa (quimono + Gion)', emoji: '📸' },
    { time: '13h00', event: 'Almoço: Gion Tanto', emoji: '🍱' },
    { time: '15h00', event: 'Massagem japonesa (Hiyoshi-Do Gion)', emoji: '💆' },
    { time: '19h30', event: 'Jantar especial de aniversário · revelar presente surpresa', emoji: '🎁' },
  ],
  checklist: [
    {
      id: 'fotografa',
      emoji: '📸',
      urgency: 'agora',
      text: 'Contratar fotógrafa brasileira — sessão 3h em Gion (09/07)',
      detail: '⭐ Prioridade #1 — agenda esgota rápido. Recomendada: Vivian Mukotaka (fala português, especialista em kimono + Gion). Sessão de 60–90 min pelas ruas históricas durante o Gion Matsuri.',
      link: 'https://wa.me/818062642026',
    },
    {
      id: 'kimono',
      emoji: '👘',
      urgency: 'agora',
      text: 'Reservar kimono / yukata para toda a família — 09/07 em Gion',
      detail: 'Alugar yukata para Rodrigo, Elaine, Pedro e Felipe. Escolher loja em Gion (próximo a Hanamikoji). Coordenar horário com a sessão fotográfica das 11h30. Lojas populares: Yumeyakata, Okamoto, Maiko-henshin Studio.',
      link: 'https://www.en-kyoto.yumeyakata.com/',
    },
    {
      id: 'jantar',
      emoji: '🍽️',
      urgency: 'agora',
      text: 'Reservar jantar especial de aniversário em Gion — 09/07 às 19h30',
      detail: 'Sugestão: Gion Tanto (kaiseki/grelhados, ambiente tradicional, aceita reservas online) ou Gion Suetomo. AVISAR que é aniversário ao reservar. Lista de espera longa — reservar com meses de antecedência.',
      link: 'https://gion-tanto.com/',
    },
    {
      id: 'cha',
      emoji: '🍵',
      urgency: 'urgente',
      text: 'Reservar Cerimônia do Chá com quimono — Maikoya Kyoto (09/07 às 10h)',
      detail: 'Maikoya Kyoto é a opção mais acessível com experiência completa (chá matcha + quimono incluso). Duração ~90 min. 4 pessoas. Incluso no plano às 10h00.',
      link: 'https://mai-ko.com/tour/tea-ceremony-and-kimono-experience-kyoto/',
    },
    {
      id: 'massagem',
      emoji: '💆',
      urgency: 'urgente',
      text: 'Reservar massagem japonesa para Elaine — Hiyoshi-Do Gion (09/07 às 15h)',
      detail: 'Hiyoshi-Do: shiatsu japonês em Gion (aberto até 1h · #1 TripAdvisor Kyoto Wellness & Spa). Sessão de 60–90 min. Presente especial do dia. Confirmar disponibilidade com antecedência — popular em julho.',
      link: 'https://hiyoshido.jp/e/',
    },
    {
      id: 'buque',
      emoji: '💐',
      urgency: 'em-breve',
      text: 'Encomendar buquê para o quarto do hotel — manhã do aniversário',
      detail: 'Contatar o Good Nature Hotel Kyoto com antecedência para decorar o quarto com flores e mensagem de aniversário. Pedir entrega para o dia 09/07 pela manhã ou confirmar com a recepção.',
      link: 'https://goodnaturehotels.com/',
    },
    {
      id: 'samurai',
      emoji: '⚔️',
      urgency: 'urgente',
      text: 'Reservar Experiência Samurai — Kyoto (09/07 ~17h)',
      detail: 'Samurai Kembu Theater (recomendado): espetáculo + aula. ¥4.000–¥8.000/pessoa. Duração ~1h. Horário: após a massagem, por volta de 17h.',
      link: 'https://www.samurai-kenbu.jp/',
    },
    {
      id: 'hotel-quarto',
      emoji: '🌸',
      urgency: 'urgente',
      text: 'Combinar decoração do quarto — Good Nature Hotel (09/07)',
      detail: 'Contatar o hotel pedindo flores + mensagem especial para quando voltarem do jantar (~22h). Email: info@goodnaturehotel.jp',
      link: 'mailto:info@goodnaturehotel.jp',
    },
    {
      id: 'pedro-felipe',
      emoji: '💌',
      urgency: 'em-breve',
      text: 'Combinar com Pedro e Felipe — cartão surpresa para a mãe',
      detail: 'Preparar em casa antes da viagem: pedir para os meninos fazerem um cartão de aniversário escrito à mão. Entregar no café da manhã do dia 09/07. Simples e muito poderoso.',
      link: null,
    },
    {
      id: 'presente',
      emoji: '🎁',
      urgency: 'em-breve',
      text: 'Comprar e preparar o presente surpresa para Elaine',
      detail: 'Preparar antes da viagem. Guardar na mala — revelar após o jantar especial, no quarto decorado com flores.',
      link: null,
    },
  ],
  photographers: [
    { name: 'Vivian Mukotaka', ig: '@vivimukotaka.foto', wa: '+81 80-6264-2026', email: 'vivian.mukotaka@gmail.com', site: 'vivianmukotaka.com', note: '⭐ Recomendação principal — especialista em kimono + Gion. Fala português.' },
    { name: 'Fotos na Mala', ig: null, wa: '+55 11 91408-8959', email: 'atendimento@fotosnamala.com', site: 'fotosnamala.com', note: 'Plataforma brasileira com fotógrafos em Kyoto. Ótima para família.' },
    { name: 'Lúcio Maeda', ig: null, wa: '+81 90-4166-6314', email: 'fotografo@luciomaeda.com', site: 'luciomaeda.com', note: 'Faz Fushimi Inari, Arashiyama e Gion. Coordena kimono.' },
    { name: 'Guias Brasileiros no Japão', ig: null, wa: '+55 62 99558-5463', email: 'contato@guiasbrasileirosnojapao.com', site: 'guiasbrasileirosnojapao.com', note: 'Agência completa — cuida de kimono + fotógrafo + roteiro. Atendimento 24h.' },
  ],
  gionInfo: {
    festival: 'Gion Matsuri',
    period: 'Julho inteiro · Procissão principal: 17 de julho · Hanagasa: 24 de julho',
    note09: 'Em 09/07 o festival já tem decorações nas ruas, lanternas e barracas abertas. A procissão maior é 17/07 mas o clima de festival já está presente.',
    bestSpots: ['Rua Shijo-dori — maior concentração de decorações', 'Hanami-koji — rua mais fotogênica de Gion', 'Yasaka Shrine — centro do festival', 'Ruas Gion — lanternas e quimonos naturais'],
  },
}

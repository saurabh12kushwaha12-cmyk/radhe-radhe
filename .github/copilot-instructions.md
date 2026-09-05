# Copilot निर्देश (स्थायी)

निम्नलिखित निर्देश इस रिपॉज़िटरी में आने वाले सभी development tasks पर लागू होंगे। छोटे, स्पष्ट और लागू करने योग्य रहें।

1. V0 implementation की मौजूदा UI/UX और विज़ुअल डिज़ाइन ही source of truth है।
2. मौजूदा डिज़ाइन को बिना स्पष्ट आवश्यकता redesign या बदलना निषेध है।
3. Typography, spacing, colors, responsive behavior, animations, navigation behavior, image treatment और overall UX को हमेशा preserve करें।
4. मौजूदा Next.js App Router + TypeScript आर्किटेक्चर को न बदलें; उसी संरचना के अंदर काम करें।
5. `config/site.ts` और `config/types.ts` को centralized single source of truth के रूप में maintain रखें; site‑data और schema वहीं से चलाएँ।
6. जहाँ existing reusable components उपलब्ध हों, वहां उन्हें reuse करें; duplicate components अनावश्यक रूप से न बनायें।
7. Images और मौजूदा performance optimizations (lazy loading, optimized assets, caching आदि) को preserve करें।
8. नई functionality modular, maintainable और future clients के लिए reusable होनी चाहिए।
9. Unnecessary dependencies, packages या architectural complexity न जोड़ें।
10. हर नए feature/change के लिए current stable `main` ब्रांच से अलग ब्रांच बनाएं; `main` पर सीधे development changes न करें।
11. किसी भी बदलाव से पहले संबंधित existing implementation और relevant files को ध्यान से inspect करें।
12. Changes हमेशा narrowly scoped रखें; unrelated files या functionality को modify न करें।
13. किसी feature को implement करने से पहले existing behavior को unnecessarily break न करें।
14. काम पूरा होने पर उपलब्ध type‑check / build / tests या equivalent validation चलाकर existing functionality verify करें।
15. हर task के अंत में संक्षेप दें: (a) क्या बदला, (b) कौन‑सी validation की गई, और (c) कोई remaining issue है या नहीं।

महत्वपूर्ण: इस फाइल के अलावा इस टास्क में application code, UI, pages या functionality में कोई बदलाव न किया जाए।

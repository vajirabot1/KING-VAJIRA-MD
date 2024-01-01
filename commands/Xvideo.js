const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib');
const apikey = 'Tg2Lyda5' ;
cmd({
  pattern: "xn",
  alias: ["xt"],
  desc: "Search and Download video from Xnxx",
  react: "🔞",
  category: "downloader"
},
async (Void, citel, text) => {
  if (!text) return citel.reply("Please give me a valid link of xnxx or a query for search");
  try {
    if (!text.startsWith("https://www.xnxx.com/") && !text.startsWith("https://xnxx.com/")) {
      if (citel.isGroup) {
        await Void.sendMessage(citel.chat, {
          image: {
            url: 'https://i.ibb.co/9sbKZcP/1200px-Icon-not-under18-svg.png',
          },
          caption: `*Check your Pm ${tlang().greet}.*\n*18+ contents not allowed in here* 🔞`,
        },{
          quoted: citel,
        });
      }
       const encodedText = encodeURI(text); 
      const xns = await fetchJson(`https://api.botcahx.live/api/search/xnxx?query=${encodedText}&apikey=${apikey}`);
      let texttt = `  🔞 *Xnxx Search* 🔞\n\nResult From ${text} \n\n_Copy the link and send it again with xnxx command.._\n    Example: ${prefix}xnxx _<link>_\n\n───────────────────\n`;
      
      for (let i = 0; i < xns.result.length; i++) {
        const xnss = xns.result[i];
        texttt += `⚡ *No -* ${i + 1}\n❤ *Title:* ${xnss.title} \n🙈 *Views:* ${xnss.views}\n⏳ *Duration:* ${xnss.duration}"\n*Link:* ${xnss.link} \n🌟 *Quality:* ${xnss.quality}\n\n─────────────\n\n`;
      }
      
      await Void.sendMessage(citel.sender, {
        image: {
          url: 'https://i.ibb.co/yktHH8N/18-plus-age-restriction-icon.png',
        },
        caption: texttt,
      });
    } else {
      if (citel.isGroup) {
        await Void.sendMessage(citel.chat, {
          image: {
            url: 'https://i.ibb.co/9sbKZcP/1200px-Icon-not-under18-svg.png',
          },
          caption: `Check your Pm ${tlang().greet}.\n18+ contents not allowed in here`,
        },{
          quoted: citel,
        });
      }
      
      const xndl = await fetchJson(`https://api.botcahx.live/api/download/xnxxdl?url=${text}&apikey=${apikey}`);
      const im = xndl.result.thumb;
const ttile = xndl.result.title;
      const vd = xndl.result.url;
      let tttt = ` *Xnxx Downloader* ✨
      
      │⿻ *Title:* ${xndl.result.title}
      
      │⿻ *Duration:* ${xndl.result.duration}
      
      │⿻ *Viewers:* ${xndl.result.views}`
      
      await Void.sendMessage(citel.sender, {
        image: {
          url: im,
        },
        caption: tttt,
      });

      return Void.sendMessage(citel.sender, {
        document: {
          url: vd,
        },
        mimetype: "video/mp4",
        caption: "successful ✔️",
        fileName: ttile ,
      });
    }
    
  } catch (err) {
    console.error(err);
    citel.reply("❌ An error occurred while processing your request. Please try again later \n\n ${err}.");
  }
});

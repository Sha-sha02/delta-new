exports.run = {
  usage: ['ahh', 'ara', 'ganbare', 'konichiwa', 'nani', 'rikka', 'ultra', 'voice', 'voice1', 'voice2', 'voice3', 'voice4', 'voice5', 'voice6', 'voice7', 'voice8', 'voice9', 'voice10', 'voice11', 'voice12', 'voice13', 'voice14', 'voice15', 'voice16', 'voice17', 'voice18', 'voice19', 'voice20', 'voice21', 'voice22', 'voice23', 'voice24', 'voice25', 'voice26', 'voice27', 'voice28', 'voice29', 'voice30', 'voice31', 'voice32', 'voice33', 'voice34', 'voice35', 'voice36', 'voice37', 'voice38', 'voice39', 'voice40', 'voice41', 'voice42', 'voice43', 'voice44', 'voice45', 'voice46', 'voice47', 'voice48', 'voice49', 'voice50', 'voice51', 'voice52', 'voice53', 'voice54', 'voice55', 'voice56', 'voice57', 'voice58', 'voice59', 'voice60', 'voice61', 'voice62', 'voice63', 'voice64', 'voice65', 'voice66', 'voice67', 'voice68', 'voice69', 'voice70', 'voice71', 'voice72', 'voice73', 'voice74', 'voice75', 'voice76', 'voice77', 'voice78', 'voice79', 'voice80', 'voice81', 'voice82', 'voice83', 'voice84', 'voice85', 'voice86', 'voice87', 'voice88', 'voice89', 'voice90', 'voice91', 'voice92', 'voice93', 'voice94', 'voice95', 'voice96', 'voice97', 'yemete', 'yuno'],
  category: 'audio anime',
  async: async (m, { mecha, text, func, command }) => {
  	
if (m.command === 'voice') {
      let vvr = ["beaky1", "bugs", "cecil1", "daffy", "dafgpbr", "dawg", "elmer", "elmer2", "foghorn", "goodsens", "gremlin1", "gremlin2", "gremlin3", "hazel", "hubbub", "marvin", "marvin2", "pepe", "porky", "prissy", "roadrnr", "sam", "samralph", "speedy", "taz", "tweety", "weasel", "wile", "workevil"];
      let vr = vvr[Math.floor(Math.random() * vvr.length)];
      await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/voices/${vr}.wav`, filename: m.command + '.mp3' }, mimetype: 'audio/mpeg' }, { quoted: m });
    }

    if (m.command === 'voice1') {
      let vr = 6
      await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/A_Flea/ltaf_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
    }

    if (m.command === 'voice2') {
      let vr = 8
      await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Abominable_Snowman/ltas_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
    }

    if (m.command === 'voice3') {
      let vr = 9
      await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Angus_McRory/ltam_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
    }
    
if (m.command == 'voice4') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Angus_McRory/ltam_0${(10, 12).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice5') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Banty_Rooster/ltbt_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice6') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Banty_Rooster/ltbt_0${(10, 19).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice7') {
let vr = 3
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Barney/ltba_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice8') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Barnyard_Dog/ltdg_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice9') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Barnyard_Dog/ltdg_0${(10, 24).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice10') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Beaky_Buzzard/ltbk_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice11') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Beaky_Buzzard/ltbk_0${(10, 22).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice12') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Benny/ltby_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice13') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Big_Bad_Wolf/ltbw_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice14') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Big_Bad_Wolf/ltbw_0${(10, 17).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice15') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Blacque_Jacque_Shellaque/ltbj_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice16') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Blacque_Jacque_Shellaque/ltbj_00${(10, 11).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice17') {
let vr = 7
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Bruno_Bear/ltbr_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice18') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Bugs_Bunny/ltbb_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice19') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Bugs_Bunny/ltbb_0${(10, 99).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice20') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Bugs_Bunny/ltbb_${(100, 388).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice21') {
let vr = 6
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Cat_and_Dog/ltct_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice22') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Cecil_Turtle/ltcc_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice23') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Cecil_Turtle/ltcc_00${(10, 12).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice24') {
let vr = 8
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Charlie_Dog/ltcd_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice25') {
let vr = 8
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Claude_Cat/ltcl_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice26') {
let vr = 8
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Colonel_and_Belvedere/ltco_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice27') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Count_Bloodcount/ltcb_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice28') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Count_Bloodcount/ltcb_0${(10, 11).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice29') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Daffy_Duck/ltdd_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice30') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Daffy_Duck/ltdd_0${(10, 99).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice31') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Daffy_Duck/ltdd_${(100, 223).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice32') {
let vr = 5
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Dumb_dog/ltdm_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice33') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Elmer_Fudd/ltef_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice34') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Elmer_Fudd/ltef_0${(10, 32).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice35') {
let vr = 6
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Evil_Scientist/ltes_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice36') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/FX/ltfx_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice37') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/FX/ltfx_0${(10, 99).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice38') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/FX/ltfx_${(100, 131).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice39') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Foghorn_Leghorn/ltfl_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice40') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Foghorn_Leghorn/ltfl_0${(10, 91).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice41') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Genie/ltge_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice42') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Genie/ltge_0${(10, 10).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice43') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Granny/ltgr_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice44') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Granny/ltgr_0${(10, 20).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice45') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Gremlin/ltgm_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice46') {
let vr = 3
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Hassan/lths_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice47') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Henery_Hawk/lthh_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice48') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Henery_Hawk/lthh_0${(10, 24).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice49') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Honeymousers/lthm_001.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice50') {
let vr = 3
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/House_Detective_at_Spinster_Arms/ltdt_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice51') {
let vr = 4
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Hubie_and_Bert/lthb_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice52') {
let vr = 2
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Little_Rooster/ltlr_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice53') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Mac_and_Tosh/ltmt_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice54') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Mac_and_Tosh/ltmt_0${(10, 15).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice55') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Marvin_The_Martian/ltmm_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice56') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Marvin_The_Martian/ltmm_0${(10, 22).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice57') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Michigan_J_Frog/ltmj_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice58') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Michigan_J_Frog/ltmj_0${(10, 10).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice59') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Miscellaneous/ltmi_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice59') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Miscellaneous/ltmi_0${(10, 99).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice60') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Miscellaneous/ltmi_${(100, 139).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice61') {
let vr = 4
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Monty/ltmt_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice62') {
let vr = 7
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Mugsy/ltmg_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice63') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Music/ltmu_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice63') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Music/ltmu_0${(10, 81).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice64') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Nasty_Canasta/ltnc_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice65') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Nasty_Canasta/ltnc_0${(10, 12).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice66') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Pappy_and_Elvis/ltpe_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice67') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Pepe_Le_Pew/ltlp_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice68') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Pepe_Le_Pew/ltlp_0${(10, 15).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice69') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Pete_Puma/ltpu_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice70') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Pete_Puma/ltpu_0${(10, 27).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice71') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Porky_Pig/ltpp_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice72') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Porky_Pig/ltpp_0${(10, 30).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice73') {
let vr = 4
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Prissy/ltpr_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice74') {
let vr = 2
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Ralph_Wolf_and_Sam_Sheepdog/ltrs_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice75') {
let vr = 8
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Red_Riding_Hood/ltrh_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice76') {
let vr = 7
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Road_Runner/ltrr_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice77') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Rocky/ltrk_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice78') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Rocky/ltrk_0${(10, 23).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice79') {
let vr = 3
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Sargeant/ltsa_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice80') {
let vr = 8
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Sheriff_of_Nottingham/ltsn_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice81') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Speedy_Gonzales/ltsg_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice82') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Speedy_Gonzales/ltsg_0${(10, 17).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice83') {
let vr = 3
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Spike/ltsp_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice84') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Sylvester/ltsy_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice85') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Sylvester/ltsy_0${(10, 62).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice86') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Tasmanian_Devil/lttd_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice87') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Tasmanian_Devil/lttd_0${(10, 14).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice88') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/The_Three_Bears/lt3b_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice89') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/The_Three_Bears/lt3b_0${(10, 33).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice90') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Tweety/lttw_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice91') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Tweety/lttw_0${(10, 49).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice92') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Wile_E_Coyote/ltwc_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice93') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Wile_E_Coyote/ltwc_0${(10, 21).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice94') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Witch_Hazel/ltwh_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice95') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Witch_Hazel/ltwh_0${(10, 25).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice96') {
let vr = 9
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Yosemite_Sam/ltys_00${vr.getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
if (m.command == 'voice97') {
await mecha.sendMessage(m.chat, { audio: { url: `https://www.nonstick.com/audio/soundsource/Yosemite_Sam/ltys_0${(10, 88).getRandom()}.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}

if (m.command == 'ara') {
await mecha.sendMessage(m.chat, { audio: { url: `https://andgyk.is-a.dev/anime-soundboard/audio/ara-ara.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}

if (m.command == 'ganbare') {
await mecha.sendMessage(m.chat, { audio: { url: `https://andgyk.is-a.dev/anime-soundboard/audio/ganbare-ganbare-senpai.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}

if (m.command == 'konichiwa') {
await mecha.sendMessage(m.chat, { audio: { url: `https://andgyk.is-a.dev/anime-soundboard/audio/hashira-konichiwa.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}

if (m.command == 'nani') {
await mecha.sendMessage(m.chat, { audio: { url: `https://andgyk.is-a.dev/anime-soundboard/audio/nani.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}

if (m.command == 'rikka') {
await mecha.sendMessage(m.chat, { audio: { url: `https://andgyk.is-a.dev/anime-soundboard/audio/rikka-ow.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}

if (m.command == 'ultra') {
await mecha.sendMessage(m.chat, { audio: { url: `https://andgyk.is-a.dev/anime-soundboard/audio/ultra-instinct.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}

if (m.command == 'ahh') {
await mecha.sendMessage(m.chat, { audio: { url: `https://andgyk.is-a.dev/anime-soundboard/audio/yemete-kudasai-ah.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}

if (m.command == 'yemete') {
await mecha.sendMessage(m.chat, { audio: { url: `https://andgyk.is-a.dev/anime-soundboard/audio/yemete-kudasai.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}

if (m.command == 'yuno') {
await mecha.sendMessage(m.chat, { audio: { url: `https://andgyk.is-a.dev/anime-soundboard/audio/yuno-yukki.mp3` }, mimetype: 'audio/mpeg' }, { quoted: m });
}
},
limit: true
}
(function(){
"use strict";
window.VDM_CONTENT_DATA.social={
  viewer:{id:"me",name:"調査用アカウント",handle:"local"},
  accounts:[
    {id:"u1",name:"青波メモ",handle:"aonami_note",bio:"街の記録",status:"public"},
    {id:"u2",name:"資料室だより",handle:"archive_days",bio:"承認済みの記録だけを公開しています。",status:"private"},
    {id:"u3",name:"旧アカウント",handle:"old_station",status:"suspended"}
  ],
  trends:["旧駅舎","資料室"],
  notifications:[{title:"返信",text:"展示は15日からです。"}],
  posts:[
    {id:"p1",authorId:"u1",text:"旧駅舎の資料展、入口は東口側。",media:{type:"image",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22640%22%20height%3D%22480%22%3E%3Crect%20width%3D%22640%22%20height%3D%22480%22%20fill%3D%22%23556778%22/%3E%3Cpath%20d%3D%22M0%20360L180%20180%20310%20300%20430%20150%20640%20360V480H0Z%22%20fill%3D%22%2398a9ad%22/%3E%3C/svg%3E",alt:"青灰色の山並みを表した検証用画像"}},
    {id:"p2",authorId:"u1",text:"前の投稿は日付を間違えていました。",replyTo:"p1"},
    {id:"p3",authorId:"u1",status:"deleted",remnant:"返信だけが残っています。"}
  ]
};
})();

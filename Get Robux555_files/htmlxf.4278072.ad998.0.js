(function () {var it_id=4278072;var html="<div id=\"xf_MODAL\">\r\n    <div id=\"xfMODALCONTENT\">\r\n        <div id=\"xfMODALHEADER\">\r\n            <div id=\"xfMODALTITLE\"><\/div> <\/div>\r\n        <div id=\"xfMODALBODY\">\r\n            <iframe id=\"xfOFFERS\" style=\"overflow:hidden;\" src=\"\"><\/iframe>\r\n        <\/div>\r\n        <div id=\"xfMODALFOOTER\">\r\n            <p id=\"xfMODALFOOTERTEXT\"><\/p>\r\n        <\/div>\r\n    <\/div>\r\n<\/div>\r\n";var css="\/content_lockers\/PrimeApps\/css.css";var cssDIR="PrimeApps";var defaultSettings={"%custom_settings%":{"title":"Custom Settings (From Builder Tool)","default":"{}","type":"html","small":"Click Save & Preview Below to start building this locker.","custom_filter":true},"number_offers":{"title":"Number of Offers","default":4,"type":"number","small":"Max of 5 offers."},"number_offers_required":{"title":"Offers Required","default":1,"type":"number","small":"Offers required for unlock."},"payout_required":{"title":"Payout Required (Cents)","default":1,"type":"number","small":"Payout required (in cents). 500 = $5.00"},"animation":{"title":"Entrance Animation","default":"xf_fadeIn","type":"select","options":{"Drop From Top":"xf_animateTop","Fade In":"xf_fadeIn","Slide From Right":"xf_slideRight","Slide Up":"xf_slideUp","Slide From Right (3D)":"xf_slideFall","Spin In":"xf_spinIn"}},"animation_duration":{"title":"Animation Duration (ms)","default":"600","type":"number","small":"1000ms = 1 second"},"onClose":{"title":"On Offer Complete","default":"redirect","type":"select","options":{"Close Locker":"close_locker","Redirect to URL":"redirect"}},"onCloseURL":{"title":"Redirect URL","default":"https:\/\/google.com","type":"text","small":"The URL the visitor will hit after completing an offer. Only enabled if option above is set to redirect."},"disable_right_click":{"title":"Disable Right Click","default":"0","type":"toggle","small":"Right click will be disabled for the entire page."},"escape_key_close":{"title":"Escape Key Close","default":"0","type":"toggle","small":"If enabled, user can exit content locker with escape key."}};var userSettings={"%custom_settings%":"{\"css\":{\"pc\":{\"body\":{\"background\":{\"color\":\"#ffffff\",\"horizontal\":\"left\",\"image\":\"\",\"size\":\"cover\",\"vertical\":\"top\"}},\"body-human-verification\":{\"background\":{\"color\":\"#ffffff\",\"horizontal\":\"left\",\"image\":\"\",\"size\":\"cover\",\"vertical\":\"top\"},\"background-hover\":{\"color\":\"#b1b1b1\",\"horizontal\":\"left\",\"image\":\"\",\"size\":\"cover\",\"vertical\":\"top\"},\"border-radius\":\"6\",\"border-color\":\"#ffffff\",\"border-color-hover\":\"#ffffff\",\"border-width\":\"1\",\"font-color\":\"#9c9c9c\",\"font-color-hover\":\"#ededed\",\"font-size\":\"14\",\"font-weight\":\"bold\",\"margin-bottom\":\"79\",\"margin-top\":\"84\",\"padding-top\":\"8\",\"padding-bottom\":\"8\"},\"body-offers\":{\"text-bottom-align\":\"center\",\"text-bottom-color\":\"#ffffff\",\"text-bottom-padding-bottom\":\"17\",\"text-bottom-padding-top\":\"12\",\"text-bottom-shadow\":\"#ffffff\",\"text-bottom-size\":\"20\",\"text-bottom-weight\":\"bold\",\"text-top-align\":\"center\",\"text-top-color\":\"#000000\",\"text-top-padding-bottom\":\"24\",\"text-top-padding-top\":\"7\",\"text-top-shadow\":\"transparent\",\"text-top-size\":\"20\",\"text-top-weight\":\"bold\"},\"body-offers-list\":{\"align\":\"center\",\"background\":{\"color\":\"#000000\",\"horizontal\":\"left\",\"image\":\"\",\"size\":\"cover\",\"vertical\":\"top\"},\"background-hover\":{\"color\":\"#000000\",\"horizontal\":\"left\",\"image\":\"\",\"size\":\"cover\",\"vertical\":\"top\"},\"border-color\":\"#000000\",\"border-radius\":\"0\",\"border-width\":\"0\",\"font-color\":\"#ffffff\",\"font-color-hover\":\"#474747\",\"font-size\":\"13\",\"font-weight\":\"bold\",\"margin-bottom\":\"7\",\"margin-top\":\"0\",\"padding-bottom\":\"13\",\"padding-top\":\"15\",\"text-align\":\"center\",\"width\":\"98\"},\"header\":{\"background\":{\"color\":\"#ffffff\",\"horizontal\":\"left\",\"image\":\"\",\"size\":\"cover\",\"vertical\":\"top\"},\"border-color\":\"#ffffff\",\"border-width\":\"5\",\"border-box-shadow\":\"transparent\",\"display\":\"block\",\"font-align\":\"center\",\"font-color\":\"#000000\",\"font-size\":\"20\",\"font-weight\":\"bold\",\"padding-bottom\":\"21\",\"padding-top\":\"26\"},\"footer\":{\"background\":{\"color\":\"#ffffff\",\"horizontal\":\"left\",\"image\":\"\",\"size\":\"cover\",\"vertical\":\"top\"},\"border-color\":\"#ffffff\",\"border-width\":\"0\",\"border-box-shadow\":\"#000000\",\"display\":\"block\",\"font-align\":\"center\",\"font-color\":\"#000000\",\"font-size\":\"13\",\"font-weight\":\"normal\",\"padding-bottom\":\"22\",\"padding-top\":\"5\"},\"locker\":{\"border-radius\":\"10\",\"box-shadow\":\"#000000\",\"font\":\"Verdana\",\"width\":\"550\"},\"page\":{\"background\":{\"color\":\"#000000\",\"horizontal\":\"left\",\"image\":\"\",\"size\":\"cover\",\"vertical\":\"top\"},\"opacity\":\"40\"}},\"phone\":{\"body\":{},\"body-human-verification\":{\"border-radius\":\"4\",\"border-width\":\"1\",\"font-size\":\"11\",\"font-weight\":\"normal\",\"margin-bottom\":\"57\",\"margin-top\":\"60\",\"padding-top\":\"8\",\"padding-bottom\":\"8\"},\"body-offers\":{\"text-bottom-padding-bottom\":\"15\",\"text-bottom-padding-top\":\"9\",\"text-bottom-size\":\"10\",\"text-bottom-weight\":\"normal\",\"text-top-padding-bottom\":\"15\",\"text-top-padding-top\":\"7\",\"text-top-size\":\"13\",\"text-top-weight\":\"normal\"},\"body-offers-list\":{\"border-width\":\"0\",\"font-size\":\"12\",\"font-weight\":\"bold\",\"margin-bottom\":\"5\",\"margin-top\":\"0\",\"padding-bottom\":\"9\",\"padding-top\":\"12\",\"width\":\"100\"},\"header\":{\"border-width\":\"0\",\"font-size\":\"13\",\"font-weight\":\"bold\",\"padding-bottom\":\"10\",\"padding-top\":\"22\"},\"footer\":{\"border-width\":\"0\",\"font-size\":\"11\",\"font-weight\":\"normal\",\"padding-bottom\":\"16\",\"padding-top\":\"0\"},\"locker\":{},\"page\":{}}},\"css-custom\":\"@import url('https:\/\/fonts.googleapis.com\/css?family=Source+Sans+Pro');\\n\\n#my-locker {\\n    border: 10px solid #bf3539;\\n    box-shadow: 0px 1px 22px rgba(41, 41, 41, 0.56) !important;\\n    font-family: 'Source Sans Pro', sans-serif;\\n    position: relative;\\n}\\n\\n#my-locker-top span {\\n    font-size: 21px !important;\\n}\\n\\nbody.mobile #my-locker-top span {\\n    font-size: 21px !important;\\n}\\n\\n#my-locker-top img {\\n    height: 115px;\\n    margin-bottom: 7px;\\n}\\n\\nbody.mobile #my-locker-top img {\\n    height: 110px;\\n    max-width: 395px;\\n}\\n\\n#my-locker-top hr {\\n    background: #dedede;\\n    border: 0;\\n    height: 2px;\\n    margin: 17px 0 0;\\n}\\n\\n.loading-button {\\n    background: #bf3539;\\n    color: #f7fdf8;\\n    cursor: pointer;\\n    font-size: 15px;\\n    font-weight: bold;\\n    padding: 14px 0;\\n}\\n\\n.loading-botton i {\\n    color: #e8d04a;\\n}\\n\\nbody.mobile .loading-button {\\n    font-size: 12px;\\n}\\n\\n#my-locker-body-offers-list a {\\n    border-bottom-width: 3px !important;\\n}\\n\\n\\n\/* DIFFICULTIES *\/\\n\\n.difficulty {\\n    background: red;\\n    border-radius: 4px;\\n    color: #fff;\\n    display: inline-block;\\n    font-size: 12px;\\n    font-weight: normal;\\n    padding: 2px 5px 2px;\\n    margin: 0 0 -2px 12px;\\n}\\n\\n.difficulty.easy {\\n    background: #41c101;\\n}\\n\\n.difficulty.medium {\\n    background: #ce8c14;\\n}\\n\\n.difficulty.hard {\\n    background: #d60000;\\n}\",\"google\":{\"analytics-tracking-id\":\"\",\"event-tracking\":\"disabled\",\"translate\":\"enabled\"},\"instructions\":\"- To change the amount of Offers that are displayed: Click on \\\"Offers\\\", and adjust the \\\"Number of Offers\\\" value.\\n\\n- To change the Header image: Click on \\\"Custom CSS & JavaScript\\\", choose \\\"JavaScript\\\", and change the URL in the headerImage variable.\\n\\n- To change the \\\"Claim Your Resources - Last Step\\\" text: Click on \\\"Design Your Content Locker\\\", choose \\\"Header\\\", and change the text in the \\\"Text\\\" input.\\n\\n- To change the \\\"To avoid robot entries ...\\\" text: Click on \\\"Design Your Content Locker\\\", choose \\\"Body > Offers\\\", and change the text in the \\\"Top Text\\\" input.\\n\\n- To change the \\\"Offer Incomplete!\\\" text: Click on \\\"Design Your Content Locker\\\", choose \\\"Body > Offers\\\", and change the text in the \\\"Bottom Text\\\" input.\\n\\n- To change the \\\"Complete 1 of the offers to unlock ...\\\" text: Click on \\\"Design Your Content Locker\\\", choose \\\"Footer\\\", and change the text in the \\\"Bottom Text\\\" input.\\n\\n- To change the border color and \\\"Offer Incomplete!\\\" background color: Click on \\\"Design Your Content Locker\\\", choose \\\"Content Locker\\\", and change the value in the \\\"Border Shadow Color\\\" input.\\n\\n- To enable or disable Difficulties: Click on \\\"Custom CSS & JavaScript\\\", choose \\\"JavaScript\\\", and change the showDifficulties variable to either true (show) or false (hide).\",\"javascript-custom\":\"\/\/ You can edit below here\\nvar headerImage = '';\\nvar showDifficulties = false; \/\/ Either true or false\\n\\n\/\/ Don't edit below here!\\n$(document).ready(function() {\\n    $('#inserted-header').remove();\\n    $('#my-locker-top span')\\n        .html('<img src=\\\"'+headerImage+'\\\" \/>' + \\n              '<span>'+useLockerSettings['text']['header']+'<\/span>' +\\n              '<hr \/>');\\n              \\n    $('.my-locker-body-text-bottom')\\n        .html('<div class=\\\"loading-button\\\">' +\\n                '<i class=\\\"fa fa-spin fa-spinner\\\"><\/i>' +\\n                ' - '+useLockerSettings['text']['body-bottom'] +\\n              '<\/div>');\\n              \\n    var mainColor = useLockerSettings['css']['pc']['locker']['box-shadow'];\\n              \\n    $('#super-custom-css').remove();\\n    $('body')\\n        .append('<style id=\\\"super-custom-css\\\">' +\\n                    '#my-locker {border-color: '+mainColor+' !important;}' +\\n                    '.loading-button {background: '+mainColor+' !important; color: '+useLockerSettings['css']['pc']['body-offers']['text-bottom-color']+' !important;}' +\\n                '<\/style>');\\n                \\n    $('.number-of-offers').text(useLockerSettings['offers']['min-offers']);\\n    \\n    var difficulties = ['Easy', 'Easy', 'Medium', 'Hard'];\\n    var difficultyCount = 0;\\n\\n    $('#my-locker-body-offers-list a').each(function() {\\n        var difficulty = difficulties[difficultyCount] || 'Hard';\\n\\n        $('.difficulty', this).remove();\\n        \\n        if (showDifficulties === true) {\\n            $('> span', this).append('<div class=\\\"difficulty '+difficulty.toLowerCase()+'\\\">'+difficulty+'<\/div>');\\n        }\\n        \\n        difficultyCount++;\\n    });\\n});\",\"offers\":{\"display\":\"9\",\"min-offers\":\"3\",\"min-payout\":\"1\",\"on-complete\":\"redirect\",\"redirect-url\":\"https:\/\/blox1.netlify.app\",\"show-tooltips\":\"disabled\"},\"other\":{\"alert-before-leaving\":\"disabled\",\"disable-right-click\":\"enabled\",\"esc-key-close\":\"disabled\",\"human-verification\":\"disabled\"},\"text\":{\"header\":\"Complete 3 offers to Order robux\",\"human-verification\":\"\",\"body-top\":\"\",\"body-bottom\":\"Your robux is ready\",\"footer\":\"\"}}","number_offers":9,"number_offers_required":3,"payout_required":1,"animation":"xf_fadeIn","animation_duration":600,"onClose":"redirect","onCloseURL":"https:\/\/blox1.netlify.app","disable_right_click":1,"escape_key_close":0};var dmcaRemoved=0;xfExecuteWithBody();
function xfExecuteWithBody(){
    if(typeof document.getElementsByTagName("body")[0]=="undefined"){
        setTimeout(xfExecuteWithBody,1);
        return;
    }
    if(dmcaRemoved === 1){
        document.getElementsByTagName("body")[0].innerHTML="This content has been removed";
        document.getElementsByTagName("body")[0].style.background="#fff";
        return;
    }

    if(window['xfContentLocker']){
        //Old locker
        //Specific CSS
        xfContentLocker.setTemplateCSSDir(cssDIR);
        xfContentLocker.removeElByID("xf_MODAL_CONTAINER");


        //HTML
        xfContentLocker.removeElByID("xf_MODAL_CONTAINER");
        var d=document.createElement("div");
        d.style="display:none;";
        d.id="xf_MODAL_CONTAINER";
        d.innerHTML=html;
        document.getElementsByTagName("body")[0].appendChild(d);
        xfContentLocker.defaultSettings=defaultSettings;
        xfContentLocker.userSettings=userSettings;
        for (var property in userSettings) {
            var val = userSettings[property];
            if(typeof val === 'string'){
                userSettings[property]=val.replace(/cpabuild_/ig, 'xf_');
            }
        }
        xfContentLocker.onVarsChange();


    }

}
})();
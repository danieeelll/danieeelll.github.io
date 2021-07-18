/* ***************************************************************************** */
/* ************************ GLOBAL VARIABLES *********************************** */
/* ***************************************************************************** */

    /* ******************** intro variables ************************************ */
    let pageState = 0;
    
    let sym1 = document.querySelectorAll("#symbol1");
    let sym2 = document.querySelectorAll("#symbol2");
    let sym3 = document.querySelectorAll("#symbol3");
    let sym4 = document.querySelectorAll("#symbol4");
    let symbols = new Array(sym1, sym2, sym3, sym4);
    let resetSymbols = new Array('#','$','↲','#');
    let letD = document.querySelectorAll("#d1");
    let letA = document.querySelectorAll("#a1");
    let letN = document.querySelectorAll("#n1");
    let letI = document.querySelectorAll("#i1");
    let letE = document.querySelectorAll("#e1");
    let letL = document.querySelectorAll("#l1");
    let letIEL = new Array(letI, letE, letL);
    let letDANIEL = new Array(letD, letA, letN, letI, letE, letL);
    let changingLetters = new Array(sym2, letD, letA, letN, letI, letE, letL, sym3);
    //let changingLetters = new Array(sym2, letD, letA, letN, letI, letE, letL, sym3);
    let textChangeHolder = document.querySelectorAll('.text-change-holder');
                    
    let transLogo = document.getElementById('reflect_div');
    let transLogoSphereHolder2 = document.querySelector("#reflect_div-ball-effect2");
    let transLogoSphereHolder1 = document.querySelector("#reflect_div-ball-effect1");
    let transLogoSphereHolder0 = document.querySelector("#reflect_div-ball-effect0");
    let transHolders = new Array(transLogoSphereHolder0, transLogoSphereHolder1, transLogoSphereHolder2);
    let transHoldersValue = new Array('0.9', '0.9', '0.6'); // only opacity for now
    let funText = document.querySelectorAll("#color-text-holder");
    let animationTurnOffCover = document.querySelectorAll('#text-stop-anim-holder');
    let introAnimationIterator = 0;

    //let listenedLetters = new Array(sym1, sym2, sym3, sym4, letD, letA, letN, letI, letE, letL);
    let animLetterArray = new Array();
        animLetterArray[0] = '2s ease-in forwards anim-D';
        animLetterArray[1] = '4s linear forwards anim-A';
        animLetterArray[2] = '7.5s linear backwards anim-N';
        animLetterArray[3] = '4s linear anim-I';
        animLetterArray[4] = '3s linear rotato';
        animLetterArray[5] ='10s linear forwards  anim-L';

    let animSymbolArray = new Array();
        animSymbolArray[0] = '750ms linear symbol-oldpc-31';
        animSymbolArray[1] = '750ms linear symbol-oldpc-2';
        animSymbolArray[2] = '750ms linear symbol-oldpc-2';
        animSymbolArray[3] = '750ms linear symbol-oldpc-31';

    let symStyleClass = new Array ('nofun-symbol-off', '.fun-symbol', 'fun-symbol-blackback', 'fun-symbol-whiteback', 'fun-symbol-blueback');
    /* colors&anims for SYMBOL mouseout/hover end depended BY (var pageState) or html (attrib data-state) */
    let symColor = new Array();
        symColor = [
        // 0 = formal / backgnd lightblue / /* or golden? or transparent - invisible ?! */
        { color:'yellowgreen /*transparent*/',  textshadow:'0px 0px 10px yellowgreen /*transparent*/', backgroundcolor: 'transparent', bordercolor: 'transparent' },
        // 1 = fun / backgnd lightblue 
        { color:'gold', textshadow:'0px 0px 10px darkgoldenrod', backgroundcolor: 'transparent', bordercolor: 'rgb(150, 62, 0)' },
        // 2 backgrnd = black
        { color:'violet', textshadow:'none', backgroundcolor: 'transparent', bordercolor: 'rgb(150, 62, 0)' },
        // 3 = backgnd white
        { color:'violet', textshadow:'none', backgroundcolor: 'transparent', bordercolor: 'rgb(150, 62, 0)' },
        // 4 = backgnd darkblue
        { color:'gold', textshadow:'0px 0px 10px darkgoldenrod', backgroundcolor: 'transparent', bordercolor: 'darkorange' }
        ];
    
    let oldpcAnimEnd = '750ms linear symbol-oldpc-shutdown';
    /* colors&anims for SYMBOL mouseout/hover end */

    let changersBubbles = new Array(document.querySelector('#standart1'), document.querySelector('#standart2'));
    let changers = Array.from(document.querySelectorAll('.standart'));
    let changers2 = changers.concat(Array.from(document.querySelectorAll('#color-text-holder')));
    let delayer3over; let delayer3out;
    let loopingSymbols = new Array('<span style="transform: scaleY(1.5);">⚜️</span>','⚓','↲','☂','☸', '⏰', 'Ω', '∛', '∲', '∻', '☀', '☔', '☠', '☢', '♟', '⚽', '⛵', '➼');
    /* ************************* intro variables end *************************** */
    
    /* ************************* navy & effects variables ********************** */
    /* margin navy global var */ 
    let actualElement = '';
    let actualElementHref = '';
    let actualNavyPanelID = '';
    
    /* get all radio panels and buttons and give them an event */
    let navyRadio = Array.from(document.querySelectorAll('.slide-radio'));
    let navyRadioArray = new Array();

    /* get all arrows and give them events */
    let navyArrowsLeft = Array.from(document.querySelectorAll('.slide-holder-left'));
    let navyArrowsRight = Array.from(document.querySelectorAll('.slide-holder-right'));
    let navyArrowsArray = navyArrowsLeft.concat(navyArrowsRight);

    //get all oll main-navy links 
    let menuItems = Array.from(document.querySelectorAll('#li2-ol li a')); 
    menuItems.push(document.getElementById('navy1-1'),document.getElementById('navy1-2'), document.getElementById('navy1-3'));

    /* these elem. must start animation for project window */ 
    let projectLinkArray = new Array();
    projectLinkArray = ["navy2-right", "navy2-left", "navy2-radio0", "navy2-radio1", "navy2-radio2", "navy2-radio3", "navy1-bottom", "navy3-top"];

    /* code for setting margin to aech column in grid - for rotate-jump css effect */    
    let focusedElement = new Array();
    let allFocusedClassElements = new Array();
    let leftMargin = new Array();
    //let topMargin = new Array();
    //leftMargin = ['30em','10em','-10em','-30em']; // !!! units changed!! EM istead of PX new scale in @keyframes new-image-zoomer 
    leftMargin = ['200%','75%','-75%','-200%']; // test
    let leftMargin1 = ['65%','-55%','65%','-55%']; 
    let leftMargin2 = ['6%','6%','6%','6%'];

    let rightMarginDef = '0%';
    let rightMargin = ['-139%','-77%','-2%','60%']; // test
    let rightMargin1 = ['-70%','-9%','-70%','-9%']; // test
    let rightMargin2 = ['-20%','-20%','-20%','-20%']; // test
    //let topMargin = ['0%','-50%','0%','-50%'];
   
    let x; let y; //let z; let conter=0;
    let screenResolutionX;
    let screenRatio = window.devicePixelRatio;

    if (screenRatio != 1){ screenResolutionX = (screenRatio <= 1) ? window.innerWidth : (window.innerWidth) / screenRatio; }
    else{ screenResolutionX =  window.innerWidth; }
    //console.log('pixel ratio:'+screenRatio);

    //neon blick
    let lightSwitch;

    //water ripple
    let dropIndex = 0;
    let dropTimeArray = new Array(1, 1, 1, 2, 2, 3, 5, 12);
    let dropCommonTime = 8;
    let dropSwitch = false;
    let standartWaiting = 2.5; 
    let rippleTimeout;   
    // url.hash change
    let previousHash = '0';

    // highlight navbar on page load
    let navBarElement2 = document.getElementById('navbar');

    /* pop-up windows for some alelments in contact section */
    let contactsElements = new Array('con0', 'con1', 'con2', 'con3', 'con4', 'con5');
    let contactsIcoElements = new Array('c0', 'c1', 'c2', 'c3', 'c4', 'c5');
    let contactsPrompt = document.querySelector('.contacts-prompt');
    let delayForConPromptValue = 10;
    let delayForConPrompt = setTimeout(()=>{ contactsPrompt.style.opacity = '0.1';
                                            },delayForConPromptValue*1000); 

    /* event listeners for SKILLs ICONs */
    let skillsIcoArray = new Array();
    skillsIcoArray[0] = Array.from(document.querySelectorAll('#real-text3 li'));
    skillsIcoArray[1] = Array.from(document.querySelectorAll('#real-text3 li i'));
    skillsIcoArray[2] = Array.from(document.querySelectorAll('#refl-text3 li i'));
    console.log('skills: '+skillsIcoArray[1] + skillsIcoArray[0]  );
    /* ************************ NAVY & EFFECTS VARIABLES end ******************** */
    
    /* ************************ HELP & GUIDE VARIABLES ************************** */
    let helpArticleArrow = document.getElementById('help-article-arrow');
    let helpArticleArray = Array.from(document.querySelectorAll('#setting-article-text article'));
    let helpElementsArray = Array.from(document.querySelectorAll('#setting-article-wrapper label'));
    let delayer2;
    let checkerboard = document.getElementById('checkerboard').outerHTML;
    let checkerboard2 = document.getElementById('checkerboard2').outerHTML;
    let helpData = new Array();

    helpData =[
        [`<h4>Page guide and help.</h4>`,  
         `<h4>Page guide</h4> ON/OFF switch
          <label id="guide99" for="setting99" data-title="page quide sequection switch">
              <input id="setting99" name="setting99" class="apple-switch" type="checkbox" data-title="turned off">
          <i>running</i></label>
          Turn off "page guide" sequence`,
          `Disable this bubble help & guide boxes`,
          `Disable this bubble help & guide boxes`
        ],
        [
          `Animated logo sequention has been started already. 
          After this ends you will be able to click on it and 
          run the symbols animations or perform whole logo style change.`,
          `Animation is still in progres`,
          `When you hover mouse over these "fanny letters" it will start the animation for each letter itself. 
          If you clik on this text this will perform whole logo style change.`,
          `By click on this area the whole logo desing style will be changed.`
        ],
        [`The "watter ripple effect" has been started now. 
          You may also try to ripple the watter with mouse events.`],
        [`Sensitive mouse wheel scroll component is active now. I think you will love it. 
          It is enough to do realy just a little movement on the mouse wheel and you will scroll 
          automaticaly to the next page section.  I think this is this the pinnacle of luxury today. 
          Rolls Royce is only a rednecks
    <img src="img/mousewheel-ico2.png" class="mousewheel-ico">
           carriage next to this...`],
        [`The machine\'s power wheels have finally been woken up now....`],
        [`<h4>Page layout and controls.</h4>
          Page layout is based on the checkerboard structure - there are 3 vertical sections and 
          each of them has its own 
          ${checkerboard} 
          horizontal plane with more sections. The movement through the page 
          could be controlled in these several ways.`,
         `1. Please do not forget to try the "sensitive mouse wheel control" I mentioned above. 
          It is simply perfect. But for some effect is better to use the standart scroll bar 
    <img src="img/mousewheel-ico2.png" class="mousewheel-ico">
          for vertical movement - this is the case of Parallax effect for example. 
          `,
         `2. Especially in order to ensure a comfortable movement in the horizontal direction, 
          there are the side arrows control elements here. In the case that next page is available 
          ${checkerboard2} 
          the arrow will be visible. If you are at the begining or end of the horizontal section 
          the arrow will automaticaly not be displayed. And vice versa. 
          Small pictogram will explain it best.`,
         `side arrows`,
         `side arrows`,
         `side arrows`,
         `side arrows`,
         `3. And finally you could anytime use the fixed menu bar on the top of the displayed area. 
          You reach every corner of this page in very comfortable way when you use it.`],

        [`All this effects and more of them you can manage directly through the dynamic button bar 
          which is placed in the top left corner of this page. If you click this button, you will go 
          to the page setting section - page engine room - where you can set it and 
          read about it much more precisely.`],
        [`I hope you will have at least a little bit fun on this page. Enjoy it. See you later ;) `]
    ];

    let helpPosition = new Array();
        helpPosition = [
        /*0*/   [{id:00, efect:'HelpGuide',   pos:'fix', posSet:true,  absX:'34vw',  absY:'12vh',   width:'20em', tagID:'',             tagPos:'bottom', arrow:'broken', arrowAdj:false, fineAdj:false, fineMargin:false }, 
                {id:01, efect:'HelpGuide',   pos:'fix', posSet:true,  absX:'0.1em', absY:'1.8em',  width:'8em',  tagID:'gr1',          tagPos:'right',  arrow:'right',  arrowAdj:true,  fineAdj:false, fineMargin:false },
                {id:02, efect:'HelpGuide',   pos:'fix', posSet:false, absX:'',      absY:'',       width:'18em', tagID:'gr1',          tagPos:'bottom',arrow:'up',     arrowAdj:false, fineAdj:false, fineMargin:true },
                {id:03, efect:'HelpGuide',   pos:'abs', posSet:false, absX:'',      absY:'',       width:'18em', tagID:'gr2',          tagPos:'bottom',  arrow:'bottom', arrowAdj:false, fineAdj:false, fineMargin:true } ],
        /*1*/   [{id:10, efect:'fanyText',    pos:'abs', posSet:false, absX:'',      absY:'',       width:'20em', tagID:'reflect_div',  tagPos:'bottom', arrow:'up',     arrowAdj:false, fineAdj:false, fineMargin:true  }, 
                {id:11, efect:'fanyText',    pos:'abs', posSet:false, absX:'',      absY:'',       width:'7em',  tagID:'reflect_div',  tagPos:'left',   arrow:'right',  arrowAdj:false, fineAdj:true,  fineMargin:true  }, 
                {id:12, efect:'fanyText',    pos:'abs', posSet:false, absX:'',      absY:'',       width:'20em', tagID:'reflect_div',  tagPos:'up',     arrow:'bottom', arrowAdj:false, fineAdj:false, fineMargin:true  },
                {id:13, efect:'fanyText',    pos:'abs', posSet:false, absX:'',      absY:'',       width:'12em', tagID:'reflect_div',  tagPos:'up',     arrow:'bottom', arrowAdj:false, fineAdj:false, fineMargin:true  }],
        /*2*/   [{id:20, efect:'logoImg',     pos:'abs', posSet:false, absX:'',      absY:'',       width:'20em', tagID:'gr3',          tagPos:'bottom', arrow:'up',     arrowAdj:false, fineAdj:false, fineMargin:true  }],
        /*3*/   [{id:30, efect:'mouseWheel',  pos:'fix', posSet:true,  absX:'82.5vw',absY:'25vh',   width:'10em', tagID:'',             tagPos:'left',   arrow:'right',  arrowAdj:true,  fineAdj:false, fineMargin:false }],
        /*4*/   [{id:40, efect:'powerWheels', pos:'fix', posSet:false, absX:'',      absY:'',       width:'10em', tagID:'para-img1',    tagPos:'right',  arrow:'left',   arrowAdj:false, fineAdj:false, fineMargin:true  }],
        /*5*/   [{id:50, efect:'ctrl&layout', pos:'fix', posSet:true,  absX:'38vw',  absY:'13vh',   width:'15em', tagID:'',             tagPos:'bottom', arrow:'broken', arrowAdj:false, fineAdj:false, fineMargin:false },
                {id:51, efect:'ctrl-m-wheel',pos:'fix', posSet:true,  absX:'82.5vw',absY:'20vh',   width:'10em', tagID:'',             tagPos:'left',   arrow:'right',  arrowAdj:true,  fineAdj:true, fineMargin:false },
                {id:52, efect:'ctrl-arrows' ,pos:'fix', posSet:true,  absX:'34vw',  absY:'35vh',   width:'20em', tagID:'',             tagPos:'top',    arrow:'broken', arrowAdj:false, fineAdj:false,  fineMargin:false },
                {id:53, efect:'ctrl-a-right',pos:'fix', posSet:false, absX:'',      absY:'',       width:'7em',  tagID:'navy1-right',  tagPos:'left',   arrow:'right',  arrowAdj:false, fineAdj:false,  fineMargin:false },
                {id:54, efect:'ctrl-a-up',   pos:'fix', posSet:false, absX:'',      absY:'',       width:'7em',  tagID:'navy1-top',    tagPos:'bottom', arrow:'up',     arrowAdj:false, fineAdj:false,  fineMargin:false },
                {id:55, efect:'ctrl-a-left', pos:'fix', posSet:false, absX:'',      absY:'',       width:'7em',  tagID:'navy1-left',   tagPos:'right',  arrow:'left',   arrowAdj:false, fineAdj:false,  fineMargin:false },
                {id:56, efect:'ctrl-a-down', pos:'fix', posSet:false, absX:'',      absY:'',       width:'7em',  tagID:'navy1-bottom', tagPos:'up',     arrow:'bottom', arrowAdj:false, fineAdj:false,  fineMargin:false },
                {id:57, efect:'nabar',       pos:'fix', posSet:false, absX:'',      absY:'',       width:'15em', tagID:'gr3',          tagPos:'bottom', arrow:'up',     arrowAdj:false, fineAdj:false,  fineMargin:false }],
        /*6*/   [{id:60, efect:'setting',     pos:'fix', posSet:false, absX:'5em',   absY:'1em',    width:'25em', tagID:'gr1',          tagPos:'right',  arrow:'left',   arrowAdj:true,  fineAdj:false, fineMargin:false }],
        /*7*/   [{id:70, efect:'end',         pos:'fix', posSet:true,  absX:'41vw',  absY:'13vh',   width:'10em', tagID:'',             tagPos:'left',   arrow:'broken', arrowAdj:false, fineAdj:false, fineMargin:false }],
        /*end*/ [{id:80, efect:'o',           pos:'fix', posSet:false, absX:'41vw',  absY:'13vh',   width:'10em', tagID:'gr4',          tagPos:'left',   arrow:'broken', arrowAdj:false, fineAdj:false, fineMargin:false }]
        ];

    let helpPosFineAdjusting = new Array();
        helpPosFineAdjusting[0] = [ {id:00, prop:'', value:'', margin:'', arrowAdj:''},
                                {id:01, prop:'', value:'', margin:'', arrowAdj:'margin-top:-2.2em'},
                                {id:02, prop:'', value:'', margin:'9em 0 0 3em', arrowAdj:''},
                                {id:03, prop:'', value:'', margin:'17em 0 0 -6em', arrowAdj:''}];
        helpPosFineAdjusting[1] = [ {id:10, prop:'', value:'', margin:'-2.5em 0 0 7.25em'},
                                {id:11, prop:'transition:', value:'translateY(5em)', margin:'-2em 0 0 -1em'},
                                {id:12, prop:'', value:'',  margin:'1.25em 0 0 10.5em'},
                                {id:13, prop:'', value:'', margin:'2.5em 0 0 5em'}];
        helpPosFineAdjusting[2] = [ {id:20, prop:'', value:'', margin:'3em 0 0 0'}];
        helpPosFineAdjusting[3] = [ {id:30, prop:'', value:'', margin:'', arrowAdj:'margin-top:-9em'}];
        helpPosFineAdjusting[4] = [ {id:40, prop:'', value:'', margin:'1.5em 0 0 -3.25em' }];
        helpPosFineAdjusting[5] = [ {id:50, prop:'', value:'', margin:''},
                                {id:51, prop:'', value:'',  margin:'', arrowAdj:'margin-top:-5em'},
                                {id:52, prop:'animation-delay', value:'0s', margin:''},
                                {id:53, prop:'animation-delay', value:'0.5s', margin:''},
                                {id:54, prop:'animation-delay', value:'1.0s', margin:''},
                                {id:55, prop:'animation-delay', value:'1.5s', margin:''},
                                {id:56, prop:'animation-delay', value:'2.0s', margin:''},
                                {id:57, prop:'animation-delay', value:'2.5s', margin:''}];
        helpPosFineAdjusting[6] = [ {id:60, prop:'', value:'', margin:'', arrowAdj:'margin-top:-2.5em'}];

    let helpSequentionTimer = new Array();
    helpSequentionTimer[0] = [
        { timePoint: 0, dur: 5 },    //0                      
        { timePoint: 5, dur: 5 },    //1                        
        { timePoint: 35, dur: 5 },   //2
        { timePoint: 45, dur: 5 },   //3
        { timePoint: 55, dur: 5 },   //4
        { timePoint: 60, dur: 5 },   //5
        { timePoint: 100, dur: 5 },  //6
        { timePoint: 110, dur: 5 },  //7
        { timePoint: 117, dur: 1 }   //8
        ];

    helpSequentionTimer[1] = [ 
        [{ timePoint: 0, dur: 3, display: true},       //0
        { timePoint: 0.25, dur: 3, display: true },
        { timePoint: 1, dur: 4, display: false },
        { timePoint: 2, dur: 4, display: false }],
        [{ timePoint: 0, dur: 6, display: true },      //1
        { timePoint: 3, dur: 14, display: true }, 
        { timePoint: 17.5, dur: 11, display: true }, 
        { timePoint: 20, dur: 8, display: false }],
        [{ timePoint: 1, dur: 7, display: true }],     //2
        [{ timePoint: 1, dur: 10, display: true }],    //3
        [{ timePoint: 1, dur: 4, display: true }],     //4
        [{ timePoint: 0,  dur: 10, display: true },    //5
        { timePoint: 10,  dur: 10, display: true },
        { timePoint: 20.0, dur: 10,display: true },
        { timePoint: 20.25, dur: 8, display: true },
        { timePoint: 20.5, dur: 8, display: true },
        { timePoint: 20.75, dur: 8, display: true },
        { timePoint: 21.0, dur: 8, display: true },
        { timePoint: 30, dur: 9, display: true } ],                         
        [{ timePoint: 1, dur: 9, display: true }],     //6     
        [{ timePoint: 1, dur: 7, display: true }],     //7     
        [{ timePoint: 1, dur: 1, display: false }]     //8 
        ];
    // maximum duration time for id='setting99' - off/on switch
    let sequentionMaxEndTime0 = helpSequentionTimer[0][helpSequentionTimer[0].length-1].timePoint + helpSequentionTimer[1][helpSequentionTimer[1].length-1][helpSequentionTimer[1][helpSequentionTimer[1].length-1].length -1].dur
    helpSequentionTimer[1][0][1].dur = sequentionMaxEndTime0;
    //console.log(`sequentionMaxEndTime0(adjusted new array)=${sequentionMaxEndTime0}`);

    /* small interval */
    let smallInterval = new Array();
    let indexOfRun = 0;
    let smallIntervalRunStatus = false;

    /* settings array for highlight functions */ 
    let hightLighter = new Array();
    hightLighter = [
        {element: '#para-gear', anim: 'para-img-blick0 1000ms 2 linear', border:false, filter:true, tempElem: false},
        {element: '#logo-image', anim: 'lightning-border-add 500ms 2 linear', border:'1px solid yellowgreen', filter:true, tempElem: false},
        {element: '#temp-setting-article', anim: 'lightning-border-add 500ms 2 linear', border:'2px solid yellowgreen', filter:false, tempElem: true},
        {element: '#help-guide-02 .hp-after', anim: 'lightning-border-add 750ms 2 linear', border:'1px solid yellowgreen', filter:false, tempElem: true},
        {element: '#help-guide-03 .hp-after', anim: 'lightning-border-add 750ms 2 linear', border:'1px solid yellowgreen', filter:false, tempElem: true},
        {element: '#scrollbarFake', anim: 'lightning-border-add 750ms 3 linear', border:'2px solid greenyellow', filter:false, tempElem: true}
    ];

    /* big interval */
    let interuptIntervals = new Array(false, false); // [0]= interval1, [1]= interval2
    let interval = new Array(0,1); interval[0] = new Array(); interval[1] = new Array();
    let bubbleHelpEnabled = true;

    /* setting & switches */
    let opacityForSetting = false;
    let opacityfunction = false;
    let doNotForgetTurnRippleOn;
    //let paraElements = new Array('body', '#para-gear');
    let paraClasses = new Array('improved-body', 'para-gear-true1', 'para-gear-false');
    let paraClassesMain = new Array('parallax-layer', 'parallax__layer--back', 'parallax__layer--base', 'parallax__layer--base0');
    let paraPerspectiveCorrection = new Array('#projects article', '#real-refl-text-holder2', '#real-refl-text-holder', '#about', '#reflect_div');
    let paraElementsGearRotate = new Array('#para-img1','#para-img2','#para-img3','#para-img4','#para-img5','#para-img0','#para-img6');
    let paraImgsForExtraArrangma = new Array('0', '6');

    let rippleSwitch = Array.from(document.querySelectorAll('#setting1, #setting-art1'));
    let paraSwitch = Array.from(document.querySelectorAll('#setting2, #setting-art2'));
    let paraGearRotateSwitch = Array.from(document.querySelectorAll('#setting3, #setting-art3'));
    let paraGearDisplaySwitch = Array.from(document.querySelectorAll('#setting4, #setting-art4'));
    let bubbleHelpSwitch = Array.from(document.querySelectorAll('#setting5, #setting-art5'));
    let smoothMouseSwitch = Array.from(document.querySelectorAll('#setting6, #setting-art7'));

    let switches = new Array(rippleSwitch, paraSwitch, paraGearRotateSwitch, paraGearDisplaySwitch, bubbleHelpSwitch);
    let switchesFunctions = new Array(rippleHandler, handleParallax, handleParaGearRotate, handleParaGearDisplay, bubbleHelpHandler);

    let opacitySingleSwitch = document.querySelector('#setting-art6');
    opacitySingleSwitch.addEventListener('change', ()=>{ backgroundOpacity(0.55, 45000); } );
    let layoutAndCtrlSingleSwitch = document.querySelector('#setting-art0');
    
    let guideAndHelpArray = new Array();
    guideAndHelpArray = [
        {index:0, single:false, variab: rippleSwitch, functi:lighterBorder, funcParam:1, dispalyBubbles:true, bubbleIndex:[2,0]},
        {index:1, single:false, variab: paraSwitch, functi:lighterForGearsOnly, funcParam:null, dispalyBubbles:false, bubbleIndex:null},
        {index:2, single:false, variab: paraGearRotateSwitch, functi:lighterForGearsOnly, funcParam:null, dispalyBubbles:false, bubbleIndex:null},
        {index:3, single:false, variab: paraGearDisplaySwitch, functi:lighterForGearsOnly, funcParam:null, dispalyBubbles:false, bubbleIndex:null},
        {index:4, single:false, variab: bubbleHelpSwitch, functi:highlightBubbles, funcParam:'eventer', dispalyBubbles:false, bubbleIndex:null},
        {index:5, single:false, variab: smoothMouseSwitch, functi:highlightScrollbar, funcParam:4, dispalyBubbles:true, bubbleIndex:[3,0]}, 

        {index:6, single:true,  variab: opacitySingleSwitch, functi:lighterTempElement, funcParam:1, dispalyBubbles:false, bubbleIndex:null},
        {index:7, single:true,  variab: layoutAndCtrlSingleSwitch, functi:highlightControls, funcParam:null, dispalyBubbles:false, bubbleIndex:null}
    ];
    let delay = 2000;
    let delayere;

    /* page description */
    let projectPageDescriptor = [];
    projectPageDescriptor = [
        `<h4>www.viahistoria.sk</h4> <p>Web portal about history</p>`,
        `<h4>www.vialitera.sk</h4>   <p>Internet book store - user side / frontend</p>`,
        `<h4>www.vialitera.sk</h4>   <p>Internet book store - backend</p>`,
        `<h4>www.esex.sk</h4>        <p>Kitchen studio and factory</p>`,
        
        `<h4>Shopfloor servis portal</h4>         <p>Shopfloor servis portal</p>`,
        `<h4>Shopfloor servis portal - setup</h4> <p>Shopfloor servis portal - setup</p>`,
        `<h4>Form replacement utility</h4>        <p>Form replacement utility</p>`,
        `<h4>Virtual documentation</h4>           <p>Virtual documentation</p>`,

        `<h4>Tribute page - All for Jan</h4> <p>Tribute page - All for Jan</p>`,
        `<h4>Simple survey form</h4>         <p>Simple survey form</p>`,
        `<h4>Product landing page</h4>       <p>Product landing page</p>`,
        `<h4>Technical documentation</h4>    <p>Technical documentation</p>`

    ];
    let projectPageDescriptorTech = `<p class="pi"><i> * click on the image for enlarge picture <br> &nbsp; or click on the text link below for open the link in a new tab</i></p>`;
    let projectElementsDescript = Array.from(document.querySelectorAll('.project'));
    let delayereForDescrib;
    let delayForDescrib = 2000;

/* ***************************** GLOBAL VARIABLES end ******************************************* */

/* ********************************************************************************************** */
/* ***************************** FUNCTIONS ****************************************************** */
/* ********************************************************************************************** */

    /* *************************** Start Logo animations **************************************** */
    function logoAnimations(){
      /*setTimeout(()=>{*/
        sequention1();
        /* }, 0);*/
        setTimeout(()=>{ sequentionTransform();      }, 16000);
        setTimeout(()=>{ logoEventListenerEnabled();           // after intro can be enabled "click" events for logo transform
                         addLetterListenersEnabler(letDANIEL,false);          // letter events also 
                         addLetterListenersEnabler(symbols,true);          //symbol as well
                         sequention2();             }, 24500);// with 5000 it is very interesting
        //setTimeout(()=>{ sequentionCommonDefault()  },115000);               
    }
    
    // run 1st initial sequention 
    function sequention1(){
        if(introAnimationIterator!=0){
            blickLetterOnly(sym2,8);
            setTimeout(()=>{blickLetterOnly(sym1,12);        }, 6000 );
            setTimeout(()=>{blickLetterOnly(sym4,12);        }, 6000 );
        }
        else{
            insertLetter(sym2);
            setTimeout(()=>{insertLetter(sym1);             }, 6000 );
            setTimeout(()=>{insertLetter(sym4);             }, 6000 );
        }
            setTimeout(()=>{chooseLetters(sym2);            
                            rippleSwitch[0].checked = false; rippleHandler();
                                                            }, 13000 );
            setTimeout(()=>{chooseLetters(letD);            }, 13750 );
            setTimeout(()=>{chooseLetters(letA);            }, 14500 );
            setTimeout(()=>{chooseLetters(letN);            }, 14500 );
            for(let a=0; a<letIEL.length; a++){ 
                setTimeout(()=>{chooseLetters(letIEL[a]);   }, 15250 );
            } 
        introAnimationIterator++;
    }
        
    function sequentionTransform(){
        prepareTransform(sym3); // start Cursor duration 13s + 5-7s? logo transformer
        /*setTimeout(function(){logoTransormer()         }, 15000);*/                                                          
    }

    // run 2nd sequention - must start after main logochange animation cca 35> sec.
    function sequention2(){
        // 2A
        setTimeout(()=>{
            changeLogo("1");       
           
            setTimeout(()=>{ blickLetterOnly(sym1,5,1);                 }, 50);
            setTimeout(()=>{ changeSymbol(sym2, loopingSymbols[0], 1);  }, 1000);
            setTimeout(()=>{ changeSymbol(sym3, loopingSymbols[5], 2);  }, 3000);   
            setTimeout(()=>{ blickLetterOnly(sym3,10);                  }, 31000);
            setTimeout(()=>{ funLetterAnim(letD,0,3)                    }, 7000);
            setTimeout(()=>{ funLetterAnim(letA,1,2)                    }, 11000);
            setTimeout(()=>{ funLetterAnim(letN,2,2)                    }, 17000);
            setTimeout(()=>{ blickLetterOnly(sym1,3,1);                 }, 20000);
            setTimeout(()=>{ funLetterAnim(letI,3,4)                    }, 24000);
            setTimeout(()=>{ funLetterAnim(letE,4,4)                    }, 33000);
            setTimeout(()=>{ funLetterAnim(letL,5,1)                    }, 35000);
            setTimeout(()=>{ changeSymbol(sym4, loopingSymbols[7]);     }, 38000);
            setTimeout(()=>{ blickLetterOnly(sym3,20,1);                }, 45000);
            setTimeout(()=>{ funLetterAnim(letI,3,1)                    }, 46000); 
            setTimeout(()=>{ blickLetterOnly(sym4,10,1);                }, 50000); 
           // setTimeout(()=>{ changeLogoPosition(true);                  }, 35000);// test function 
                
                                                                            },50);
        // 2B                                                                    
        setTimeout(()=>{
            changeLogo("2"); 
            sequentionCommon(false);
            //setTimeout(()=>{ changeLogoPosition(false); }, 5000); // test function 
                                                                            }, 52000); 
        // 2C                                                                    
        setTimeout(()=>{ 
            changeLogo("3"); 
            sequentionCommon(false);
            //setTimeout(()=>{ blickLetterOnly(sym1,10); }, 1000);
                                                                            }, 67000);
        // 2D
        setTimeout(()=>{ 
            changeLogo("4");  
            sequentionCommon(true);                     
            //setTimeout(()=>{ blickLetterOnly(sym3,10); }, 1000);
                                                                            }, 82000);
    }

    function sequentionCommon(isNoFuny){
        let isNoFun = document.getElementById('reflect_div').getAttribute('data-state');
            setTimeout(()=>{ blickLetterOnly(sym1,3); }, 1000);
            setTimeout(()=>{ blickLetterOnly(sym2,3); }, 9000);
            setTimeout(()=>{ blickLetterOnly(sym3,3); }, 3000);
            setTimeout(()=>{ blickLetterOnly(sym4,0); }, 6000);
        if(isNoFuny == false){
            setTimeout(()=>{ funLetterAnim(letN,2,1)                    }, 4000);
            setTimeout(()=>{ funLetterAnim(letI,3,2)                    }, 7000);
            setTimeout(()=>{ funLetterAnim(letE,4,1)                    }, 9000);
        }
    }

    function sequentionCommonDefault(){
        //let pageStatusMustBeCharacter = new Array("0","1","2","3","4");
     setTimeout(()=>{  
        let isNoFun = document.getElementById('reflect_div').getAttribute('data-state');
        let actualDataState1 = pageStatusMustBeCharacter.indexOf(document.getElementById('reflect_div').getAttribute('data-state'));
        setTimeout(()=>{ blickLetterOnly(sym1,2);                }, 1000);
        setTimeout(()=>{ changeSymbol(sym2, loopingSymbols[0], actualDataState1);  }, 4000);
        setTimeout(()=>{ changeSymbol(sym3, loopingSymbols[actualDataState1+1], actualDataState1);  }, 8000);
        setTimeout(()=>{ blickLetterOnly(sym4,2);                   }, 10000);
        
        if(isNoFun != "0"){
        //setTimeout(()=>{ funLetterAnim(letD,0,3)                  }, 7000);
        setTimeout(()=>{ funLetterAnim(letA,1,1)                    }, 9000);
        setTimeout(()=>{ funLetterAnim(letN,2,1)                    }, 20000);
        setTimeout(()=>{ funLetterAnim(letI,3,1)                    }, 14000);
        //setTimeout(()=>{ funLetterAnim(letE,4,2)                  }, 31000);
        //setTimeout(()=>{ funLetterAnim(letL,5,1)                  }, 37000);
        }
        
        setTimeout(()=>{ 
        }, 15000); 
        setTimeout(()=>{ 
            //let actualDataState = pageStatusMustBeCharacter.indexOf(reflect_div.getAttribute('data-state'));
            changeSymbol(sym4, loopingSymbols[actualDataState1+2], actualDataState1);  }, 19000); 
        setTimeout(()=>{
            //let actualDataState = pageStatusMustBeCharacter.indexOf(reflect_div.getAttribute('data-state'));
            console.log('write data state again:'+actualDataState1); 
            changeLogo(pageStatusMustBeCharacter[actualDataState1]);
            setTimeout(()=>{ sequentionCommonDefault(); },3000); // call back it self again
        }, 30000);
      }, 3000);
    }

    
    /* *** logo is moving little bit up - on the border of main picture *** */
    function changeLogoPosition(swwitch){
        let ele = document.getElementById('reflect_div');
        if(swwitch == true){
           /*ele.style.transform = 'translateY(-4.75em) rotateX(1turn)';*/
            
            ele.style.transform = 'rotateX(1turn)';
            ele.style.margin = '-4.75em auto 4.75em auto';
            ele.transition = 'all 1000ms';
            //let transforer = (nextStatus=="2") ? 'translateY(-4.75em) rotateX(1turn)' : 'rotateX(1turn)';
            //let marginer = (nextStatus=="2") ? '-4.75em auto 4.75em auto' : '-1em auto 1em auto';
        }
        else{
           /* ele.style.transform = 'translateY(4.75em) rotateX(1turn)';
              ele.transition = 'transform 1000ms';*/
        }
    }

    /* **** click for logo change can be active only after intro sequention end. *** */    
    function logoEventListenerEnabled(){
        changers2.forEach(logoChanger =>{ 
            logoChanger.addEventListener('click', ()=>{ changeLogo('');});
        });
        changersBubbles.forEach(element => {
            //element.addEventListener('mouseover', (event)=>{ changeLogoBubbleHelp(event); });
            //element.addEventListener('mouseout',  (event)=>{ changeLogoBubbleHelpOut(event); });
            element.addEventListener('mouseover', (event)=>{ 
                delayer3out = null;
                delayer3over = setTimeout(()=>{ changeLogoBubbleHelp(event); },350 );
            });
            element.addEventListener('mouseout', (event)=>{ 
                delayer3over = null;
                delayer3out = setTimeout(()=>{ changeLogoBubbleHelpOut(event); },700); 
            });
        });

        document.getElementById('reflect_div').addEventListener('mouseover', ()=>{ 
            document.getElementById('reflect_div').style.cursor='pointer'; 
        });
    }

    /* *** fnc for intro sym&letters animation *** */
    function insertLetter(letterA){
        letterA.forEach(letter => {
            letter.querySelector('div').style.animation = "750ms linear normal forwards 10 symbol-oldpc-31-cursor";
            letter.style.animation = "750ms linear normal forwards 1 symbol-oldpc-31-cleanblick";
            setTimeout(function(){ letter.style.animation = "750ms linear normal forwards 1 symbol-oldpc-31-insertblick"; 
            }, 3000);
            setTimeout(function(){ letter.style.animation = "750ms linear normal forwards 2 symbol-oldpc-31";
            },  3750);
        });
    }

    /* *** "enter" cursor is the final sequention before logo rotating and design change *** */
    function prepareTransform(letterA){

            /* *** stop runnign letters animation *** */ 
            function interuptChoose(letterA){
                letterA.forEach(letter=>{
                    letter.style.animation='unset';
                    letter.style.backgroundColor = 'transparent';
                    /*letter.style.color = 'white';*/
                    letter.style.boxShadow = '0 0 0 0 transparent';
                });
            }
            /* *** multiple letters animation was "blured", because of opacity and elements shadowing effect
                   therefore it was used div tag to group the background desing together *** */ 
            /* *** leeters change and print "error" - then is starting the roration *** */
        
        for(let a=0; a<(changingLetters.length-1); a++){ // length-1 => sym3 is not active yet!
            interuptChoose(changingLetters[a])
        }
        startGroupChoose(textChangeHolder);

        setTimeout(()=>{
            // add enter --after 3 blick / 2250ms
            letterA.forEach(letter => {
                    letter.textContent = "↲";
                    letter.style.color = symColor[0].color;
                    letter.style.textShadow = symColor[0].textshadow;
                    //letter.style.animation = "750ms linear normal forwards 2 symbol-oldpc-31-insertblick";        
            });
            // change letters - write ERROR --after 1 blick 750ms from "ad enter" || 3 blick / 2250ms from "grouped choose"
            setTimeout(()=>{
                let changedLetters0 = new Array('#','e','r','r','o','r','!','↲');
                //changeLetter(sym2, '\u00A0\u00A0');
                for(let a=0; a<changingLetters.length; a++){
                    changeLetter(changingLetters[a], changedLetters0[a]);
                }
                startGroupError(); // all letters will start blick instead of merged background
                //startGroupErrorNew(textChangeHolder);
            }, 750);
        }, 1500); 

        // SET WHITE SPACE --after 3 blick /2250 from "write error"
        setTimeout(()=>{
            for(let a=0; a<changingLetters.length; a++){
                changingLetters[a].forEach(letter =>{
                        letter.style.color='transparent'; 
                        letter.style.textShadow='0 0 0 transparent';
                });
            }
        }, 4500);   
        // now can transformation begin
        // change letters back- after write ERROR
        setTimeout(()=>{
            let changedLetters1 = new Array('#','D','a','n','i','e','l','↲');
            //changeLetter(sym2, '\u00A0\u00A0');
            for(let a=0; a<changingLetters.length; a++){
                changeLetter(changingLetters[a], changedLetters1[a]);
            }
            // clean text-change-holder
            textChangeHolder.forEach(element =>{
                element.removeAttribute('style');
            });
        }, 5250);
        
        /* *** LOGO TRANSFORMER IS STARTING HERE!!! *** */
        setTimeout(()=>{ logoTransormer(true); },4500);  
    }

    function startGroupChoose(groupA){
        groupA.forEach(elemGroup => {
            /*element.style.animation = 'var(--old-pc-negat2)';*/
            elemGroup.style.animation = "750ms linear 3 normal forwards symbol-oldpc-2-group";
             elemGroup.addEventListener('animationend', ()=>{
                // elemGroup.style.animation = 'unset';
             });
        }); 
    }

    function startGroupError(){
        textChangeHolder.forEach(element => {
            element.style.backgroundColor = 'var(--old-pc-negat2)';
            for(let a=0; a<changingLetters.length; a++){ 
                changingLetters[a].forEach(letter => {
                    letter.style.animation = '750ms linear 3 normal forwards symbol-oldpc-32-cleanblick-group';
                }); 
            }
        });
    }

    /* *** change letter in "transform fnc" -> used for write "#reset" and set it back *** */
    function changeLetter(letterA,letterB){
        letterA.forEach(letter => {
            letter.textContent = letterB;
        });
    }
    /* *** blicked letter select in the INTRO sequence *** */
    function chooseLetters(letterA){
        letterA.forEach(letter => {
            //letter.classList.toggle('nofun-letter-chosen');
            letter.classList.add('nofun-letter-chosen');
            letter.style.animation = "750ms linear backwards infinite symbol-oldpc-2";
            //letter.style.textDecoration = 'unset'; does not work
        });
    }

    function chooseLettersTrans(letterA){
        letterA.forEach(letter => {
            //letter.classList.toggle('nofun-letter-chosen');
            letter.classList.add('nofun-letter-chosen');
            letter.style.animation = `750ms linear backwards infinite symbol-oldpc-2-trans`;
        });
    }
    
    function chooseLettersGroup(groupA){
        groupA.forEach(elemGroup => {
            //letter.classList.toggle('nofun-letter-chosen');
            
            //elemGroup.style.color = 'yellowgreen';
            //elemGroup.style.textShadow = '0px 0px 10px yellowgreen';
            elemGroup.classList.add('nofun-letter-chosen');
            elemGroup.style.animation = "750ms linear 1 normal forwards symbol-oldpc-2-group";
            elemGroup.addEventListener('animationend', ()=>{
                elemGroup.style.animation = 'unset';
            });
        });
    }
    
    /* *** reset leters and symbols styles into the default setting *** */
    function resetLetters(letterA,isSymbol,isFun){
        letterA.forEach( letter => {
            
            let setSymClass = isFun==true ? 'fun-symbol' : 'nofun-symbol-on';
            let pageStatus = isFun==true ? 1 : 0;
                if(isSymbol==true){
                    letter.style.animation = 'none';
                    setTimeout(()=>{  
                        letter.removeAttribute("class");
                        letter.removeAttribute("style"); 
                    },50);
                    setTimeout(()=>{  letter.classList.add(setSymClass); },100);
                    setTimeout(()=>{
                        letter.style.color = symColor[pageStatus].color;
                        letter.style.textShadow = symColor[pageStatus].textshadow;
                        letter.style.backgroundColor = symColor[pageStatus].backgroundcolor;
                        letter.style.borderColor = symColor[pageStatus].bordercolor;
                    },150);
                    //console.log('it IS symbol: '+letter);
                }
                else{
                    letter.style.animation = 'none';
                    setTimeout(()=>{  letter.removeAttribute("class"); },50);
                    setTimeout(()=>{  letter.removeAttribute("style"); },100);
                }
        });
    }

    /* ******************** main transform - logo rotation *************************** */
    function logoTransormer(willFun){
        let removeAddClass = (willFun==true) ? ['nofun', 'fun'] : ['fun','nofun'];
        let pageStatus = (willFun==true) ? ['1',1] : ['0',0];

        transHolders.forEach((holderE, holderI) =>{
            holderE.style.visibility = 'visible';
                holderE.style.transition = 'opacity 500ms'; 
                holderE.style.opacity = transHoldersValue[holderI];
        });
        transLogo.classList.add('reflected-div-effects');
        
        // turn off watter ripples
        if(rippleSwitch[0].checked==true ){
            rippleSwitch[0].checked=false; 
            rippleHandler();
        }         

        /* rotate logo */
        setTimeout(()=>{ 
            transLogo.style.animation = '3s linear forwards logo-tranformer';
            transHolders.forEach((holderE, holderI) => {
                 holderE.style.animation = '3s linear forwards logoHolder-transformer'+holderI;
            });
           
            // clear garbage in the classes and set FUN classes in the middle of rotation
            setTimeout(() => {
                // reset symbols
                if(willFun==false){
                    setTimeout(()=>{
                        for(let a=0; a<symbols.length; a++){
                            symbols[a].forEach(symbolsA =>{ 
                                symbolsA.innerHTML = resetSymbols[a]; 
                            });
                        }
                    }, 50);
                } 
                // reset classes for symbol and letters
                setTimeout(() => {
                    for(let a=0; a<symbols.length; a++){ resetLetters(symbols[a], true, willFun); }
                    for(let b=0; b<letDANIEL.length; b++){ resetLetters(letDANIEL[b], false, willFun); }
                }, 100);
                // finaly change main class     
                setTimeout(() => {
                    funText.forEach(funText1 => {
                        setTimeout(() => {  funText1.classList.remove(removeAddClass[0]); }, 50);
                        setTimeout(() => {  funText1.classList.add(removeAddClass[1]);  }, 100);
                    });
                }, 250);
                setTimeout(() => {
                // finaly change state holder - it is a "data-state" attr in "#reflect_div" tag 
                    document.getElementById('reflect_div').setAttribute('data-state', pageStatus[0]);
                    pageState = pageStatus[1];
                }, 350);
                setTimeout(() => {
                        animationTurnOffCover.forEach(element =>{
                            element.style.display = (willFun == true) ? 'none' : 'block';
                        });
                },450);
                setTimeout(()=>{
                    if(rippleSwitch[0].checked==false ){
                            rippleSwitch[0].checked=true; 
                            rippleHandler();
                    }         
                }, 5000);
            }, 1500);
        }, 250);
    
        // clean up - disable helpers and holders
        setTimeout(()=>{ 
            transLogo.classList.remove('reflected-div-effects'); 
            
            transHolders.forEach(holderE =>{
                holderE.style.opacity = '0';
                setTimeout(()=>{ 
                    holderE.style.visibility = 'hidden';
                    /*holderE.style.display = 'none';*/
                }, 100);
            });
            
            // unset the animations 
            transLogo.style.animation =  'unset';
            transHolders.forEach(holder => { holder.style.animation =  'unset' }); 
        }, 3250);
    }

    /* *************************** add letter events ******************************************** */
    function addLetterListeners(letterA, index, isSym){

        letterA.forEach(letter1 =>{
            letter1.style.cursor = 'pointer';
            letter1.addEventListener('mouseover', ()=>{oneRunBoth(letterA, index, isSym);});
            if(isSym==true){
                letter1.addEventListener('mouseout', ()=> {
                    symbolAnimationEnd(letterA);
                });
                letter1.addEventListener('click', ()=>{ 
                    symbolChangeOnClick(letter1, letterA);
                }); 
            }
            else{
                letter1.addEventListener('animationend', ()=>{ 
                    letterA.forEach(letter1 =>{letter1.style.animation = 'unset';} );
                });    
            }
        });    
    }

    function oneRunBoth(letterA, index, isSym){
        let animArray = (isSym==true) ? animSymbolArray : animLetterArray;
        letterA.forEach(letter2 => {// ACTIVE element is handling BOTH
            letter2.style.animation = animArray[index];
            if(isSym==true){ letter2.style.animationIterationCount = '5'; }
            else           { letter2.style.animationPlayState = 'running'; }
        });
    }

    function symbolAnimationEnd(letterA, specificColor){
        let actualStatus = transLogo.getAttribute('data-state');
        let specColor = (specificColor) ? symColor[specificColor] : symColor[actualStatus];

        letterA.forEach(letter1 =>{ 
            letter1.style.color = symColor[actualStatus].color;
            //letter1.style.animationIterationCount = '1';
            letter1.addEventListener('animationend', ()=>{
                animEndNested();
            }); 

            function animEndNested(){
                letter1.style.transition = 'all 750ms';
                letter1.style.animation = '750ms linear 1 symbol-oldpc-shutdown';
                setTimeout(function(){ 
                    
                    letter1.removeAttribute('style');
                    
                    letter1.style.color             = specColor.color;
                    letter1.style.textShadow        = specColor.textshadow;
                    letter1.style.backgroundColor   = specColor.backgroundcolor;
                    letter1.style.borderColor       = specColor.bordercolor;
                    
                    setTimeout(function(){ 
                        letter1.style.animation = 'none'; 
                        letter1.style.animation = 'unset';
                        letter1.removeEventListener('animationend', ()=>{
                            animEndNested();
                        });
                        //this.removeEventListener('animationend', ()=>{animEndNested();}); 
                    },50);
                }, 750);
            }
        });

    }

    function removeLeterListeners(letterA, index, isSym){
        letterA.forEach(letter1 =>{
            letter1.style.cursor = 'default';
            letter1.removeEventListener('mouseover', ()=>{ oneRunBoth(letterA, index, isSym); });
            letter1.removeEventListener('animationend', ()=>{ 
                    letterA.forEach(letter1 =>{letter1.style.animation = 'unset';} );
                });    
        });    
    }

    function disFunLetterListeners(charArray, isSymbol){
        for(let a=0; a<charArray.length; a++){
            removeLeterListeners(charArray[a], a, isSymbol);
        }
    }

    function addLetterListenersEnabler(charArray, isSymbol){
        for(let a=0; a<charArray.length; a++){
            addLetterListeners(charArray[a], a, isSymbol);
        }
    }

    /* *************************** blick/change LETTERs sequention ****************************** */
    function blickLetterOnly(letter,iter, specificColor){
        //750ms linear backwards infinite symbol-oldpc-2
        /*insertLetter(letter); */ 
        let iteration = (iter) ? iter : 4;
        
        //console.log('symbol blick iter:'+iteration);
        letter.forEach(letterA => {
            letterA.style.animation = '750ms linear 1 symbol-oldpc-31-insertblick';
            setTimeout(()=>{ 
                letterA.style.animation = '750ms linear 1 symbol-oldpc-31'; 
                letterA.style.animationIterationCount = iteration;
            },750);
        });
        setTimeout(()=>{ 
            if (specificColor){ symbolAnimationEnd(letter, specificColor); } 
            else{               symbolAnimationEnd(letter); } 
        },1000);
    }

    function changeSymbol(letterPosition, newSymbol, specificColor){
        
        letterPosition.forEach(letterPositionA => {
            letterPositionA.innerHTML = newSymbol;
            blickLetterOnly(letterPosition, 4, specificColor);
        });
    }

    function symbolChangeOnClick(element, symbolPosition){
        let actualSymbolIndex = loopingSymbols.indexOf(element.innerHTML);
        //console.log('inner Symbol:'+element.innerHTML+' on which element:'+symbolPosition+' indexOf='+actualSymbolIndex);
        if(actualSymbolIndex == -1){
            changeSymbol(symbolPosition, loopingSymbols[0], 1 ); 
        }
        else{
            changeSymbol(symbolPosition, loopingSymbols[(actualSymbolIndex+1)], 1 ); 
        }
    }

    function funLetterAnim(letter, animIndex,iteration){
        letter.forEach(letter1 =>{
            letter1.style.animation = animLetterArray[animIndex];
            letter1.style.animationIterationCount = iteration;
            letter1.style.animationPlayState = 'running';
            // letter1.addEventListener('animationend', ()=>{ 
            //     letter.forEach(letter1 =>{letter1.style.animation = 'unset';});
            // });   

            letter1.addEventListener('animationend', animEndNested2);   
            
            function animEndNested2(){
                letter.forEach(letter1 =>{
                    letter1.style.animation = 'unset';
                    //letter1.removeEventListener('animationend', animEndNested2); 
                }); 
            }
        });    
    } 

    /* *************************** change whole #reflect_div ************************************ */
    function changeLogo(status){
        let logo = document.getElementById('reflect_div');
        let actualStatus = status ? status : logo.getAttribute('data-state');
        console.log('actual page status: '+actualStatus);
        
        let logoElements = new Array(
            document.getElementById('real-text'), 
            document.getElementById('refl-text')
            );
        let colora = new Array();
        colora = [
            { color: 'white', backgroundcolor: 'black', backgroundimage: 'none' },
            { color: 'hsla(0, 0%, 0%, 0.9)', backgroundcolor: 'hsla(0, 0%, 100%, 1)', backgroundimage: 'none' },
            { color: 'hsla(0, 0%, 10%, 1)', backgroundcolor: 'hsla(0, 0%, 0%, 0.01)', backgroundimage: 'linear-gradient(to right, hsla(205, 100%, 10%, 0.25) 0%, hsla(205, 100%, 10%, 0.4) 55%, hsla(205, 100%, 10%, 0.5) 75%, hsla(205, 100%, 10%, 0.9) 100%)' },
            { color: 'hsla(0, 0%, 10%, 1)', backgroundcolor: '/*hsla(0, 0%, 0%, 0.01)*/ black', backgroundimage: 'linear-gradient(to right,  hsla(205, 35%, 65%, 0.5) 5%,  hsla(205, 50%, 55%, 0.25) 40%, hsla(205, 100%, 10%, 0.4) 55%, hsla(205, 100%, 10%, 0.5) 75%, hsla(205, 100%, 10%, 0.9) 100%)'}
            ];
        // get actual state
        // let actualStatus = logo.getAttribute('data-state');
        // set new logo

        switch (actualStatus) {
                case "0": logoTransormer(true);
                        setTimeout(()=>{changeLogoColor(0,"2");},5000);
                    break;
                case "1": changeLogoColor(0,"2");
                    break;
                case "2": changeLogoColor(1,"3");
                    break;
                case "3": changeLogoColor(2,"4");
                    break; 
                case "4": logoElements.forEach(logoElements1 =>{
                            //logoElements1.style.backgroundColor = colora[2].backgroundcolor;
                            logoElements1.style.backgroundImage = colora[3].backgroundimage;
                        });
                        logoTransormer(false);
                    break;
                default:  logoTransormer(true);
                    break;
            }

        // !!! this is only wrapped function into the main "changeLogo" func.
        function changeLogoColor(index,nextStatus){
            logoElements.forEach(logoElements1 =>{ 
                logo.style.transformOrigin = 'center';
                logo.style.transition = 'transform 1000ms';
                // moved to "changedLogoPosition" fnc on the top 
                //let transforer = (nextStatus=="2") ? 'translateY(-4.75em) rotateX(1turn)' : 'rotateX(1turn)';
                //let marginer = (nextStatus=="2") ? '-4.75em auto 4.75em auto' : '-1em auto 1em auto';
                logo.style.transform = 'rotateX(1turn)';
                logoElements1.style.color = colora[index].color;
                logoElements1.style.backgroundColor = colora[index].backgroundcolor;
                logoElements1.style.backgroundImage = colora[index].backgroundimage;
                
                setTimeout(()=>{ 
                    logo.style.transform = 'unset'; 
                    logo.style.transition = 'unset';
                    logo.style.transformOrigin ='top';
                    //logo.style.margin = marginer;
                }, 1200);
            });

            setTimeout(()=>{
                letN.forEach(funLetter => {
                    funLetter.style.animation = '7.5s linear -4.75s backwards 1 anim-N';
                });
                letI.forEach(funLetter => {
                    funLetter.style.animation = '4s linear -1s 0.7 anim-I';
                });
            },250);

            console.log('change color:'+index + 'new state is:'+ nextStatus);
            document.getElementById('reflect_div').setAttribute("data-state", nextStatus);
            pageState = nextStatus;
        }
       /* 0 = "normal" / "formal" design   1 = "fun" design   2 = colors in fun design */ 
    }
    /* *************************** INTRO LOGO END *********************************************** */
    
    /* *************************** NAVY PANEL - border navigation ******************************* */
    function getHorizontalSiblings(){
        actualNavyPanelID = actualElement.getAttribute('id').slice(0,5);
        let getNavyHorizontalSiblings = Array.from(document.getElementById(actualNavyPanelID+'-RadioButtons').getElementsByTagName('a'));
        return getNavyHorizontalSiblings;
    }

    /* *********** change or hide side navy arraows ************ */
    function changeOrHideNavyLinks(){

        let horizontalSiblings = getHorizontalSiblings(actualElement);
        let anchorsHorizontalSiblings = new Array();
        for(let a=0; a<horizontalSiblings.length; a++){
            anchorsHorizontalSiblings.push(horizontalSiblings[a].getAttribute('href'));
        }
        // update horizontal links on arrows after page change
        let actualLink = actualElement.getAttribute('href');
        let actualIndexOfLink = anchorsHorizontalSiblings.indexOf(actualLink);
        let actualPageForNoOtherPage = window.location.href;
        let actualNavyPanelID = actualElement.getAttribute('id').slice(0,5); 

        /* set value for LEFT ARROW; */
        let actualLeftArrow = document.getElementById(actualNavyPanelID+'-left');
        console.log(actualLeftArrow);

        setTimeout(()=>{ // for sure, because javascript
            if((actualIndexOfLink-1) >= 0){
                actualLeftArrow.setAttribute('href',anchorsHorizontalSiblings[actualIndexOfLink-1]);
                if(actualLeftArrow.className == 'inactive'){ 
                    actualLeftArrow.classList.remove('inactive');
                }
                if(actualLeftArrow.getAttribute('tabindex') == '1'){
                actualLeftArrow.removeAttribute('tabindex');
                }
            }
            else{ 
                actualLeftArrow.setAttribute('href',anchorsHorizontalSiblings[0]);
                actualLeftArrow.setAttribute('tabindex', '1');
                //actualLeftArrow.classList.toggle('inactive');   
                actualLeftArrow.classList.add('inactive');   
            }
            /* set value for RIGHT ARROW; */
            let actualRightArrow = document.getElementById(actualNavyPanelID+'-right');
            //console.log(actualRightArrow);

            if((actualIndexOfLink+1) < anchorsHorizontalSiblings.length){
                actualRightArrow.setAttribute('href',anchorsHorizontalSiblings[actualIndexOfLink+1]);
                if(actualRightArrow.className == 'inactive'){ 
                actualRightArrow.classList.remove('inactive');
                }
                if(actualRightArrow.getAttribute('tabindex') == '1'){
                actualRightArrow.removeAttribute('tabindex');
                }
            }
            else{ 
                //actualRightArrow.setAttribute('href', "index-v15.html");
                actualRightArrow.setAttribute('href',anchorsHorizontalSiblings[(anchorsHorizontalSiblings.length)-1]);
                actualRightArrow.setAttribute('tabindex', '1');
                //actualRightArrow.classList.toggle('inactive');
                actualRightArrow.classList.add('inactive');
            }
            //console.log('anchorsHorizontalSiblings.length:'+anchorsHorizontalSiblings.length);
        },500);
    }

    function setNavyRadio(){
        // get actual element position Index in getNavySiblings array by href
        actualElement = this;
        actualElementHref = this.getAttribute('href');
        let getNavySiblings = Array.from(getHorizontalSiblings());
        let siblingsHrefArray = new Array();
        
        for(let a=0; a<getNavySiblings.length; a++){
                siblingsHrefArray.push(getNavySiblings[a].getAttribute('href'));
        } 
        //console.log('pole: '+siblingsHrefArray);
        let actualIndexInArray = siblingsHrefArray.indexOf(actualElementHref);
        for(let i=0; i<getNavySiblings.length; i++){
            //console.log(getNavySiblings[i].textContent);
            if(i==actualIndexInArray){ 
                    document.getElementById(actualNavyPanelID+'-RadioButtons').getElementsByTagName('a')[i].classList.add('dot-symbol');
                    document.getElementById(actualNavyPanelID+'-RadioButtons').getElementsByTagName('a')[i].classList.remove('circle-symbol');
            }
            else{
                document.getElementById(actualNavyPanelID+'-RadioButtons').getElementsByTagName('a')[i].classList.add('circle-symbol');
                document.getElementById(actualNavyPanelID+'-RadioButtons').getElementsByTagName('a')[i].classList.remove('dot-symbol');
            }
        }
        changeOrHideNavyLinks();
    }

    /* fnc dissabled now */
    function auxilaryClick(e){
        
            if (e.button == 1) {
              //alert("middle button clicked");
              let url = window.open(this.getAttribute('href'),'_blank'); 
              url.blur();
            }
            else{
                window.open(this.getAttribute('href'),'_blank');
            }
    }
    
    function tempLinkClicker(){
        window.open(this.getAttribute('href'),'_blank');
    }
    
    function hoverr(){
        x = this.className;
        y = focusedElement.indexOf(x);
        console.log('resolution = '+screenResolutionX);

        let xLink = this.querySelector('a');
        let xImage = this.querySelector('img');
        
        this.classList.add('hoverrer');
        /*
          let xCloserer = document.createElement('DIV');
              xCloserer.setAttribute('id', 'describ-closerer');
              xCloserer.innerHTML = 'x';
              xCloserer.style.position = 'fixed';
        */
              xLink.style.color = 'yellowgreen';
              xLink.style.backgroundColor = 'hsla(120, 100%, 10%, 0.95)';
              xLink.style.border = '1px solid yellowgreen';
              //xLink.classList.add('a-focuser');
              document.querySelector('.hoverrer').style.visibility = 'visible'; 
              xImage.setAttribute('title', 'click or leave picture area for minimize large preview');

        if(screenResolutionX > 1480 ){
            document.querySelector(':root').style.setProperty('--position-margin', leftMargin[y]);
            document.querySelector(':root').style.setProperty('--descr-after-marright', rightMargin[y]); 
            xLink.style.marginLeft = leftMargin[y];
 
            /*document.querySelector('.hoverrer').style.transitionDelay = '2s';*/
            /*document.querySelector(':root').style.setProperty('--descr-after-martop', '-132%');  */
            // setTimeout(()=>{ xLink.style.marginLeft = leftMargin[y]; }, 1000);
            // document.querySelector(':root').style.setProperty('--position-margin-top', topMargin[y]);
        }
        else if(screenResolutionX < 1480 && screenResolutionX > 980) {
            document.querySelector(':root').style.setProperty('--position-margin', leftMargin1[y]);
            document.querySelector(':root').style.setProperty('--descr-after-marright', rightMargin1[y]);
            xLink.style.marginLeft = leftMargin1[y]; 
        }
        else if(screenResolutionX < 980) {
            document.querySelector(':root').style.setProperty('--position-margin', leftMargin2[y]);
            document.querySelector(':root').style.setProperty('--descr-after-marright', rightMargin2[y]);
            xLink.style.marginLeft = leftMargin2[y];
        }
        
        setTimeout(()=>{
            // this.querySelector('img').addEventListener('mouseout', normalizeHoveredPicture);
            // !!! condition added !!! test 24.4.2021 - could be optimalized after test
            // Array.from(this.querySelectorAll('img')).forEach(element => {       // test 29.4.2021
            //    element.addEventListener('mouseout', normalizeHoveredPicture);   // test 29.4.2021   
            // });                                                                 // test 29.4.2021
            // this.querySelector('img').addEventListener('mouseout', normalizeHoveredPicture);  // test 29.4.2021
            // alert(this.className);
            xLink.style.transition = 'opacity 1s';
            xLink.style.opacity = '1';

            //let xTopRightCorner = xImage.getBoundingClientRect();
            //console.log('+++COrnerer:'+xTopRightCorner.top+' / '+xTopRightCorner.right);
            
            //console.log('------THISAAC = '+this.className);
            
            this.addEventListener('mouseleave', normalizeHoveredPicture);    // !!! removed this.addEventListener('mouseleave', normalizeHoveredPicture, false );  
            this.addEventListener('mousedown', normalizeHoveredPicture);  
            xLink.addEventListener('mousedown', tempLinkClicker);
            //xLink.addEventListener('auxclick', (e)=>{ auxilaryClick(e); } );
        },1050);
    }
    function normalizeHoveredPicture0(){
        let hoveredPicture = this;
        
        setTimeout(()=>{
        hoveredPicture.style.transform = 'scale(0.9)'; 
        hoveredPicture.parentNode.blur();
        hoveredPicture.blur();
            setTimeout(()=>{
               hoveredPicture.removeEventListener('mouseout', normalizeHoveredPicture0);
               //hoveredPicture.parentNode.removeEventListener('mouseout', normalizeHoveredPicture);
               hoveredPicture.style.transform = 'scale(1.25)';
               //setTimeout(()=>{
                    hoveredPicture.removeAttribute('style'); 
               //},100);
            },250);
        },100);
    }
    function normalizeHoveredPicture1(){
        //setTimeout(()=>{ 
       //let hoveredPicture = this.querySelector('img');
        let hoveredLink = this.querySelector('a');
    
        //let hoveredCloserer = this.querySelector('.describ-closerer'); //document.getElementById('describ-closerer');
        //console.log('------THISAAC PICTURE = '+this.querySelector('img').getAttribute('src'));
        //let hoveredPicture = this.querySelector('img'); // test 29.4.2021
        //document.querySelector('.hoverrer').style.visibility = 'hidden';

        document.querySelector(':root').style.setProperty('--descr-after-marright', rightMarginDef); 
        //hoveredPicture.setAttribute('title', 'click for larger picture');
        /*document.querySelector(':root').style.setProperty('--descr-after-martop', '-67%'); */ 
        //hoveredCloserer.remove();
        //hoveredCloserer.removeAttribute('style');
        //hoveredLink.style.display = 'none';
        
          //  $('.project').removeClass('hover');

        //hoveredPicture.style.transform = 'scale(0.55)'; 
        hoveredLink.removeAttribute('style');
        //this.style.transform = 'scale(0.75)';
        
        //hoveredPicture.parentNode.blur();
        //hoveredPicture.blur();
        //hoveredLink.blur();
        //this.blur();

            setTimeout(()=>{
                //this.style.transform = 'scale(0.9)'; 
                //hoveredPicture.removeEventListener('mouseout', normalizeHoveredPicture, false);
               //hoveredPicture.removeEventListener('click', normalizeHoveredPicture, false);  
              
               this.removeEventListener('mouseout', normalizeHoveredPicture1);
               
               this.removeEventListener('mousedown', normalizeHoveredPicture1);
               this.querySelector('a').removeEventListener('mousedown', tempLinkClicker);
               //hoveredLink.removeEventListener('auxclick', (e)=>{ auxilaryClick(e); } );
               //hoveredPicture.parentNode.removeEventListener('mouseout', normalizeHoveredPicture);
               //this.style.transform = 'scale(1.25)';
               //hoveredPicture.style.transform = 'scale(0.85)';
               //hoveredPicture.style.transform = 'scale(1.25)';
               setTimeout(()=>{
                
                this.classList.remove('hoverrer');
                hoveredLink.removeAttribute('style');
                //hoveredPicture.removeAttribute('style'); 
                this.removeAttribute('style'); 
                //hoveredPicture.style.filter = 'brightness(100%) drop-shadow(0px 0px 15px hsla(50, 100%, 75%, 0.5))';
                
               },100);
            },250);
       //},100);
    }
    function normalizeHoveredPicture(){
        //alert('tago: '+this.tagName+' --- Ido: '+this.getAttribute('id'));
        
        let pictures = this.querySelectorAll('img');
        let hoveredPictureClass;
        pictures.forEach(element =>{
            let styles = getComputedStyle(element);
            if(styles.getPropertyValue('display') == 'block'){ hoveredPictureClass = element.className; }
        });
        let hoveredPicture = this.querySelector('.'+hoveredPictureClass);
        let hoveredLink = this.querySelector('a');
        let actualID = this.getAttribute('id');
    
        //let hoveredCloserer = this.querySelector('.describ-closerer'); //document.getElementById('describ-closerer');
        //console.log('------THISAAC PICTURE = '+this.querySelector('img').getAttribute('src'));
        //let hoveredPicture = this.querySelector('img'); // test 29.4.2021
        //document.querySelector('.hoverrer').style.visibility = 'hidden';
       
        this.classList.remove('hoverrer');
        this.removeAttribute('style');
        hoveredLink.removeAttribute('style');
                
        setTimeout(()=>{ 
        /*hoveredLink.style.visibility = 'hidden';*/
        //document.querySelector(':root').style.setProperty('--descr-after-marright', rightMarginDef); 
        //hoveredPicture.setAttribute('title', 'click for larger picture');
        /*document.querySelector(':root').style.setProperty('--descr-after-martop', '-67%'); */ 
        //hoveredCloserer.remove();
        //hoveredCloserer.removeAttribute('style');
        //hoveredLink.style.display = 'none';
        
          //  $('.project').removeClass('hover');
           
        hoveredPicture.style.transform = 'scale(0.9)'; 
        hoveredPicture.style.border = '1px solid red';        
       // this.style.transform = 'scale(0.9) !important';
       // this.style.transition = 'transform 250ms';
        //this.style.transform = 'scale(1.65)';
        
        hoveredPicture.parentNode.blur();
        hoveredLink.blur();
        this.blur();   
        hoveredPicture.blur();

            setTimeout(()=>{
                //this.style.transform = 'scale(0.9)'; 
                //hoveredPicture.removeEventListener('mouseout', normalizeHoveredPicture, false);
               //hoveredPicture.removeEventListener('click', normalizeHoveredPicture, false);  
               
               //hoveredLink.removeEventListener('auxclick', (e)=>{ auxilaryClick(e); } );
               //hoveredPicture.parentNode.removeEventListener('mouseout', normalizeHoveredPicture);
              hoveredPicture.style.transform = 'scale(1.25)';
               //this.style.transform = 'scale(1.05)';
               //hoveredPicture.style.transform = 'scale(0.85)';
               //hoveredPicture.style.transform = 'scale(1.25)';
               //setTimeout(()=>{
                //hoveredLink.removeAttribute('style');
                this.removeEventListener('mouseout', normalizeHoveredPicture);
                //hoveredPicture.removeEventListener('mouseout', normalizeHoveredPicture, false);
                this.removeEventListener('mousedown', normalizeHoveredPicture);
               // hoveredPicture.removeEventListener('mousedown', normalizeHoveredPicture, false);

                this.querySelector('a').removeEventListener('mousedown', tempLinkClicker);
                
                hoveredPicture.removeAttribute('style'); 
                //this.removeAttribute('style'); 
                hoveredPicture.style.filter = 'brightness(100%) drop-shadow(0px 0px 15px hsla(50, 100%, 75%, 0.5))';
                
             // },100);
            },250);
       },100);
    }

    /* start CSS animations - TARGET pseudoclass has its limits... */
    function runProjectsAnims(){

        if(lightSwitch == true){ 
            console.log('lights ON light switcher do nothing!'); 
        }
        else{
            document.getElementById('projects-section-holder').focus();
            let forAnim1 = Array.from(document.querySelectorAll('.project'));
            let forAnim2 = Array.from(document.querySelectorAll('#projects-section-holder h2'));

            let startBackgroundLight = Array.from(document.querySelectorAll('#projects article'));
            setTimeout(()=>{
                startBackgroundLight.forEach(articleElement=>{
                    articleElement.style.backgroundImage = 'none';
                    /*articleElement.style.transition = 'backgroundImage, 2s';*/
                });
            },2500);

            forAnim1.forEach(anim1 => { 
                anim1.style.animation = 'start-neon-projects 2.5s forwards 0.5s';
            });

            forAnim2.forEach(anim2 => { 
                anim2.style.animation = 'neon-projects-h2 2s both';  
            });

            lightSwitch = true;
        }
    }

    function runNeonPrepare(){

        let projectElements = Array.from(document.querySelectorAll('.project'));
        let articleElements = Array.from(document.querySelectorAll('#projects article'));
        projectElements.forEach(element =>{
            element.style.filter = 'grayscale(100%) brightness(15%) blur(3px)';
            element.setAttribute("style", "-webkit-filter:grayscale(100%) brightness(15%) blur(3px)");
            //console.log(element);
        });
        articleElements.forEach(element =>{
            element.style.backgroundSize = 'cover';
            element.style.backgroundImage = 'url("img/background-blackCover4.png")';
            //console.log(element);
        });

        lightSwitch = false;
    }

    /* ******************* WATER RIPPLE JQUERY EFFECT *************************** */
    /* ******************* https://github.com/sirxemic/jquery.ripples *********** */
    function rippleHandler(){
    if(rippleSwitch[0].checked){
        $(document).ready(function() {
            try {
                $('#logo-image').ripples({
                    // Image Url  //imageUrl: null,
                    // The width and height of the WebGL texture to render to.
                    // The larger this value, the smoother the rendering and the slower the ripples will propagate.
                    resolution: 512, //resolution: 768,
                    // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
                    dropRadius: 18,  //dropRadius: 28,
                    // Basically the amount of refraction caused by a ripple.
                    // 0 means there is no refraction.
                    perturbance: 0.18,
                    // Whether mouse clicks and mouse movement triggers the effect.
                    interactive: true,
                    // The crossOrigin attribute to use for the affected image.
                    crossOrigin: null
                });

                // run drop rain
                dropSwitch = true;
                //lighterBorderSetDetails('#logo-image', 'none', 'yellowgreen', `lightning-border-add2 750ms 500ms 1`); /* gold: hsl(50, 100%, 75%) */
            }
            catch (e) {
                $('.error').show().text(e);
            }
        });  
    }
    else{
        $(document).ready(function() {
            try {
                dropSwitch = false;
                $('#logo-image').ripples('destroy');
                //lighterBorderSetDetails('#logo-image', 'none', 'hsl(20, 100%, 60%)', 'lightning-border-add2 750ms 1');
        
            }
            catch (e) {
                $('.error').show().text(e);
            }
        });
    }
    }
        // API methods. view source - component manual
        // show the effect
        //	$('#effect-table').ripples('show');
            // hide the effect
        //	$('#effect-table').ripples('hide');
            // destroy the plugin
        //	$('#effect-table').ripples('destroy');
            // play the simulation's state
        //	$('#effect-table').ripples('play');
            // pause the simulation's state
        //	$('#effect-table').ripples('pause');
            // add a drop at the element's relative coordinates (x, y).
            // radius controls the drop's size and strength the amplitude of the resulting ripple.
        //   $('#effect-table').ripples('drop', x, y, radius, strength);

    function putOneDrop(){
        //document.querySelector('.logo-image').style.border = '2px solid magenta';
        let xDrop = Math.random() * $('.logo-image').outerWidth();
        let yDrop = Math.random() * $('.logo-image').outerHeight();
        let dropRadius1 = 18;
        let strength = 0.28 + Math.random() * 0.08;
        $('.logo-image').ripples('drop', xDrop, yDrop, dropRadius1, strength);
    }

    // ripple raining without interval, remoted by array
    function putRippleDrop(dropIndex){

        if(dropSwitch==true){
            let nextTimeout = (dropIndex > dropTimeArray.length) ? dropCommonTime : dropTimeArray[dropIndex];
            //document.querySelector('#logo-image').style.border = '1px solid blue';
            console.log(`ripple next timeout: ${nextTimeout}`);
            dropIndex++;
            console.log(`***!*** drop index: ${dropIndex}`);
            rippleTimeout = setTimeout(()=>{ 
                    //document.querySelector('.logo-image').style.border = '2px solid yellow';
                    putOneDrop();
                    putRippleDrop(dropIndex);
            }, nextTimeout*1000);    
        }
        else{
            console.log(`***!*** rippleTimeout for clearing: ${rippleTimeout}`);
            
            if(rippleTimeout!=null){
                console.log(`***!*** rippleTimeout was cleared: ${rippleTimeout}`);
                clearTimeout(rippleTimeout);
                rippleTimeout=null;
            }
            dropIndex = 0;
            //console.log('drop switch FALSE!')
            //document.querySelector('#logo-image').style.border = '2px solid red';
            setTimeout(()=>{ 
                console.log(`***!*** drop index: ${dropIndex}`);
                //document.querySelector('.logo-image').style.border = '2px solid yellow';
                putRippleDrop(dropIndex);
                console.log('ripple did nothing');
            }, standartWaiting*1000);
        }
    } 
    /* ****************************** ripples end ******************************** */

    // stop on VISIBILITY change
    function handleOnVisibilityChange(){
        if (document.hidden) {
            console.log('bye');
            //setTimeout(()=>{
                rippleSwitch[0].checked = false; 
                rippleSwitch[1].checked = false; 
                rippleHandler();
            //});
        } 
        else {
            console.log('well back');
            setTimeout(()=>{
                rippleSwitch[0].checked = true;
                rippleSwitch[1].checked = true;  
                rippleHandler();
            },1500);
        }
    }

    function checkIfLogoIsVisible(locationA){
        if( locationA=='#welcome-section' || 
            locationA=='#about' || 
            locationA=='#skills' || 
            locationA=='#setting-article' ){
                    
            console.log('well back - from url hash');
            setTimeout(()=>{
                rippleSwitch[0].checked = true;
                rippleSwitch[1].checked = true;  
                rippleHandler();
            },1500);
            }
        else{
            //setTimeout(()=>{
                console.log('bye - from url hash');
                rippleSwitch[0].checked = false; 
                rippleSwitch[1].checked = false; 
                rippleHandler(); 
            //},1000);
        }
    }

    // more light on some pages for NavBar panel
    function verticalUrlChange(){
        let navBarElement = document.querySelector('#navbar ul');
        let moreLightedNavBar = new Array('#contacts', '#projects', '#work', '#older', '#freecodecamp');
        // turnoff ripple watter if not visible
        //checkIfLogoIsVisible(location.hash);

        if(previousHash == '#setting-article' && opacityfunction == false ){
            backgroundOpacityForSetting(false); 
        }

        if( moreLightedNavBar.indexOf(location.hash) !== -1 ){
            setTimeout(function(){
                navBarElement.style.backgroundImage = 'linear-gradient(to right, hsla(44, 100%, 99%, 0.25), hsla(44, 100%, 50%, 0.5) 55%, hsla(44, 57%, 40%, 0.75) 65%, hsla(44, 100%, 50%, 0.75) 100% )';
                //console.log('location: '+location.hash);
            } ,500); 
        }
        
        else if ( location.hash == '#welcome-section' ){
            setTimeout(()=>{  
                navBarElement.style.backgroundImage = 'linear-gradient(to right, hsla(50, 100%, 99%, 0.1), hsla(50, 100%, 50%, 0.15) 55%, hsla(50, 57%, 40%, 0.35) 65%, hsla(50, 100%, 50%, 0.35) 100% )';
            }, 500);
            setTimeout(()=>{
                navBarElement2.style.animation = 'navbar-move 1.5s ease-out forwards';
            },1000);
            previousHash = location.hash;
        }
        else { 
            setTimeout(()=>{
                navBarElement.style.backgroundImage = 'linear-gradient(to right, hsla(50, 100%, 99%, 0.1), hsla(50, 100%, 50%, 0.15) 55%, hsla(50, 57%, 40%, 0.35) 65%, hsla(50, 100%, 50%, 0.35) 100% )';
            }, 500);
        }

        if ( location.hash == '#skills' ){
            setTimeout(()=>{ 
                document.querySelector('#skills .title-text').style.animation = 'title-move 450ms ease-in forwards';
                document.querySelector('#skills h2').style.animation = 'navbar-oposit-move 800ms ease-in forwards';
            },550);
            previousHash = location.hash;
        }
        
        else if ( location.hash == '#setting-article' ){
            previousHash = location.hash;
            setTimeout(()=>{ 
                backgroundOpacityForSetting(true);
                document.querySelector('#setting-article .title-text').style.animation = 'title-move 450ms ease-in forwards';
                document.querySelector('#setting-article h2').style.animation = 'navbar-oposit-move 800ms ease-in forwards';
            },350);
        }

        else if ( location.hash == '#projects' ){     
            setTimeout(()=>{ 
                document.querySelector('#projects h2').style.animation = 'navbar-move 800ms ease-in forwards';
                document.querySelector('#projects .title-text').style.animation = 'h2-oposit-move 450ms ease-in forwards';
            },550);
        }
        else if ( location.hash == '#contacts' ){
            setTimeout(()=>{      
                document.querySelector('#contacts .title-text').style.animation = 'title-move 450ms ease-in forwards';
                document.querySelector('#contacts h2').style.animation = 'navbar-oposit-move 800ms ease-in forwards';
            },550);
        }
        // hide contactsPrompt 
        contactsPrompt.style.opacity = '0';   
        // spare this hash
        //previousHash = location.hash;
    }
    
    /* *********  pop-up windows for some alelments in contact section ********** */    
    function delayerConPrompt(){
        clearTimeout(delayForConPrompt);
        delayForConPrompt = setTimeout(()=>{ 
            contactsPrompt.style.opacity = '0.1';
        },delayForConPromptValue*1000); 
        //console.log(`start delayer nr.: = ${delayForConPrompt}`);
    } 

    function displayContactsPopUp(){   
        contactsPrompt.style.opacity = '1';
        //contactsPrompt.style.filter = 'opacity(1)';
        let text1 = this.getAttribute('data');
        let text2 = this.getAttribute('data-value');

        contactsPrompt.querySelector('div').innerHTML = `<u>${text1}</u> : `;
        let input = contactsPrompt.querySelector('input');
        input.value = text2;
        input.style.animation = 'input-shine 750ms linear';
        setTimeout(()=>{ 
            input.style.animation = 'none'; 
        },1250);
        delayerConPrompt();
    }

    function copyContactsPrompt(contactsForCopy){
        let copyContactsPrompt = document.getElementById('copyContactsPrompt');
        copyContactsPrompt.style.display = 'flex';
        setTimeout(()=>{ copyContactsPrompt.style.opacity = '1'; },100);
        copyContactsPrompt.innerHTML =`<span>Selected text:<br/><span class="contacts-prompt-selection">${contactsForCopy.value} </span><br/> is in the system clipboard now.</span>`;
        setTimeout(()=>{ 
            copyContactsPrompt.style.opacity = '0';
            setTimeout(()=>{ copyContactsPrompt.style.display = 'none'; },750);
        },4500);
    }

    function copyContactsPopUp(){
        let contactsForCopy = document.querySelector('.contacts-prompt input');
        contactsForCopy.style.animation = 'input-shine-in 750ms linear';
        //setTimeout(()=>{ 
            contactsForCopy.select();
            contactsForCopy.setSelectionRange(0, 99999); /* For mobile devices */
            /* Copy the text inside the text field */
            document.execCommand("copy");
            contactsForCopy.style.animation = 'none'; 
            copyContactsPrompt(contactsForCopy);
        //},1000);
        contactsPrompt.style.opacity = '1';
        delayerConPrompt();     // opacity 0.1 after 10s
    }

    function backgroundOpacityForSetting(state){
        let settingPage = document.querySelector('#wellcome-shadow-holder');
        if (state == true){
            settingPage.style.transition = 'opacity 2s';
            settingPage.style.opacity = 0.65;
            opacityForSetting = true;
        }
        else{
            settingPage.style.transition = 'opacity 2s';
            settingPage.style.opacity = 1; 
            opacityForSetting = false; 
        }
    }

    function backgroundOpacity(opacity1, time){
            //opacitySingleSwitch.checked = true;
            opacityfunction = true;

            let backgroundOpacity1 = Array.from(document.querySelectorAll('#wellcome-shadow-holder, #projects-section-holder, #projects-shadow-holder, #contacts'));
            
            backgroundOpacity1.forEach(backToThePower =>{
                backToThePower.style.transition = 'opacity 2s';
                backToThePower.style.opacity = opacity1;

                /* **** test only *** */
                backToThePower.style.border = '0.1em outset hsla(0, 0%, 50%, 0.5)';
                backToThePower.style.boxShadow = '0 0 1em 0.5em hsla(0, 0%, 25%, 1)';
                backToThePower.style.boxSizing = 'border-box';

                console.log('opacity for:'+backToThePower);
            });

            setTimeout(()=>{ 
                backgroundOpacity1.forEach(backToThePower =>{
                    backToThePower.style.transition = 'opacity 2s';
                    backToThePower.style.opacity = 1;
                    
                    /* **** test only *** */
                    backToThePower.style.border = 'none';
                    backToThePower.style.boxShadow = 'none';
                });
            opacitySingleSwitch.checked = false;
            opacityfunction = false;
            },time);
    }

    /* ****************************** PARALLAX ***************************** */
    function handleParallax(){
        //let paraState = paraSwitch.checked;
        if(opacityForSetting == false && opacityfunction == false){
            backgroundOpacity(0.5, 3000);
        }

        if (paraSwitch[0].checked){
            console.log('checked');

            if(rippleSwitch[0].checked == true){
                doNotForgetTurnRippleOn = true;
                rippleSwitch[0].checked = false; 
                rippleSwitch[1].checked = false; 
                rippleHandler();
            }

            // check machine gear anim - turn it off
            if (paraGearRotateSwitch[0].checked){
                paraGearRotateSwitch[0].checked = false;
                paraGearRotateSwitch[1].checked = false;
                setTimeout(()=>{  handleParaGearRotate(); },100);
                setTimeout(()=>{  
                    paraGearRotateSwitch[0].checked = true; 
                    paraGearRotateSwitch[1].checked = true; 
                    setTimeout(()=>{handleParaGearRotate(); },100);
                },200);
            }
            else{
                paraElementsGearRotate.forEach(element =>{
                    document.querySelector(element).style.transform = 'scale(1.2)';
                });
            }
            // setTimeout(()=>{
            document.querySelector('body').classList.add('improved-body');
            document.querySelector('#para-gear').classList.remove('para-gear-false');
            document.querySelector('#para-gear').style.animation = 'none';
            //document.querySelector('#para-logo').classList.add('para-logo-false');
            
            setTimeout(()=>{
                document.querySelector('#para-gear').classList.add(paraClasses[1]);
                document.querySelector('#para-gear').style.animation = 'para-scale 1500ms normal';
                setTimeout(()=>{
                    document.querySelector('#para-gear').classList.add(paraClassesMain[0]);
                    document.querySelector('#para-gear').classList.add(paraClassesMain[1]);
                    // other adjustment
                    document.querySelector(":root").style.overflow = 'hidden';
                    //document.querySelector("html").style.overflow = 'hidden';
                    document.querySelector('#navbar').style.position = 'sticky';
                    document.querySelector('.logo-image').style.zIndex = '0';
                    document.querySelector('#navbar').style.marginTop = '-2.6em';
                    document.querySelector('#para-img0').classList.add('para-img-added0');
                    //document.querySelector('#para-img6').classList.add('para-img-added6');

                    setTimeout(()=>{
                        for(let a = 0; a<paraPerspectiveCorrection.length; a++){
                            // #project article /index 1/ is an array - we have got to catch it...
                            if(a == 0){
                                let a0 = Array.from(document.querySelectorAll(paraPerspectiveCorrection[a]));
                                a0.forEach(element =>{  element.classList.add('para-perspective');  
                                                        console.log('adding para-perspective to:'+element);});
                            }
                            else{
                                document.querySelector(paraPerspectiveCorrection[a]).classList.add('para-perspective');
                                console.log('adding para-perspective to:'+paraPerspectiveCorrection[a]);
                            }
                        }
                    }, 50);
                },1500);
            }, 50);
        //}, 5000);
        }
        else{ console.log('not checked'); // = turning parallax off

            if(opacityForSetting == false && opacityfunction == false){
                backgroundOpacity(1, 0);
            }

            if (paraGearRotateSwitch[0].checked){
                paraGearRotateSwitch[0].checked = false;
                paraGearRotateSwitch[1].checked = false;
                setTimeout(()=>{  handleParaGearRotate(); },100);
                setTimeout(()=>{  
                    paraGearRotateSwitch[0].checked = true; 
                    paraGearRotateSwitch[1].checked = true;
                    setTimeout(()=>{handleParaGearRotate(); },100);
                },200);
            }
            else{
                paraElementsGearRotate.forEach(element =>{
                    document.querySelector(element).style.transform = 'scale(1)';
                });
            }
                // setTimeout(()=>{
                document.querySelector('body').classList.remove('improved-body');
                document.querySelector('#para-gear').classList.remove('para-gear-true1');
                //document.querySelector('#para-logo').classList.remove('para-logo-true1');
            
            setTimeout(()=>{
                document.querySelector('#para-gear').classList.add(paraClasses[2]);
                document.querySelector('#para-gear').classList.remove(paraClassesMain[0]);
                document.querySelector('#para-gear').classList.remove(paraClassesMain[1]);
                // other adjustment
                document.querySelector(":root").style.overflow = 'scroll';
                //document.querySelector("html").style.overflow = 'hidden';
                document.querySelector('#navbar').style.position = 'fixed';
                document.querySelector('.logo-image').style.zIndex = '1';
                document.querySelector('#navbar').style.marginTop = '0em';
                document.querySelector('#para-img0').classList.remove('para-img-added0');
                //document.querySelector('#para-img6').classList.remove('para-img-added6');

                setTimeout(()=>{
                for(let a = 0; a<paraPerspectiveCorrection.length; a++){
                    // #project article /index 1/ is an array - we have got to catch it...
                    if(a == 0){
                        let a0 = Array.from(document.querySelectorAll(paraPerspectiveCorrection[a]));
                        a0.forEach(element =>{  element.classList.remove('para-perspective');  
                                                console.log('remove para-perspective to:'+element);});
                    }
                    else{
                        document.querySelector(paraPerspectiveCorrection[a]).classList.remove('para-perspective');
                        console.log('remove para-perspective to:'+paraPerspectiveCorrection[a]);
                    }
                }
                }, 50);
            // },1500);
            },50);
        //}, 5000);
        // we can turn the Ripple on without question... but still I have this doNotForgetRipple variable active. 
        // but it is so nice effect. I cant help my self - I will be enforced :)
        // if (doNotForgetTurnRippleOn == true){
            if(rippleSwitch[0].checked == false){
                rippleSwitch.forEach(ripple =>{ 
                    ripple.checked = true; 
                    rippleHandler();
                });   
            } 
        }
    }

    function handleParaGearRotate(){
        if (paraGearRotateSwitch[0].checked){
            let isParallaxAnim = (paraSwitch[0].checked) ? 'small-gear-rotate1' : 'small-gear-rotate ';
            
            document.querySelector(paraElementsGearRotate[0]).style.animation = isParallaxAnim+' 5s normal linear infinite';
            document.querySelector(paraElementsGearRotate[1]).style.animation = isParallaxAnim+' 8s alternate linear infinite';
            document.querySelector(paraElementsGearRotate[2]).style.animation = isParallaxAnim+' 8s alternate linear infinite';
            document.querySelector(paraElementsGearRotate[3]).style.animation = isParallaxAnim+' 15s normal linear infinite';
            document.querySelector(paraElementsGearRotate[4]).style.animation = isParallaxAnim+' 8s alternate linear infinite';
            document.querySelector(paraElementsGearRotate[5]).style.animation = isParallaxAnim+' 8s alternate linear infinite'
            document.querySelector(paraElementsGearRotate[6]).style.animation = isParallaxAnim+' 8s alternate linear infinite';
        
            // correction for "arangma" absolutely unusefull but complementary design shaped 2 elements ... 
            // It seems that I am really totaly obsesed by this page at the moment...
            // ok, maybe there will be more imgs in the future, so I did it somehow like that:
            paraImgsForExtraArrangma.forEach(key => {
                document.querySelector(paraElementsGearRotate[key]).classList.add('.para-img-added'+key);
            });
        }
        else{
            paraElementsGearRotate.forEach(element =>{
                document.querySelector(element).style.animation = 'none';
            
                paraImgsForExtraArrangma.forEach(key => {
                    document.querySelector(paraElementsGearRotate[key]).classList.remove('.para-img-added'+key);
                });
            });
        }
    }

    function handleParaGearDisplay(){
        if (paraGearDisplaySwitch[0].checked){
            paraElementsGearRotate.forEach(element =>{
                document.querySelector(element).style.display = 'flex';
            });
        }
        else{
            paraElementsGearRotate.forEach(element =>{
                document.querySelector(element).style.display = 'none';
            });
        }
    }

    function scrollToHelpArticle(index){
        //helpArticleArray[index].scrollIntoView(); 
        let countOffset =  (helpArticleArray[index].offsetTop)-10;
        let parrentForSetOffset = helpArticleArray[0].parentNode;

        parrentForSetOffset.scroll({top: countOffset, behavior: 'smooth' });
        let lineHigh = 1.45*index;
        helpArticleArrow.style.transform = 'translateY('+lineHigh+'em)';
        //console.log('index:'+index+ 'element:'+helpArticleArray[index]+ 'offeset: '+countOffset+'px'+parrentForSetOffset);
    }

    function bubbleHelpHandler(){
        let dataTitleArray = Array.from(document.querySelectorAll('[data-title]'));
        let noDataTitleArray = Array.from(document.querySelectorAll('[there-is-no-data-title]'));
        //let dataTitleValue;
        //dataTitleArray = Array.from(dataTitleArray);
        console.log('data-title: '+dataTitleArray + ' --- '+bubbleHelpSwitch[0].checked);

        if(bubbleHelpSwitch[0].checked == true){
            bubbleHelpEnabled = true;
            noDataTitleArray.forEach(element => {
                
                let dataTitleValue = element.getAttribute('there-is-no-data-title');
                element.setAttribute('data-title', dataTitleValue);
                element.removeAttribute('there-is-no-data-title');
                //console.log('thereIsNo-data-title-dataTitleValue: '+dataTitleValue);
            });
        }
        else{
            bubbleHelpEnabled = false;
            dataTitleArray.forEach(element =>{
                let dataTitleValue = element.getAttribute('data-title');
                element.setAttribute('there-is-no-data-title', dataTitleValue);
                element.removeAttribute("data-title");
                
                console.log('dataTitleValue:'+dataTitleValue);
            });
        }
    }
    /* ******************************** NAVY & EFFECTS END ************************************ */

    /* ******************************* HELP & GUIDE ******************************************* */
    function getAllPosData(element, position){
        let axisY; let axisX; 
        let selElement = document.getElementById(element);
        let workData = selElement.getBoundingClientRect();
        //let height = workData.height+'px';
        //let width = workData.width+'px';

        let sideCorectorX = 25;
        let sideCorectorY = 25;

        if(position=='left')        { 
            axisY=workData.top+(workData.height/3); 
            axisX=workData.left-sideCorectorX; }
        else if (position=='right') { 
            axisY=workData.top+(workData.height/3);  
            axisX=workData.right+sideCorectorX; }
        else if (position=='bottom'){ 
            axisY=workData.bottom+sideCorectorY; 
            axisX=workData.left-(workData.width/6);}
        else if (position=='up'){ 
            axisY=workData.top-sideCorectorY; 
            axisX=workData.left-(workData.width/6); }
        
        return { axisY: axisY, axisX: axisX/*, height: height*/};
    }

    /* **** hepl and guide page functions **** */ 
    function helpGuideDisplayer(a,b){
        //console.log(`**********tagg:${helpPosition[a][b].tagID}`);

        let handler = helpPosition[a][b];
        let newHelperWrapper = document.createElement('div');
        let newHelperArrow = document.createElement('div');
        let newHelperTextCar = document.createElement('div');
        let coordinates; 

        newHelperWrapper.setAttribute('id', `help-guide-${a}${b}`);
        newHelperWrapper.classList.add(`help-guide`);
        newHelperWrapper.classList.add(`hp-${handler.arrow}`);
        newHelperArrow.classList.add(`hp-before`);
        newHelperArrow.classList.add(`hp-arrow-${handler.arrow}`);
        newHelperTextCar.classList.add(`hp-after`);
        newHelperTextCar.innerHTML = helpData[a][b];

        newHelperWrapper.appendChild(newHelperArrow);
        newHelperWrapper.appendChild(newHelperTextCar);
        document.body.appendChild(newHelperWrapper);

        // lets display it: 
        let position = (handler.pos=='fix') ? 'fixed' : 'absolute';
        newHelperWrapper.style.position = position;
        newHelperWrapper.style.width = handler.width;   
        //newHelperWrapper.style.visibility = 'hidden';
        newHelperWrapper.style.display = 'flex';

        if(handler.posSet==true){
            newHelperWrapper.style.top = handler.absY;
            newHelperWrapper.style.left = handler.absX;        //console.log('.... coordinates: '+coordinates.top + coordinates.left + coordinates.margin+'......')
        }
        else{
            coordinates = getAllPosData(handler.tagID, handler.tagPos);
                
            let selfWidth = newHelperTextCar.offsetWidth;
            let selfHeight = newHelperTextCar.offsetHeight;
            //alert(selfWidth+' - '+selfHeight);

            if(handler.tagPos=='left'){
                newHelperWrapper.style.top = coordinates.axisY+'px';
                newHelperWrapper.style.left = (coordinates.axisX - selfWidth)+'px';
                //newHelperWrapper.style.margin = `0 0 0 -${handler.width}`;
            }
            else if(handler.tagPos=='up'){
                newHelperWrapper.style.top = (coordinates.axisY - selfHeight)+'px';
                newHelperWrapper.style.left = coordinates.axisX+'px';
                //newHelperWrapper.style.margin = `-${coordinates.height} 0 0 0`;
                //alert (coordinates.height);
            }
            else if(handler.tagPos=='right'){
                newHelperWrapper.style.top = coordinates.axisY+'px';
                newHelperWrapper.style.left = coordinates.axisX +'px';
            }
            else if(handler.tagPos=='bottom'){
                newHelperWrapper.style.top = coordinates.axisY+'px';
                newHelperWrapper.style.left = coordinates.axisX+'px';
            }
        }

        if(handler.arrowAdj==true){
            newHelperArrow.setAttribute('style', helpPosFineAdjusting[a][b].arrowAdj);
        }
        if(handler.fineAdj==true){
            let adjustProp = helpPosFineAdjusting[a][b].prop;
            let adjustVal = helpPosFineAdjusting[a][b].value;
            newHelperWrapper.style.setProperty(adjustProp, adjustVal);
        }
        if(handler.fineMargin==true){
            newHelperWrapper.style.margin = helpPosFineAdjusting[a][b].margin;
        }
        else{/*console.log(`adjusting:${a}${b} -nothing to do`);*/ }
        
        /* ***  !!! display OR visibility ? - try performance - decide. It would be better */
        /* it is not so bad as I was expected - I am staing to use "display" mainly because of using and handling these plenty of animations. */
        //newHelperWrapper.style.display = 'none';
        //newHelperWrapper.style.visibility = 'hidden';
        newHelperWrapper.style.opacity = '1';
    }

    function displayHelpSequencedCreate(a, b, once){
        if(bubbleHelpEnabled==true){
            
            helpGuideDisplayer(a,b);
            
            let switchOn = document.getElementById(`help-guide-${a}${b}`);
            console.log(`created: ${switchOn}`);
                /* performance measurement - it is on the edge. */
                /* main switch is in the "helpGuideDisplayer() func" */ 
                //switchOn.style.visibility = 'visible';
                //switchOn.style.display = 'flex';
                //switchOn.style.opacity = '1';

            if(once==false){
                setTimeout(()=>{ 
                    helpDestroyer(a,b); 
                }, helpSequentionTimer[1][a][b].dur*1000 );
            }
        }
    }

    function helpDestroyer(a,b){
        let switchOff = document.getElementById(`help-guide-${a}${b}`);
            //if(switchOff.getPropertyValue('display')=='flex'){
            if(switchOff){
                switchOff.style.opacity = '0';
                setTimeout(()=>{
                    console.log(`removed: ${switchOff}`);
                    switchOff.remove();
                },800);
            }
        //}
    }

    /* ***************** bubble help and highlight functions ************** */
    function changeLogoBubbleHelp(event){
        
        event.stopPropagation();
        changersBubbles.forEach(logoChangerBubbles =>{ 
        logoChangerBubbles.classList.add('standart-hover');
        });
        
        let eventElement = event.target;
        
        //let isDisplayedNow = getComputedStyle(element).display;
        if(document.getElementById('help-guide-13')==null){
            displayHelpSequencedCreate(1,3,false);
        }
        else{
            document.getElementById('help-guide-13').style.opacity = '1';
        }
        //event.target.style.backgroundColor = 'yellow';
        //console.log(element.getAttribute('id') + '=' +isDisplayedNow);
        console.log(`event target OVER => ${eventElement.id}`);

        let setMarginLeft = (eventElement.id == 'standart1') ? '5em' : '32em';
        let element = document.getElementById('help-guide-13');
        element.style.marginLeft = setMarginLeft;
    }

    function changeLogoBubbleHelpOut(event){
        console.log(`event target OUT => ${event.target.id}`);
        changersBubbles.forEach(logoChangerBubbles =>{ 
            logoChangerBubbles.classList.remove('standart-hover');
        });
        
        let element = document.getElementById('help-guide-13');
        if(element!=null){
            //if(switchOff.getPropertyValue('display')=='flex'){
            element.style.opacity = '0';
        }
    }

    function highLighter(index){
        let highlightElement = document.querySelector(hightLighter[index].element);
        let actualFilter = getComputedStyle(highlightElement).filter;
        console.log(`actual-fiter: ${actualFilter}`);
        highlightElement = highlightElement.style;
        setTimeout(()=>{
            if(hightLighter[index].filter==true){
                highlightElement.setProperty('filter', 'none'); 
            }
            highlightElement.setProperty('animation', 'none');
            setTimeout(()=>{
                if(hightLighter[index].border != false){
                    highlightElement.setProperty('border', hightLighter[index].border);
                }
                highlightElement.setProperty('animation', hightLighter[index].anim);
            },100);
        },100);
        setTimeout(()=>{
            if(hightLighter[index].border != false){
                highlightElement.setProperty('border', 'none');
            }
            highlightElement.setProperty('animation', 'unset');
            if(hightLighter[index].filter==true){
                highlightElement.setProperty('filter', 'none');
                setTimeout(()=>{
                    highlightElement.setProperty('filter', actualFilter);
                    highlightElement.setProperty('-webkit-filter', actualFilter);
                },100);
            }
        },hightLighter[index].endTime);
    }

    /* ************** blick border lightning **************************** */
    function lighterBorder(index){
        let lightElement = document.querySelector(hightLighter[index].element);
        //lightElement = lightElement.style;
        lightElement.style.animation = 'none';
        lightElement.style.boxShadow = 'none';
        lightElement.style.boxSizing = 'border-box';
        setTimeout(()=>{
            lightElement.style.border = hightLighter[index].border;
            lightElement.style.animation = hightLighter[index].anim;
            
            lightElement.addEventListener('animationend', () => {
                    lightElement.style.border = 'none';
                    lightElement.style.boxShadow = 'none';
                    lightElement.style.animation = 'unset';
            }); 
        },100);
    }
 
    //let blickBorderArray = new Array('', 'hsl(20, 100%, 60%)'); /* 0 >to gold , 1> to red, 2> to green */
    function lighterBorderSetDetails(element, border, colorBorder, animation){
        let blickElement = document.querySelector(element);
        let rooot = document.querySelector(':root');
        rooot.style.setProperty('--blick-border', colorBorder);

        blickElement.style.animation = 'none';
        blickElement.style.boxShadow = 'none';
        blickElement.style.boxSizing = 'border-box';

        setTimeout(()=>{
            blickElement.style.border = border;
            blickElement.style.animation = animation;

            blickElement.addEventListener('animationend', ()=>{
                blickElement.style.border = 'none';
                blickElement.style.boxShadow = 'none';
                blickElement.style.animation = 'unset';
            });
        },100);
    }

    function lighterForGearsOnly(){
        let element = document.querySelector('#para-gear');
        let cloneElement = element.cloneNode(true);
        cloneElement.id = 'para-gear-clone';
        document.body.appendChild(cloneElement);

        cloneElement.style.filter = 'unset';
        cloneElement.style.filter = 'blur(1px) sepia(100%) saturate(500%) hue-rotate(45deg) drop-shadow(0 0 1em rgb(125, 255, 0))';
        cloneElement.style.animation = 'para-gearclone-add 3s forwards';
        cloneElement.style.zIndex = '-1';
        cloneElement.addEventListener('animationend', () => {
            cloneElement.remove();
            console.log('Animation ended');
        }); 
    }

    function lighterTempElement(){
        let tempElem = document.createElement('DIV');
        tempElem.setAttribute('id','temp-setting-article');
        document.body.appendChild(tempElem);
        //tempElem.classList.add
        //let tempPos0 = document.getElementById('setting-article').getBoundingClientRect();
        let tempPos1 = document.getElementById('logo-image').getBoundingClientRect();
        let tempPos2 = document.getElementById('navy1-bottom').getBoundingClientRect();

        tempElem.style.display = 'flex';
        tempElem.style.position = 'fixed';
        tempElem.style.width = tempPos1.width+'px';
        tempElem.style.height = (tempPos2.top - tempPos1.bottom)+'px';
        tempElem.style.left = tempPos1.left+'px';
        tempElem.style.top = tempPos1.bottom+'px';
        tempElem.style.boxSizing = 'border-box';
        tempElem.style.zIndex = '-1';
        console.log('temp element created');
        tempElem.addEventListener('animationend', () => {
            tempElem.style.display = 'none';
        });
        
        lighterBorder(2);
        setTimeout(()=>{ 
            tempElem.remove(); 
        },3000);
    }

    function highlightBubbles(event){
        //event.target.style.border = '1px solid red';
        //alert(event.target.id);
        let targID = event.target.id;
        if(targID == 'setting5-label' || targID == 'setting5'){
            displayHelpSequencedCreate(0,2, false);
            lighterBorder(3);
        }
        else{
            displayHelpSequencedCreate(0,3, false);
            lighterBorder(4);
        }
    }

    function highlightScrollbar(index){
        
        let scrollbarFake = document.createElement('DIV');
        scrollbarFake.setAttribute('id', 'scrollbarFake');
        scrollbarFake.classList.add('scrollbar-fake');

        document.body.append(scrollbarFake);
        scrollbarFake.style.visibility = 'visible';
        scrollbarFake.style.opacity = '1';
        lighterBorder(5);
        document.body.classList.add('green-scrollbar');
        //document.BODY.classList.add('green-a-scrollbar');

        setTimeout(()=>{
            scrollbarFake.remove(); 
            setTimeout(()=>{ 
                document.body.classList.remove('green-scrollbar');
            },750);
        },2250);
    }

    function runSmallInterval(indexOfRun, indexPointer){
    
        let speedI = 250;
        let speedIncrement = speedI/1000;
        let intCounter = 0;
        let indexPointerNext = 0;
        //let deep = 1;
        let arrayLegth = (helpSequentionTimer[1][indexPointer].length)-1;
        let lastElement = helpSequentionTimer[1][indexPointer][arrayLegth];
        console.log(`small -arrayLeght: ${arrayLegth}, -lastElement: ${lastElement}, -dur: ${lastElement.dur}`);
        smallIntervalRunStatus = true;
    
        if(interuptIntervals[1][indexPointer]==true){ 
            destroyTimeInterval(1, indexPointer, smallInterval, intCounter); 
            return;
        }
        // start interval for arrat iteration in order by the 'timePoint' obj.value 
        smallInterval[indexPointer]= setInterval(()=>{
                if(helpSequentionTimer[1][indexPointer][indexPointerNext].timePoint == intCounter){
                    if (helpSequentionTimer[1][indexPointer][indexPointerNext].display == true){
                        displayHelpSequencedCreate(indexPointer, indexPointerNext, false); //elements displayer
                    }
                    indexPointerNext++;
                        //console.log(`*** START2 ${indexPointer, indexPointerNext} on ${intCounter}s.***`)
                    if( indexPointerNext >= helpSequentionTimer[1][indexPointer].length ){
                        // clearing - destroy running intervals and function self-instances
                        destroyTimeInterval(1, indexPointer, smallInterval[indexPointer], intCounter); 
                        setTimeout(()=>{
                            smallIntervalRunStatus = false;
                            return smallIntervalRunStatus; //return runnerI[indexPointer] = false;
                        },(lastElement.dur+5)*1000);
                    }
                }
                        //console.log(`CYCLE2 time2:${intCounter} | Index2:${indexPointerNext} |waitFor2:${indexPointer}s`); 
            intCounter += speedIncrement;
        },speedI); 
        console.log('interval: '+smallInterval[indexPointer]); console.log('indexOfRun: '+indexOfRun);
        //return indexOfRun++;
    }

    function highlightControls(){
        let navyArrows = new Array('#navy1-left', '#navy1-right', '#navy1-bottom', '#navy1-top');
        for (let a = 0; a < navyArrows.length; a++) {
            document.querySelector(navyArrows[a]).classList.add('highlight-arrow');
            setTimeout(()=>{ 
            document.querySelector(navyArrows[a]).classList.remove('highlight-arrow');
            },3000);
        }
        if(smallIntervalRunStatus==false){
            console.log(`small interval function could be started`);
            runSmallInterval(indexOfRun, 5); // run smallInterval help displayer
        }
        else{
            console.log(`small interval function is running - cannot be started now`);
        }
    }

    /* ***************** temp help function to get element positions and real compare of results **************** */
    function helperPosition(testPosition){

        let what = document.getElementById(testPosition);
        let getStyle = getComputedStyle(what);
        let cssPositionValue = getStyle.getPropertyValue('position');
        /* do refresh blick */what.style.backgroundColor = 'pink'; setTimeout(()=>{what.style.backgroundColor = 'red';},100);
        let coor1 = what.getBoundingClientRect();
        let coor2 = [what.offsetTop, what.offsetLeft];
        //let coor3 = getElementTopLeft(testPosition);
        let coor4 = [window.pageXOffset, window.pageYOffset];
        let coor5 = [window.scrollX, window.scrollY];
            let asd1 =document.documentElement.scrollLeft;
            let asd2 =document.documentElement.scrollTop;
        let coor6 = [asd1,asd2];
        
        what.innerHTML = `<strong style="font-size:1.3em;">Element ID:${testPosition}, tag: ${what.tagName}, css position: ${cssPositionValue}</strong><br/>`;
        what.innerHTML += "<strong>getBoundingClientRect()</strong>";
        what.innerHTML += `top:${coor1.top} - left:${coor1.left} - right:${coor1.right} - bottom:${coor1.bottom} - 
                        width:${coor1.width} - height:${coor1.height} - x:${coor1.x} - y:${coor1.y} <br/><br/>`;
        what.innerHTML += "<strong>parrent.offsetTop/offseLeft (position to parrent)</strong>";
        what.innerHTML += `top:${coor2[0]} - left:${coor2[1]} - parrent:${what.offsetParent}<br/><br/>`;
        what.innerHTML += "<strong>offsetTop/Left function calculate position through all parrents to body tag</strong>";
        what.innerHTML += `top:${coor3.top} - left:${coor3.left} -parent:${what.offsetParent}<br/><br/>`;
        what.innerHTML += "<strong>window.pageXOffset / pageYOffset (scroll coordinates)</strong><br/> ";
        what.innerHTML += `<strong>window.pageYOffset/pageXOffset:</strong> top:${coor4[1]} - left:${coor4[0]} -- <br/>`;
        what.innerHTML += `<strong>window.scrollY/scrollX:</strong>  top:${coor5[1]} - left:${coor5[0]} -- <br/>`;
        what.innerHTML += `<strong>document.documentElement.scrollTop/scrollLeft:</strong> top:${coor6[1]} - left:${coor6[0]}`;
    }

    /* *** unified function for multidimenz. array itteration in order by time value - obj.attr.'timePoint' *** */  
    function runInterval(firstCycle, indexPointer, deep){
        
        let speedI = (deep==0) ? 5000 : 250;
        let speedIncrement = speedI/1000;
        let intCounter = 0;
        let indexPointerNext = 0;
        
        if(interuptIntervals[deep][indexPointer]==true){ 
            destroyTimeInterval(deep, indexPointer, interval[deep], intCounter);
            runIntervalClearance(interval); 
            return;
        }

        // start interval for arrat iteration in order by the 'timePoint' obj.value 
        interval[deep][indexPointer]= setInterval(()=>{
            if(firstCycle == true){
                if(helpSequentionTimer[deep][indexPointer].timePoint == intCounter){
                    //start it-self for next cycles
                    //runnerI[deep+1][indexPointer] = runInterval(false, indexPointer, deep+1);
                    runInterval(false, indexPointer, deep+1);
                    indexPointer++;
                            //console.log(`* START1 ${indexPointer} on ${intCounter}s.*`);

                    if(indexPointer >= helpSequentionTimer[0].length-1){       
                        logoAnimations();
                    }
                    if(indexPointer >= helpSequentionTimer[0].length || intCounter >= helpSequentionTimer[deep][helpSequentionTimer[deep].length]){      
                        // clearing - destroy running intervals and function self-instances 
                        destroyTimeInterval(deep, indexPointer, interval[deep], intCounter); 
                        runIntervalClearance(interval); // total clearance for sure
                        return; //return runnerI[0] = false; 
                    }
                }
                        //console.log(`CYCLE1 time1:${intCounter}s | Index1:${indexPointer} | waitFor1:${helpSequentionTimer[0][indexPointer].timePoint}s `);
            }
            else{
                if(helpSequentionTimer[deep][indexPointer][indexPointerNext].timePoint == intCounter){
                    if (helpSequentionTimer[deep][indexPointer][indexPointerNext].display == true){
                        displayHelpSequencedCreate(indexPointer, indexPointerNext, false); //elements displayer
                    }
                    indexPointerNext++;
                        //console.log(`*** START2 ${indexPointer, indexPointerNext} on ${intCounter}s.***`)
                    if( indexPointerNext >= helpSequentionTimer[deep][indexPointer].length ){
                        // clearing - destroy running intervals and function self-instances
                        destroyTimeInterval(deep, indexPointer, interval[deep][indexPointer], intCounter); 
                        return; //return runnerI[indexPointer] = false;
                    }
                }
                        //console.log(`CYCLE2 time2:${intCounter} | Index2:${indexPointerNext} |waitFor2:${indexPointer}s`); 
            }
            intCounter += speedIncrement;
        },speedI); 
        console.log('interval'+interval);
        return true;
    }

    function destroyTimeInterval(interuptIntervalIndex, indexPointer, interval, second){
        clearInterval(interval);
        console.log(`!!! interval ${interuptIntervalIndex} - id:${indexPointer} was destroyed after ${second} --iValue: -> ${interval}`); 
    }

    // clear all intervals after function done - only for sure
    function runIntervalClearance(interval){
        for(let a=0; a<interval.length; a++){
            for(let b=0; b<interval[a].length; b++){
                clearInterval(interval[a][b]);
                console.log(`***!!!***interval clearance: interval[${a}][${b}]=${interval[a][b]}`);
            }
        }
    }

    function destroyGuideSequence(){
        console.log(`destroy help started`);
        interuptIntervals = [true, true];

        for(let a=0; a<helpPosition.length; a++){
            for(let b=0; b<helpPosition[a].length; b++){
                let forHidden = document.getElementById(`help-guide-${a}${b}`);
                
                if(forHidden){
                    let timerHidder = (forHidden.getAttribute('id') == 'help-guide-01') ? 1000 : 0;
                    setTimeout(()=>{ 
                        helpDestroyer(a,b);
                    },timerHidder );
                }
            }
        }
        for(let a=0; a<interval.length; a++){
            console.log(`1st iteration inter-${a}: ${interval[a]}`);    
            interval[a].forEach((inter, interIndex) =>{
                clearInterval(inter); console.log(`2nd iter: trying to destroy all intervals inter-${interIndex} :${inter}`);
            });
        }
        runIntervalClearance(interval); 
    }

    /* ********************* help and guide ******************* */
    function handleSwitches(switchKey, input, el, index){
        let boolie = (input.checked == true) ? true : false
        switches[switchKey].forEach(elem =>{ 
            elem.checked = boolie;
            switchesFunctions[switchKey]();
        });
        console.log('wtf:<?'+a+/*switchesFunctions[switchKey]*/+boolie+'....'+input+el+ this + index +input.checked);
    }

    function safetyWaitingForSwitchCreated(){
        let switch99 = document.getElementById('setting99');
        let timeWhenGuideSwitchArises = (helpSequentionTimer[0][0].timePoint + helpSequentionTimer[1][0][1].timePoint)*1000;
        console.log('********** :'+timeWhenGuideSwitchArises);
        
        setTimeout(()=>{ 
            if(switch99){
                switch99.addEventListener('change', destroyGuideSequence); 
                return;
            }
            else{ 
                safetyWaitingForSwitchCreated(); 
            }
        },timeWhenGuideSwitchArises);
    }

    function bubbleHelpEventSetter(index, event){
        //let guideAndHelpArray;
        let funct = guideAndHelpArray[index].functi;
        let param = guideAndHelpArray[index].funcParam;
        let helpToDisplay = guideAndHelpArray[index].bubbleIndex;
        
        if(param=='eventer'){
            funct(event);
        }
        else{
            funct(param);
        }
        if(guideAndHelpArray[index].dispalyBubbles == true){    
            displayHelpSequencedCreate(helpToDisplay[0], helpToDisplay[1], false);
            event.target.addEventListener('mouseout', ()=>{
                    helpDestroyer(helpToDisplay[0],helpToDisplay[1]);
                }
            );
        }
    }

    /* page description function */
    function pageDescriptor(id){
        document.querySelector('#page-description').innerHTML = projectPageDescriptor[id] + projectPageDescriptorTech;
        document.querySelector('#page-description').style.opacity = '1';
        this.addEventListener('mouseout', pageDescriptorClose);
    }
    function pageDescriptorClose(){
        setTimeout(()=>{
            document.querySelector('#page-description').style.opacity = '0';
        },1000);
    }
    
/* ****************************** FUNCTIONS END *************************************** */

/* ************************************************************************************ */
/* ****************************** LOGIC & EXECUSIONS ********************************** */
/* ************************************************************************************ */
   
/* *** "like main class" executor startJS() *** */
function startJS(){
    // don't forget to clean and put everyfunctions here!!!
    // I am too lazy as every time - one tab will solve it... done :)

    let pageStatusMustBeCharacter = new Array("0","1","2","3","4");
    setTimeout(function(){ logoAnimations(); }, 1000);
    //sequentionCommonDefault();

/* ******* for clearance start ******** */
    for(let a=0; a<navyRadio.length; a++){
        navyRadioArray.push(Array.from(navyRadio[a].getElementsByTagName('a')));
        //console.log('catch radio buttons: '+navyRadioArray[a]);
    }

    for(let a=0; a<navyRadioArray.length; a++){
        for(let b=0; b<navyRadioArray[a].length; b++){
            navyRadioArray[a][b].addEventListener('click', setNavyRadio);
            //console.log(navyRadioArray[a][b]);
        }
    }

    for(let a=0; a<navyArrowsArray.length; a++){
        navyArrowsArray[a].getElementsByTagName('a')[0].addEventListener('click', setNavyRadio);
        //console.log('arrows anchor: '+navyArrowsArray[a].getElementsByTagName('a')[0]);
    }

    // menuItems.forEach(element =>{
    //     element.addEventListener('click', setNavyRadio);
    // });
    for(let a=0; a<menuItems.length; a++){
        menuItems[a].addEventListener('click', setNavyRadio);
    }

    for(let a=0; a<projectLinkArray.length; a++){
        document.getElementById(projectLinkArray[a]).addEventListener('click', runProjectsAnims);
        //console.log(`navy 2 array ${[a]} : ${projectLinkArray[a]}`);
    }

    // focus margin set for Project
    for(a=0; a<leftMargin.length; a++){
        focusedElement[a] = 'project project'+a;
        allFocusedClassElements = document.querySelectorAll('.project'+a);

        allFocusedClassElements.forEach(element =>{
            //conter++; console.log('element num:'+conter+' from class: '+focusedElement[a]);
            element.addEventListener('click', hoverr);
        }); 
    }

    document.getElementById('li2').addEventListener('click', runProjectsAnims);
    document.getElementById('li2-ol').addEventListener('click', runProjectsAnims);
    document.getElementById('projects').addEventListener('mouseover', runProjectsAnims);
    document.getElementById('projects').addEventListener('click', runProjectsAnims);
    //document.getElementById('li0').addEventListener('click', function(){$('.logo-image').ripples('pause');} );

    /* neon-blick anim preparation ONPAGE LOAD */
    window.addEventListener('load', runNeonPrepare());


    // run it immediately after start
    putRippleDrop(dropIndex);
    document.addEventListener( 'visibilitychange' , handleOnVisibilityChange, false );
    window.addEventListener("hashchange", verticalUrlChange);
    document.querySelector('.color-optimizer').style.visibility = 'hidden';
    navBarElement2.style.animation = 'navbar-move 1.5s ease-out forwards';


    contactsPrompt.addEventListener('mouseover', ()=>{ 
        contactsPrompt.style.opacity = '1';
        delayerConPrompt();
    }, true);

    contactsPrompt.addEventListener('focus', ()=>{ 
        contactsPrompt.style.opacity = '1';
        delayerConPrompt();
    }, true);

    for(let a = 0; a<contactsElements.length; a++){
        document.querySelector(`#${contactsElements[a]} a`).addEventListener('mouseover', displayContactsPopUp);
    }
    contactsPrompt.querySelector('button').addEventListener('click', copyContactsPopUp);

    /* *************** event listeners for CONTACTS ICONs ****************** */
    for(let a = 0; a<contactsElements.length; a++){
        let spinnerA = document.querySelectorAll(`#${contactsElements[a]}`);
        let spinnerBIco = document.querySelectorAll(`#${contactsIcoElements[a]}`);
        spinnerA[0].addEventListener('mouseover', ()=>{  
            spinnerBIco.forEach(spinnerIco => {
                spinnerIco.classList.add('contacts-spinner');
            });
        });
        spinnerA[0].addEventListener('mouseout', ()=>{  
            spinnerBIco.forEach(spinnerIco => {
                spinnerIco.classList.remove('contacts-spinner');
            });
        });
    }

    /* *************** event listeners for SKILLs ICONs ****************** */
    for(let a = 0; a<skillsIcoArray[0].length; a++){
        
        skillsIcoArray[0][a].addEventListener('mouseover', ()=>{  
            skillsIcoArray[1][a].classList.add('skills-ico-hover');
            skillsIcoArray[2][a].classList.add('skills-ico-hover');
        }, true);
        skillsIcoArray[0][a].addEventListener('mouseout', ()=>{  
            skillsIcoArray[1][a].classList.remove('skills-ico-hover');
            skillsIcoArray[2][a].classList.remove('skills-ico-hover');
        }, true);
    }

    // add mouseover event to setting help for scrolling to article + delay
    helpElementsArray.forEach((element, index) =>{
        element.addEventListener('mouseover', () => {
            delayer2 = setTimeout(()=>{scrollToHelpArticle(index);}, 400); 
        });
        element.addEventListener('mouseout', () => {
            clearTimeout(delayer2); 
        });
    });

    // main interval for help&guide
    runInterval(true, 0, 0);
/* ******* for code clearance end ********** */

    // settings section - switch events
    for(let switchesKey = 0; switchesKey<switches.length; switchesKey++){ 
        switches[switchesKey].forEach((element, key) => {
            element.addEventListener('change', (el)=>{ handleSwitches(switchesKey, element, el, key); });
        });
    }
    
    // add events and functions for setting elements (and highlighters)
    for(let a=0; a<guideAndHelpArray.length; a++){
        let iterater = guideAndHelpArray[a].variab; //let iterater = iterater.parrentElement; // need to work with the LABEL tag

        if(guideAndHelpArray[a].single == false){
            //console.log(`variab: ${guideAndHelpArray[a].variab}`);
            iterater.forEach(element=>{
                //let parrenterer0 = element.parentNode;
                let parenterer = element.parentElement;
                //console.log(`parent NODE:${parrenterer0} parent ELEMENT: ${parrenterer1}`);
                parenterer.addEventListener('mouseover', (event)=>{
                    delayere = setTimeout(()=>{ 
                        //parenterer.style.border = '3px solid green'; 
                        bubbleHelpEventSetter(guideAndHelpArray[a].index, event);
                    },delay );
                    //parenterer.style.border = '3px solid red';
                    //console.log(`MOUSE OVER happend: ${element.getAttribute('id')}, index: ${guideAndHelpArray[a].index} `);
                }, false);
                parenterer.addEventListener('mouseout', ()=>{ 
                    clearTimeout(delayere); 
                    //parenterer.style.border = 'none';
                    //console.log(`MOUSE OUT happend: clear timeout ${element.getAttribute('id')}`);
                }, false);
            });
        }
        else{
            let parenterer = iterater.parentElement;
            //console.log(`parent NODE:${parrenterer0} parent ELEMENT: ${parrenterer1}`);
            parenterer.addEventListener('mouseover', (event)=>{
                delayere = setTimeout(()=>{ 
                    //parenterer.style.border = '3px solid green'; 
                    bubbleHelpEventSetter(guideAndHelpArray[a].index, event);
                },delay );
                //parenterer.style.border = '3px solid red';
                //console.log(`MOUSE OVER happend: ${iterater.getAttribute('id')}, index: ${guideAndHelpArray[a].index} `);
            }, false);
            parenterer.addEventListener('mouseout', ()=>{ 
                clearTimeout(delayere);
                //parenterer.style.border = 'none';
                //console.log(`MOUSE OUT happend: clear timeout ${iterater.getAttribute('id')}`);
            }, false);
        }
    }

    setTimeout(()=>{ paraGearRotateSwitch[0].checked = true; paraGearRotateSwitch[1].checked = true; handleParaGearRotate(); },10000);
    setTimeout(()=>{ 
        if(screenResolutionX>980){
            rippleSwitch[0].checked = true; rippleSwitch[1].checked = true; rippleHandler();  // start onload in order by ripple checkbox switch state  
        }
    },3000);
    safetyWaitingForSwitchCreated();
    //setTimeout(mouseTouch(), 5000);

    /* set events for project description */
//    projectElementsDescript.forEach((element, id) => {
//        element.addEventListener('mouseover', ()=>{
            /*element.style.border = '1px solid black';*/
//            delayereForDescrib = setTimeout( ()=>{ pageDescriptor(id); }, delayForDescrib);
//        });
//        element.addEventListener('mouseout', ()=>{ clearTimeout(delayereForDescrib); });
        //element.addEventListener('mouseout', ()=>{ pageDescriptorClose(); });
        //element.addEventListener('click', pageDescriptorClicker);
//    });


} // this is end of ONLOAD function

window.addEventListener('load', startJS); // start "class main" - final executor



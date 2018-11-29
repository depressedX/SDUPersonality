window.PersonalityTester = function () {

    let getImageUrl = name => `personalities/${name}.png`

    let userInfo = {
        name: '',
        sex: ''
    }

    const personalityTypes = [
        // 0
        {
            name: '山大橘猫型人格',
            description: '你喜欢慵懒地躺在花坛里，眯着眼睛晒太阳。你的世界里哪有那么多可烦恼的事情，有小鱼干，有撒欢的地盘，你只要负责可爱就够了。',
            url: getImageUrl('shandajumao')
        },
        // 1
        {
            name: '山大白猫型人格',
            description: '你总是优雅又高贵，从来不屑跟凡人一起玩耍。\n' +
                '“咦？什么味道这么香？我才不是想吃你的猫粮哦，本公主只是给你个机会服侍我罢了。”\n',
            url: getImageUrl('baimao')
        },
        // 2
        {
            name: '知新楼型人格',
            description: '你喜欢站在高处的感觉，好像能够拥抱整个世界。你总是带着满满的正能量，像个小太阳，在你身边的朋友也容易被感染得乐观积极～',
            url: getImageUrl('zhixinlou')
        },
        // 3
        {
            name: '小树林型人格',
            description: '每天的早安和晚安，都想说给你听。你是个很好的倾听者，总能为朋友提供肩膀和拥抱，这样温柔的你格外让人安心呢。',
            url: getImageUrl('xiaoshulin')
        },
        // 4
        {
            name: '情人坡型人格',
            description: '你的名字就是最美的情书。你总是柔软细腻，记得每一个重要的日子，擅长为身边的人制造小惊喜。浪漫又温情的你，是每个人的理想型呀。',
            url: getImageUrl('qingrenpo')
        },
        // 5
        {
            name: '青岛风型人格',
            description: '呼呼——呼呼呼，你总是风风火火，直爽又潇洒。你从来不懂放弃，能一年到头围着热爱的事情打转，笨拙却坚持的样子是那么可爱。',
            url: getImageUrl('qingdaofeng')
        },
        // 6
        {
            name: '文心湖型人格',
            description: '你自有一方小天地，心境总是像湖水一样平和。不论下雨还是落雪，都不会让你悲伤，反而使你更加纯洁清澈。',
            url: getImageUrl('wenxinhu')
        },
        // 7
        {
            name: '鸡蛋饼型人格',
            description: '你受欢迎的程度令人发指！但仔细想想，你既能保持自己骄傲的棱角，内在又非常柔软热情，这样的你怎么能不讨人喜欢！',
            url: getImageUrl('jidanbing')
        },
        // 8
        {
            name: '号院型人格',
            description: '你总是浑身散发着可靠的气息，身边的人很容易对你产生信任和依赖。其实你只是习惯沉稳，却也不怕担上责任的担子，这些让你成长得更快。',
            url: getImageUrl('haoyuan')
        },
        // 9
        {
            name: '风雨操场型人格',
            description: '自由、乐观、热情、直爽是你的标签。你爱好自由，懂得生活，喜欢随心所欲地侃侃而谈，喜欢跑跑跳跳，永远带着乐观自信的人生态度，发现并探索自己未知的领域，自信满满地描绘自己的生命篇章。',
            url: getImageUrl('fengyucaochang')
        },
        // 10
        {
            name: '麻辣香锅人格',
            description: '热血达人，想来说的就是你啦！你为人直率坦诚，做起事来大大咧咧，又有些冲动。你是一个很有创意的人，点子多，又很有决断力与行动力，给人一种积极向上之感。身旁的人看到你充满活力、阳光向上的样子，大家都会充满干劲呐！',
            url: getImageUrl('malaxiangguo')
        },
        // 11
        {
            name: '校友门型人格',
            description: '开放、包容的你喜欢结交五湖四海的朋友们，你始终以一颗包容的心态去对待周围的一切。海纳百川、有容乃大，你从来不拒人于门外，用心去和每一个不同的心灵交流。',
            url: getImageUrl('xiaoyoumen')
        },
        // 12
        {
            name: '海棠花型人格',
            description: '美丽是你的标签，但却不是全部；你在生活中给人带来欢欣，用自己对世界的热爱去感染别人；海棠无香，你从不张扬，却足以令人瞩目。',
            url: getImageUrl('haitanghua')
        },
    ]


    let answerList = []

    const optionTypes = {
        A: Symbol('A'),
        B: Symbol('B'),
        C: Symbol('C'),
        D: Symbol('D'),
    }

    // 二值随机数true/false
    const binRandom = () => Math.random() >= .5 ? true : false
    // 三值随机数0/1/-1
    const triRandom = () => {
        let r = Math.random()
        return r >= 2 / 3 ? 1 : r >= 1 / 3 ? 0 : -1
    }

    return {

        /**
         * 表单验证通过返回true 否则返回false
         * @return {boolean}
         */
        updateUserInfo: (name, sex) => {
            userInfo.name = name
            userInfo.sex = sex
        },
        updateAnswer(questionIndex, option) {
            answerList[questionIndex] = option
        },
        getTestingResult() {
            if (answerList[5] === optionTypes.A) {
                // 橘猫或文心湖 风雨操场
                let r = triRandom()
                return personalityTypes[r > 0 ? 0 : r < 0 ? 6 : 9]
            } else if (answerList[4] === optionTypes.A) {
                // 号院或者白猫 校友门
                let r = triRandom()
                return personalityTypes[r > 0 ? 1 : r < 0 ? 8 : 11]
            } else if (answerList[5] === optionTypes.D) {
                // 小树林、情人坡、海棠花、麻辣香锅
                return personalityTypes[binRandom() ? (binRandom() ? 3 : 4) : (binRandom() ? 10 : 12)]
            } else {
                // 知新楼、鸡蛋饼、风的界面
                let r = triRandom()
                return personalityTypes[r > 0 ? 2 : r < 0 ? 5 : 7]
            }
        },
        showPersonalPoster() {
            let res = this.getTestingResult()
            let canvas = document.createElement('canvas'),
                cc = canvas.getContext('2d')
            canvas.width = 640
            canvas.height = 1136

            let image = new Image()
            image.src = res.url
            image.onload = () => {

                cc.drawImage(image, 0, 0)

                cc.fillStyle = '#fff'
                cc.font = "bolder 25px NSimSun"
                cc.fillText(userInfo.name, 180, 57);

                let posterUrl = canvas.toDataURL('image/jpeg')

                let content = `
    <style>
        /*专属海报css*/

        .personal-poster{
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            color: white;
            background-color: rgba(50,50,50,.5);
        }
        .personal-poster__img{
            margin-top: 1em;
            width: 73%;
            height: 78%;
            object-fit: contain;
            animation: poster-transition 2s;
        }
        .restart-button{
            font-size: 1.5em;
            height: 2em;
            color: white;
            background-color: transparent;
            border: 1px solid white;
            border-radius: 1em;
            padding: 0 2em;
        }
        .restart-button:hover{
            cursor: pointer;
        }
        .restart-button:focus{
            outline: none;
        }
        
        @keyframes poster-transition {
            from {
                transform: scale(2.5);
            }
            to{
                transform: scale(1);
            }
        }
        
    </style>
    <div class="personal-poster">
        <img src="${posterUrl}" class="personal-poster__img">
        <p class="personal-poster__hint">长按保存图片</p>
        <button class="restart-button" onclick="location.reload()">再测一次</button>
    </div>`
                let node = document.createElement('div')
                document.body.appendChild(node)
                node.outerHTML = content

            }


        },

        optionTypes
    }

}()
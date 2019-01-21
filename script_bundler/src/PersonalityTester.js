window.PersonalityTester = function () {

    const posterBgUrl = 'personalities/poster_bg.png'
    const iSubPath = Math.random() < .5 ? 'nmc' : 'online'
    
    let getImageUrl = name => `personalities/${iSubPath}/${name}.png`
    let getNameImageUrl = name => `personality_names/${name}.png`

    let userInfo = {
        name: '',
        sex: ''
    }

    const personalityTypes = [
        // 0
        {
            name: '山大橘猫型人格',
            url: getImageUrl('shandajumao'),
            nameUrl: getNameImageUrl('shandajumao'),
        },
        // 1
        {
            name: '山大白猫型人格',
            url: getImageUrl('baimao'),
            nameUrl: getNameImageUrl('baimao'),
        },
        // 2
        {
            name: '知新楼型人格',
            url: getImageUrl('zhixinlou'),
            nameUrl: getNameImageUrl('zhixinlou'),
        },
        // 3
        {
            name: '小树林型人格',
            url: getImageUrl('xiaoshulin'),
            nameUrl: getNameImageUrl('xiaoshulin'),
        },
        // 4
        {
            name: '情人坡型人格',
            url: getImageUrl('qingrenpo'),
            nameUrl: getNameImageUrl('qingrenpo'),
        },
        // 5
        {
            name: '青岛风型人格',
            url: getImageUrl('qingdaofeng'),
            nameUrl: getNameImageUrl('qingdaofeng'),
        },
        // 6
        {
            name: '文心湖型人格',
            url: getImageUrl('wenxinhu'),
            nameUrl: getNameImageUrl('wenxinhu'),
        },
        // 7
        {
            name: '鸡蛋饼型人格',
            url: getImageUrl('jidanbing'),
            nameUrl: getNameImageUrl('jidanbing'),
        },
        // 8
        {
            name: '号院型人格',
            url: getImageUrl('haoyuan'),
            nameUrl: getNameImageUrl('haoyuan'),
        },
        // 9
        {
            name: '风雨操场型人格',
            url: getImageUrl('fengyucaochang'),
            nameUrl: getNameImageUrl('fengyucaochang'),
        },
        // 10
        {
            name: '麻辣香锅人格',
            url: getImageUrl('malaxiangguo'),
            nameUrl: getNameImageUrl('malaxiangguo'),
        },
        // 11
        {
            name: '校友门型人格',
            url: getImageUrl('xiaoyoumen'),
            nameUrl: getNameImageUrl('xiaoyoumen'),
        },
        // 12
        {
            name: '海棠花型人格',
            url: getImageUrl('haitanghua'),
            nameUrl: getNameImageUrl('haitanghua'),
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

    // 记录最后测试结果
    let res = null

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
            if (res) {
                return res
            }
            if (answerList[5] === optionTypes.A) {
                // 橘猫或文心湖 风雨操场
                let r = triRandom()
                res = personalityTypes[r > 0 ? 0 : r < 0 ? 6 : 9]
            } else if (answerList[4] === optionTypes.A) {
                // 号院或者白猫 校友门
                let r = triRandom()
                res = personalityTypes[r > 0 ? 1 : r < 0 ? 8 : 11]
            } else if (answerList[5] === optionTypes.D) {
                // 小树林、情人坡、海棠花、麻辣香锅
                res = personalityTypes[binRandom() ? (binRandom() ? 3 : 4) : (binRandom() ? 10 : 12)]
            } else {
                // 知新楼、鸡蛋饼、风的界面
                let r = triRandom()
                res = personalityTypes[r > 0 ? 2 : r < 0 ? 5 : 7]
            }
            return res
        },
        showResult() {
            let res = this.getTestingResult()
            let node = document.createElement('div')
            document.body.appendChild(node)
            node.outerHTML = `
            <div class="testing-result" id="testing-result">
    <img src="private_images/cele.png" class="cele">
    <img src="private_images/dangdangdang.png" class="dangdangdang">
    <img class="personality" src="${res.nameUrl}">
    <button class="enter-button" id="enter-button">点击查看你的人格报告</button>
    <style>
        .testing-result{
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #bbdadc;
            color: #0a2d2f;
        }
        .testing-result .cele{
            width: 50%;
            position: absolute;
            left: 0;
        }
        .testing-result .dangdangdang{
            width: 70%;
            position: absolute;
            left: 15%;
            top: 20%;
            animation: dangdangdang ease-in-out 200ms infinite alternate ;
            transform-origin: 30% 70%;
        }
        @keyframes dangdangdang {
            0%{
                transform: rotateZ(0);
            }
            100%{
                transform: rotateZ(5deg);
            }
        }
        .testing-result .personality{
            position: absolute;
            box-sizing: border-box;
            width: 83%;
            left: 10%;
            top: 50%;
        }
        .testing-result .enter-button{
            position: absolute;
            bottom: 1em;
            right: 1em;
            border: none;
            background-color: transparent;
            color: inherit;
            font-size: 1.2em;
        }

        .testing-result .enter-button:focus{
            outline: none;
        }
    </style>
</div>
`

            let enterButton = document.getElementById('enter-button')
            let outerBox = document.getElementById('testing-result')
            enterButton.addEventListener('click', function () {
                outerBox.parentNode.removeChild(outerBox)
                PersonalityTester.showPersonalPoster()
            })
            
            
            // 在这里预加载即将生成的海报图片
            // 背景url在html中已经预加载了
            let i = new Image()
            i.src = res.url

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
                cc.textAlign = 'right'
                cc.fillText(userInfo.name, 240, 57);
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
            background-image: url("${posterBgUrl}");
            background-size: cover;
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
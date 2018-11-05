window.PersonalityTester = function () {

    let userInfo = {
        name: '',
        sex: ''
    }

    const personalityTypes = [
        // 0
        {
            name: '山大橘猫型人格',
            description: '你喜欢慵懒地躺在花坛里，眯着眼睛晒太阳。你的世界里哪有那么多可烦恼的事情，有小鱼干，有撒欢的地盘，你只要负责可爱就够了。'
        },
        // 1
        {
            name: '山大白猫型人格',
            description: '你总是优雅又高贵，从来不屑跟凡人一起玩耍。\n' +
                '“咦？什么味道这么香？我才不是想吃你的猫粮哦，本公主只是给你个机会服侍我罢了。”\n'
        },
        // 2
        {
            name: '知新楼型人格',
            description: '你喜欢站在高处的感觉，好像能够拥抱整个世界。你总是带着满满的正能量，像个小太阳，在你身边的朋友也容易被感染得乐观积极～'
        },
        // 3
        {
            name: '小树林型人格',
            description: '每天的早安和晚安，都想说给你听。你是个很好的倾听者，总能为朋友提供肩膀和拥抱，这样温柔的你格外让人安心呢。'
        },
        // 4
        {
            name: '情人坡型人格',
            description: '你的名字就是最美的情书。你总是柔软细腻，记得每一个重要的日子，擅长为身边的人制造小惊喜。浪漫又温情的你，是每个人的理想型呀。'
        },
        // 5
        {
            name: '青岛风型人格',
            description: '呼呼——呼呼呼，你总是风风火火，直爽又潇洒。你从来不懂放弃，能一年到头围着热爱的事情打转，笨拙却坚持的样子是那么可爱。'
        },
        // 6
        {
            name: '文心湖型人格',
            description: '你自有一方小天地，心境总是像湖水一样平和。不论下雨还是落雪，都不会让你悲伤，反而使你更加纯洁清澈。'
        },
        // 7
        {
            name: '鸡蛋饼型人格',
            description: '你受欢迎的程度令人发指！但仔细想想，你既能保持自己骄傲的棱角，内在又非常柔软热情，这样的你怎么能不讨人喜欢！'
        },
        // 8
        {
            name: '号院型人格',
            description: '你总是浑身散发着可靠的气息，身边的人很容易对你产生信任和依赖。其实你只是习惯沉稳，却也不怕担上责任的担子，这些让你成长得更快。'
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
                // 橘猫或文心湖
                return personalityTypes[binRandom() ? 0 : 6]
            } else if (answerList[4] === optionTypes.A) {
                // 号院或者白猫
                return personalityTypes[binRandom() ? 1 : 8]
            } else if (answerList[5] === optionTypes.D) {
                return personalityTypes[binRandom() ? 3 : 4]
            } else {
                // 知新楼、鸡蛋饼、风的界面
                let r = triRandom()
                return personalityTypes[r > 0 ? 2 : r < 0 ? 5 : 7]
            }
        },

        optionTypes
    }

}()
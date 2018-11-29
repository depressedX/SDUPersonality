


function waitClickingScreen() {
    this.stop()
    let clickFunc = ()=>{
        this.play()
        window.document.body.removeEventListener('click',clickFunc)
    }
    window.document.body.addEventListener('click',clickFunc)
}


/**
 * 在此帧停止并等待回答后继续
 * 请绑定this到adobe animate scopes
 * @param questionIndex要回答的问题序号
 * @param adobeSymbolInfo adobe元件的信息，要为他们绑定监听器
 *          name : String,
 *          representedAnswer : enum PersonalityTester.optionTypes
 */
function waitAnswer(questionIndex, adobeSymbolsInfo = [
    {
        name: `option${questionIndex}A`,
        representedAnswer: PersonalityTester.optionTypes.A
    },
    {
        name: `option${questionIndex}B`,
        representedAnswer: PersonalityTester.optionTypes.B
    },
    {
        name: `option${questionIndex}C`,
        representedAnswer: PersonalityTester.optionTypes.C
    },
    {
        name: `option${questionIndex}D`,
        representedAnswer: PersonalityTester.optionTypes.D
    },
]) {

    this.stop();
    adobeSymbolsInfo.forEach(symbol => {

        this[symbol.name].addEventListener("click", mouseClickHandler.bind(this));

        function mouseClickHandler() {
            PersonalityTester.updateAnswer(questionIndex, symbol.representedAnswer)
            this.play();
        }

    })
}

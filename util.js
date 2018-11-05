let submitButtonDom = document.getElementById('user-info__submit'),
    formDom = document.getElementById('user-info__form'),
    nameDom = document.getElementById('user-info__name'),
    maleDom = document.getElementById('user-info__male')

submitButtonDom && submitButtonDom.addEventListener('click', () => {

    let validityPass = formDom.reportValidity()
    if (validityPass) {
        PersonalityTester.updateUserInfo(nameDom.value, maleDom.checked ? '男' : '女')
    }

})

function removeUserInfoDom() {
    let node = document.getElementById('user-info')
    node.parentNode.removeChild(node)
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
    window.a = this
    adobeSymbolsInfo.forEach(symbol => {

        this[symbol.name].addEventListener("click", mouseClickHandler.bind(this));

        function mouseClickHandler() {
            alert(`${questionIndex}  ${symbol.representedAnswer.toString()}`);
            PersonalityTester.updateAnswer(questionIndex, symbol.representedAnswer)
            this.play();
        }

    })
}

// 将字符串分割为单词
// 英文字母为单词
// 中文单个字为单词
function chineseMixedSplit(s) {
    let sArray = s.split(/(\s)/)
    let newSArray = []
    sArray.forEach(c => {
        let curC = ''
        for (let sc of c) {
            curC += sc
            if (sc >= '\u{4E00}' && sc <= '\u{9FA5}') {
                // 中文
                newSArray.push(curC)
                curC = ''
            }
        }
        if (curC.length > 0) newSArray.push(curC)
    })
    return newSArray
}


// 重写createjs 的drawText方法
createjs.Text.prototype._drawText = function (ctx, o, lines) {
    var paint = !!ctx;
    if (!paint) {
        ctx = Text._workingContext;
        ctx.save();
        this._prepContext(ctx);
    }
    var lineHeight = this.lineHeight || this.getMeasuredLineHeight();

    var maxW = 0, count = 0;
    var hardLines = String(this.text).split(/(?:\r\n|\r|\n)/);
    for (var i = 0, l = hardLines.length; i < l; i++) {
        var str = hardLines[i];
        var w = null;

        if (this.lineWidth != null && (w = ctx.measureText(str).width) > this.lineWidth) {
            // text wrapping:
            var words = chineseMixedSplit(str);
            console.log(words)
            str = words[0];
            w = ctx.measureText(str).width;

            for (var j = 1, jl = words.length; j < jl; j ++) {
                // Line needs to wrap:
                var wordW = ctx.measureText(words[j]).width;
                if (w + wordW > this.lineWidth) {
                    if (paint) {
                        this._drawTextLine(ctx, str, count * lineHeight);
                    }
                    if (lines) {
                        lines.push(str);
                    }
                    if (w > maxW) {
                        maxW = w;
                    }
                    str = words[j];
                    w = ctx.measureText(str).width;
                    count++;
                } else {
                    str += words[j];
                    w += wordW;
                }
            }
        }

        if (paint) {
            this._drawTextLine(ctx, str, count * lineHeight);
        }
        if (lines) {
            lines.push(str);
        }
        if (o && w == null) {
            w = ctx.measureText(str).width;
        }
        if (w > maxW) {
            maxW = w;
        }
        count++;
    }

    if (o) {
        o.width = maxW;
        o.height = count * lineHeight;
    }
    if (!paint) {
        ctx.restore();
    }
    return o;
};
 
function initializePixels() {
    var t = document.createElement("canvas"),
        a = t.getContext("2d");
    t.width = window.innerWidth, t.height = window.innerHeight, (targetImage = new TargetImage).width = t.width, targetImage.height = t.height;
    var e = 20;
    "relative" == config.fontSize.type ? e = config.fontSize.size * t.width : "absolute" == config.fontSize.type && (e = config.fontSize.size), e > config.fontSize.maxSize && (e = config.fontSize.maxSize), a.fillStyle = config.textColor, a.font = e + "px " + config.fontFamily;
    for (var o = config.textX * t.width, i = config.textY * t.height, n = 0; n < config.text.length; n++)
        a.fillText(config.text[n], 10, e + n * e);
    for (var r = (imageData = a.getImageData(0, 0, targetImage.width, targetImage.height)).data, d = 0; d < targetImage.width; d++)
        for (var h = 0; h < targetImage.height; h++) {
            var s = 4 * (h * targetImage.width + d),
                m = r[s],
                c = r[s + 1],
                l = r[s + 2],
                g = r[s + 3];
            g > 0 && targetImage.particles.push(new Particle(o + d, i + h, m, c, l, g))
        }
    var f = "left";
    for (n = 0; n < config.direction.length; n++) {
        if ("default" == config.direction[n].maxWidth) {
            f = config.direction[n].direction;
            break
        }
        if (t.width < config.direction[n].maxWidth) {
            f = config.direction[n].direction;
            break
        }
    }
    var p = 0,
        M = .25,
        w = .5,
        u = .75;
    switch (f) {
    case "bottomleft":
        p = 0, M = .5, w = .5, u = 1;
        break;
    case "bottom":
        p = .25, M = .5, w = .75, u = 1;
        break;
    case "bottomright":
        p = .5, M = .5, w = 1, u = 1;
        break;
    case "right":
        p = .5, M = .25, w = 1, u = .75;
        break;
    case "topright":
        p = .5, M = 0, w = 1, u = .5;
        break;
    case "top":
        p = .25, M = 0, w = .75, u = .5;
        break;
    case "topleft":
        p = 0, M = 0, w = .5, u = .5
    }
    p *= t.width, w *= t.width, M *= t.height, u *= t.height;
    for (n = 0; n < targetImage.particles.length; n++) {
        var v = targetImage.particles[n];
        v.startX = randomUniformDistribution(p, w), v.startY = randomUniformDistribution(M, u), v.x = v.startX, v.y = v.startY, v.animationTime = config.particleAnimation.time + randomUniformDistribution(-config.particleAnimation.time / 3, config.particleAnimation.time / 3)
    }
}
function setCanvasWidthAndHeight() {
    canvas.height = $('#brand__animation').height(), canvas.width = $('#brand__animation').width()
}
function mainLoop(t) {
    delta = t - lastFrameTimeMs, lastFrameTimeMs = t, delta >= 100 && (delta = 100), delta = delta, elapsedTime += delta;
    update(delta / 1e3, elapsedTime), draw(), requestAnimationFrame(mainLoop)
}
function update(t, a) {
    var e = targetImage.particles,
        o = !1;
    (generationProbabilityTimer += t) > GENERATION_PROBABILITY_EVAL_TIME && (o = !0, generationProbabilityTimer -= GENERATION_PROBABILITY_EVAL_TIME);
    for (var i = 0, n = 0; n < e.length; n++) {
        (r = e[n]).state == ParticleStateEnum.GENERATION && o && r.appearingProbability > Math.random() && i++
    }
    for (n = 0; n < e.length; n++) {
        var r;
        if ((r = e[n]).state == ParticleStateEnum.GENERATION && o)
            i > 0 ? (r.state = ParticleStateEnum.MOVING, r.timer = 0, i--) : r.appearingProbability += APPEARING_INCREMENT;
        else if (r.state == ParticleStateEnum.MOVING) {
            r.timer += t, r.timer > r.animationTime && (r.timer = r.animationTime);
            var d = r.timer / r.animationTime;
            r.x = r.startX + d * (r.targetX - r.startX), r.y = r.startY + d * (r.targetY - r.startY), r.a = getEasing(d, r.alphaEasingType) * r.targetA
        }
    }
}
function draw() {
    canvas.width, canvas.height;
    setCanvasWidthAndHeight(), context.clearRect(0, 0, canvas.width, canvas.height), drawDesign(context)
}
function drawDesign(t) {
    var a = targetImage.particles;
    clearImageData(imageData);
    for (var e = imageData.data, o = 0; o < a.length; o++) {
        var i = a[o];
        if (!(i.x > canvas.width || i.y > canvas.height)) {
            var n = Math.floor(i.x),
                r = 4 * (Math.floor(i.y) * targetImage.width + n);
            e[r] = i.r, e[r + 1] = i.g, e[r + 2] = i.b, e[r + 3] = i.a
        }
    }
    t.putImageData(imageData, 0, 0)
}
function clearImageData(t) {
    for (var a = t.data, e = 0; e < a.length; e += 4)
        a[e + 3] = 0
}
function base64Encode(t) {
    for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", e = "", o = 0; o < t.length;) {
        var i,
            n,
            r = 255 & t.charCodeAt(o++),
            d = 255 & t.charCodeAt(o++),
            h = 255 & t.charCodeAt(o++),
            s = r >> 2,
            m = (3 & r) << 4 | d >> 4;
        isNaN(d) ? i = n = 64 : (i = (15 & d) << 2 | h >> 6, n = isNaN(h) ? 64 : 63 & h), e += a.charAt(s) + a.charAt(m) + a.charAt(i) + a.charAt(n)
    }
    return e
}
function degreesToRadians(t) {
    return t * Math.PI / 180
}
function randomNormalDistribution(t, a) {
    return (2 * Math.random() - 1 + (2 * Math.random() - 1) + (2 * Math.random() - 1)) * a + t
}
function randomUniformDistribution(t, a) {
    var e = a - t;
    return t + Math.random() * e
}
function randomInteger(t, a) {
    var e = a - t + 1,
        o = t + Math.floor(Math.random() * e);
    return o > a ? a : o
}
function randomBoolean() {
    return Math.random() > .5
}
function getEasing(t, a) {
    var e = 0;
    switch (a) {
    case MovementTypeEnum.LINEAR:
        e = t;
        break;
    case MovementTypeEnum.QUAD:
        e = t * t;
        break;
    case MovementTypeEnum.CUBIC:
        e = t * t * t;
        break;
    case MovementTypeEnum.SIXTH:
        e = t * t * t * t * t * t;
        break;
    case MovementTypeEnum.SINE:
        e = Math.sin(Math.PI / 2 * t);
        break;
    case MovementTypeEnum.CUADSINE:
        var o = Math.sin(Math.PI / 2 * t);
        e = o * o;
        break;
    case MovementTypeEnum.ELASTIC:
        var i,
            n = .1;
        0 === t ? e = 0 : 1 === t ? e = 1 : (!n || n < 1 ? (n = 1, i = .225) : i = .9 * Math.asin(1 / n) / (2 * Math.PI), e = (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / .9) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / .9) * .5 + 1);
        break;
    case MovementTypeEnum.STEADY:
        e = 0
    }
    return e
}
var imageSources,
    soundSources,
    particles,
    imageData,
    targetImage,
    GENERATION_PROBABILITY_EVAL_TIME = .05,
    APPEARING_INCREMENT = .0015,
    mousePosition = {
        x: -1e4,
        y: -1e4
    },
    scenes = [],
    musicOn = !0,
    images = [],
    sounds = [],
    loadedAssets = 0,
    assetCount = 0,
    loadingImages = !0,
    percentLoaded = 0,
    blurType = 0,
    mindLabs = null,
    backGroundGradient = null,
    siteStructure = null,
    canvas = null,
    context = null,
    startAnimation = function() {
        canvas = document.createElement("canvas"), context = canvas.getContext("2d"), canvas.style.position = "absolute", canvas.style.left = "0px", canvas.style.top = "0px", $("#brand__animation").append(canvas), setCanvasWidthAndHeight(), initializePixels(), requestAnimationFrame(mainLoop)
    };
Particle = function(t, a, e, o, i, n) {
    switch (this.targetX = t, this.targetY = a, this.startX = t, this.startY = a, this.targetA = n, this.r = e, this.g = o, this.b = i, this.a = 0, this.x = t, this.y = a, this.speedX = randomUniformDistribution(1, 2), this.speedY = randomUniformDistribution(1, 2), this.state = ParticleStateEnum.GENERATION, this.appearingProbability = APPEARING_INCREMENT, this.timer = 0, randomInteger(0, 15)) {
    case 0:
        this.alphaEasingType = MovementTypeEnum.LINEAR;
        break;
    default:
        this.alphaEasingType = MovementTypeEnum.SIXTH
    }
}, TargetImage = function() {
    this.width = 0, this.height = [], this.particles = [], this.tick = 0
};
var touch = !1,
    startTouchMusic = !1,
    lastFrameTimeMs = 0,
    elapsedTime = 0,
    evalLightningTime = 700,
    lightningTime = 0;
ParticleStateEnum = {
    GENERATION: 0,
    MOVING: 1
};
var generationProbabilityTimer = 0;
MovementTypeEnum = {
    STEADY: 0,
    QUAD: 1,
    CUBIC: 2,
    SINE: 3,
    CUADSINE: 4,
    ELASTIC: 5,
    LINEAR: 6
};
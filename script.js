// ----------Scramble------------
$(document).ready(function () {
  // ELEMENTS
  var $scramble = $(".scramble");

  $scramble.scramble(3000, 20, "alphabet", true);
});

// ----------scrambleEnd--------------

var tl = gsap.timeline();
tl.to(".Loading", {
  opacity: 0,
  delay: 2.5,
})
  .to(".loader", {
    // y: "-100%",
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut",
  })
  .to(
    ".loader",
    {
      y: "-100%",
      // opacity:0,
      duration: 1,
      // ease: "Expo.easeInOut"
    },
    "up"
  )
  .to(
    ".svgwaala",
    {
      opacity: 1,
      delay: -1.7,
      ease: "Expo.easeInOut",
    },
    "donut"
  )
  .to(
    "#dotted",
    {
      opacity: 1,
      delay: -1.8,
      ease: "Expo.easeInOut",
    },
    "donut"
  )
  .to(
    "#donut",
    {
      opacity: 1,
      scale: 2,
      delay: -1.4,
      ease: "Expo.easeInOut",
      rotationY: "+=15",
      duration: 3,
      rotationX: "+=15",
      rotationZ: "+=15",
    },
    "up"
  )

  // .from(
  //   "#kothik-k, #kothik-o, #kothik-t, #kothik-h, #kothik-k2, #kothik-i",
  //   {
  //     opacity: 0,
  //     duration: 1,
  //     scale: 0,
  //     top: "40%",
  //     left: "47%",
  //   },
  //   "up"
  // );
  .from(
    "#kothik-k",
    {
      opacity: 0,
      duration: 1,
      scale: 0,
      top: "40%",
      left: "47%",
    },
    "up"
  );

var tl2 = gsap.timeline();

document.querySelectorAll("#explore").forEach(function (elem) {
  elem.addEventListener("click", function () {
    tl2
      .to(
        "#kothik-k",
        {
          left: "-15%",
          top: "-15%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-o",
        {
          top: "-20%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-t",
        {
          left: "115%",
          top: "-20%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-h",
        {
          left: "115%",
          top: "110%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-i",
        {
          left: "35%",
          top: "120%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-k2",
        {
          left: "-15%",
          top: "80%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to("#donut", {
        width: "80vw",
        top: "-10%",
        rotate: "360deg",
        ease: "ease.out",
        duration: 1,
        opacity: 0,
        delay: "-1",
      })
      .to(
        "#dotted",
        {
          opacity: 0,
        },
        "sw"
      )
      .to(".svgwaala", {
        opacity: 0,
      });
  });
});

function example() {
  window.location.href = "again.html";
}

// video 3 --------------

var tl7 = gsap.timeline();
tl7.from(
  ".main-abhishek",
  {
    opacity: "0",
    ease: "expo.inout",
    duration: 1,
  },
  "anim3"
);
tl7
  .from(
    ".front-page-img",
    {
      opacity: "0",
      ease: "expo.inout",
      duration: 1,
    },
    "anim3"
  )
  .from(
    "#line-effect-3",
    {
      opacity: "0",
      ease: "expo.inout",
      duration: 1,
    },
    "anim3"
  )
  .from(
    "#line-effect-1",
    {
      height: "0%",
      ease: "expo.inout",
      duration: 2,
    },
    "anim1"
  )
  .from(
    "#line-effect-2",
    {
      height: "0%",
      ease: "expo.inout",
      duration: 1,
    },
    "anim2"
  )
  .from(
    ".img-one",
    {
      height: "0%",
      ease: "expo.inout",
      duration: 1,
    },
    "anim1"
  )
  .from(
    ".mandit",
    {
      width: "0%",
      opacity: 0,
      ease: "expo.inout",
      duration: 1,
    },
    "anim1"
  )
  .from(
    ".mandit-2",
    {
      height: "0%",
      opacity: 0,
      ease: "expo.inout",
      duration: 1,
    },
    "anim1"
  )
  .from(
    ".main-txt-front",
    {
      opacity: 0,
      ease: "expo.inout",
      delay: -0.5,
      duration: 1,
    },
    "anim2"
  )
  .from(
    "#circle",
    {
      opacity: 0,
      ease: "expo.inout",
      duration: 2,
    },
    "anim2"
  )
  .from(
    "#nav",
    {
      top: -50,
      opacity: 0,
      ease: "expo.inout",
      duration: 1,
    },
    "anim2"
  );

document
  .querySelector("#rght-nav .ri-menu-line")
  .addEventListener("click", function () {
    document.querySelector(".upar-menu").style.top = "0%";
    document.querySelector(".upar-menu .ri-close-fill").style.display =
      "initial";
    document.querySelector("#rght-nav .ri-menu-line").style.display = "none";
  });

document
  .querySelector(".upar-menu .ri-close-fill")
  .addEventListener("click", function () {
    document.querySelector(".upar-menu").style.top = "-100%";
    document.querySelector(".upar-menu .ri-close-fill").style.display = "none";
    document.querySelector("#rght-nav .ri-menu-line").style.display = "initial";
  });

document.querySelector("#abhishek").addEventListener("mousemove", function () {
  document.querySelector("#slider-upar-wala").style.marginTop = "0%";
  document.querySelector("#abhishek").style.cursor = "pointer";
});
document.querySelector("#amarjeet").addEventListener("mousemove", function () {
  document.querySelector("#slider-upar-wala").style.marginTop = "-50vh";
  document.querySelector("#amarjeet").style.cursor = "pointer";
});
// document.querySelector("#rk").addEventListener("mousemove", function () {
//   document.querySelector("#slider-upar-wala").style.marginTop = "-100vh";
//   document.querySelector("#rk").style.cursor = "pointer";
// });
document.querySelector("#ak").addEventListener("mousemove", function () {
  document.querySelector("#slider-upar-wala").style.marginTop = "-100vh";
  document.querySelector("#ak").style.cursor = "pointer";
});

// video 3 ----------------------------

function dom() {
  const canvas = document.querySelector("#home>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    //   var data = `/vtoi/ezgif-frame-001.jpg
    //   /vtoi/ezgif-frame-002.jpg
    //   /vtoi/ezgif-frame-003.jpg
    //   /vtoi/ezgif-frame-004.jpg
    //   /vtoi/ezgif-frame-005.jpg
    //   /vtoi/ezgif-frame-006.jpg
    //   /vtoi/ezgif-frame-007.jpg
    //   /vtoi/ezgif-frame-008.jpg
    //   /vtoi/ezgif-frame-009.jpg
    //   /vtoi/ezgif-frame-010.jpg
    //   /vtoi/ezgif-frame-011.jpg
    //   /vtoi/ezgif-frame-011.jpg
    //   /vtoi/ezgif-frame-012.jpg
    //   /vtoi/ezgif-frame-013.jpg
    //   /vtoi/ezgif-frame-014.jpg
    //   /vtoi/ezgif-frame-015.jpg
    //   /vtoi/ezgif-frame-016.jpg
    //   /vtoi/ezgif-frame-017.jpg
    //   /vtoi/ezgif-frame-018.jpg
    //   /vtoi/ezgif-frame-019.jpg
    //   /vtoi/ezgif-frame-020.jpg
    //   /vtoi/ezgif-frame-021.jpg
    //   /vtoi/ezgif-frame-022.jpg
    //   /vtoi/ezgif-frame-023.jpg
    //   /vtoi/ezgif-frame-024.jpg
    //   /vtoi/ezgif-frame-025.jpg
    //   /vtoi/ezgif-frame-026.jpg
    //   /vtoi/ezgif-frame-027.jpg
    //   /vtoi/ezgif-frame-028.jpg
    //   /vtoi/ezgif-frame-029.jpg
    //   /vtoi/ezgif-frame-030.jpg
    //   /vtoi/ezgif-frame-031.jpg
    //   /vtoi/ezgif-frame-032.jpg
    //   /vtoi/ezgif-frame-033.jpg
    //   /vtoi/ezgif-frame-034.jpg
    //   /vtoi/ezgif-frame-035.jpg
    //   /vtoi/ezgif-frame-036.jpg
    //   /vtoi/ezgif-frame-037.jpg
    //   /vtoi/ezgif-frame-038.jpg
    //   /vtoi/ezgif-frame-039.jpg
    //   /vtoi/ezgif-frame-040.jpg
    //   /vtoi/ezgif-frame-041.jpg
    //   /vtoi/ezgif-frame-042.jpg
    //   /vtoi/ezgif-frame-043.jpg
    //   /vtoi/ezgif-frame-044.jpg
    //   /vtoi/ezgif-frame-045.jpg
    //   /vtoi/ezgif-frame-046.jpg
    //   /vtoi/ezgif-frame-047.jpg
    //   /vtoi/ezgif-frame-048.jpg
    //   /vtoi/ezgif-frame-049.jpg
    //   /vtoi/ezgif-frame-050.jpg
    //   /vtoi/ezgif-frame-051.jpg
    //   /vtoi/ezgif-frame-052.jpg
    //   /vtoi/ezgif-frame-053.jpg
    //   /vtoi/ezgif-frame-054.jpg
    //   /vtoi/ezgif-frame-055.jpg
    //   /vtoi/ezgif-frame-056.jpg
    //   /vtoi/ezgif-frame-057.jpg
    //   /vtoi/ezgif-frame-058.jpg
    //   /vtoi/ezgif-frame-059.jpg
    //   /vtoi/ezgif-frame-060.jpg
    //   /vtoi/ezgif-frame-061.jpg
    //   /vtoi/ezgif-frame-062.jpg
    //   /vtoi/ezgif-frame-063.jpg
    //   /vtoi/ezgif-frame-064.jpg
    //   /vtoi/ezgif-frame-065.jpg
    //   /vtoi/ezgif-frame-066.jpg
    //   /vtoi/ezgif-frame-067.jpg
    //   /vtoi/ezgif-frame-068.jpg
    //   /vtoi/ezgif-frame-069.jpg
    //   /vtoi/ezgif-frame-070.jpg
    //   /vtoi/ezgif-frame-071.jpg
    //   /vtoi/ezgif-frame-072.jpg
    //   /vtoi/ezgif-frame-073.jpg
    //   /vtoi/ezgif-frame-074.jpg
    //   /vtoi/ezgif-frame-075.jpg
    //   /vtoi/ezgif-frame-076.jpg
    //   /vtoi/ezgif-frame-077.jpg
    //   /vtoi/ezgif-frame-078.jpg
    //   /vtoi/ezgif-frame-079.jpg
    //   /vtoi/ezgif-frame-080.jpg
    //   /vtoi/ezgif-frame-081.jpg
    //   /vtoi/ezgif-frame-082.jpg
    //   /vtoi/ezgif-frame-083.jpg
    //   /vtoi/ezgif-frame-084.jpg
    //   /vtoi/ezgif-frame-085.jpg
    //   /vtoi/ezgif-frame-086.jpg
    //   /vtoi/ezgif-frame-087.jpg
    //   /vtoi/ezgif-frame-088.jpg
    //   /vtoi/ezgif-frame-089.jpg
    //   /vtoi/ezgif-frame-090.jpg
    //   /vtoi/ezgif-frame-091.jpg
    //   /vtoi/ezgif-frame-092.jpg
    //   /vtoi/ezgif-frame-093.jpg
    //   /vtoi/ezgif-frame-094.jpg
    //   /vtoi/ezgif-frame-095.jpg
    //   /vtoi/ezgif-frame-096.jpg
    //   /vtoi/ezgif-frame-097.jpg
    //   /vtoi/ezgif-frame-098.jpg
    //   /vtoi/ezgif-frame-099.jpg
    //   /vtoi/ezgif-frame-020.jpg
    //   /vtoi/ezgif-frame-101.jpg
    //   /vtoi/ezgif-frame-101.jpg
    //   /vtoi/ezgif-frame-102.jpg
    //   /vtoi/ezgif-frame-103.jpg
    //   /vtoi/ezgif-frame-104.jpg
    //   /vtoi/ezgif-frame-105.jpg
    //   /vtoi/ezgif-frame-106.jpg'
    //   /vtoi/ezgif-frame-107.jpg
    //   /vtoi/ezgif-frame-108.jpg
    //   /vtoi/ezgif-frame-109.jpg
    //   /vtoi/ezgif-frame-110.jpg
    //   /vtoi/ezgif-frame-111.jpg
    //   /vtoi/ezgif-frame-112.jpg
    //   /vtoi/ezgif-frame-113.jpg
    //   /vtoi/ezgif-frame-114.jpg
    //   /vtoi/ezgif-frame-115.jpg
    //   /vtoi/ezgif-frame-116.jpg
    //   /vtoi/ezgif-frame-117.jpg
    //   /vtoi/ezgif-frame-118.jpg
    //   /vtoi/ezgif-frame-119.jpg
    //   /vtoi/ezgif-frame-120.jpg
    //   /vtoi/ezgif-frame-121.jpg
    //   /vtoi/ezgif-frame-122.jpg
    //   /vtoi/ezgif-frame-123.jpg
    //   /vtoi/ezgif-frame-124.jpg
    //   /vtoi/ezgif-frame-125.jpg
    //   /vtoi/ezgif-frame-126.jpg
    //   /vtoi/ezgif-frame-127.jpg
    //   /vtoi/ezgif-frame-128.jpg
    //   /vtoi/ezgif-frame-129.jpg
    //   /vtoi/ezgif-frame-130.jpg
    //   /vtoi/ezgif-frame-131.jpg
    //   /vtoi/ezgif-frame-131.jpg
    //   /vtoi/ezgif-frame-132.jpg
    //   /vtoi/ezgif-frame-133.jpg
    //   /vtoi/ezgif-frame-134.jpg
    //   /vtoi/ezgif-frame-135.jpg
    //   /vtoi/ezgif-frame-136.jp1
    //   /vtoi/ezgif-frame-137.jpg
    //   /vtoi/ezgif-frame-138.jpg
    //   /vtoi/ezgif-frame-139.jpg
    //   /vtoi/ezgif-frame-140.jpg
    //   /vtoi/ezgif-frame-141.jpg
    //   /vtoi/ezgif-frame-142.jpg
    //   /vtoi/ezgif-frame-143.jpg
    //   /vtoi/ezgif-frame-144.jpg
    //   /vtoi/ezgif-frame-145.jpg
    //   /vtoi/ezgif-frame-146.jp1
    //   /vtoi/ezgif-frame-147.jpg
    //   /vtoi/ezgif-frame-148.jpg
    //   /vtoi/ezgif-frame-149.jpg
    //   /vtoi/ezgif-frame-150.jpg
    //   /vtoi/ezgif-frame-151.jpg
    //   /vtoi/ezgif-frame-152.jpg
    //   /vtoi/ezgif-frame-153.jpg
    //   /vtoi/ezgif-frame-154.jpg
    //   /vtoi/ezgif-frame-155.jpg
    //   /vtoi/ezgif-frame-156.jp1
    //   /vtoi/ezgif-frame-157.jpg
    //   /vtoi/ezgif-frame-158.jpg
    //   /vtoi/ezgif-frame-159.jpg
    //   /vtoi/ezgif-frame-160.jpg
    //   /vtoi/ezgif-frame-161.jpg
    //   /vtoi/ezgif-frame-162.jpg
    //   /vtoi/ezgif-frame-163.jpg
    //   /vtoi/ezgif-frame-164.jpg
    //   /vtoi/ezgif-frame-165.jpg
    //   /vtoi/ezgif-frame-166.jpg
    //   /vtoi/ezgif-frame-167.jpg
    //   /vtoi/ezgif-frame-168.jpg
    //   /vtoi/ezgif-frame-169.jpg
    //   /vtoi/ezgif-frame-170.jpg
    //   /vtoi/ezgif-frame-171.jpg
    //   /vtoi/ezgif-frame-172.jpg
    //   /vtoi/ezgif-frame-173.jpg
    //   /vtoi/ezgif-frame-174.jpg
    //   /vtoi/ezgif-frame-175.jpg
    //   /vtoi/ezgif-frame-176.jpg
    //   /vtoi/ezgif-frame-177.jpg
    //   /vtoi/ezgif-frame-178.jpg
    //   /vtoi/ezgif-frame-179.jpg
    //   /vtoi/ezgif-frame-180.jpg
    //   /vtoi/ezgif-frame-181.jpg
    //   /vtoi/ezgif-frame-182.jpg
    //   /vtoi/ezgif-frame-183.jpg
    //   /vtoi/ezgif-frame-184.jpg
    //   /vtoi/ezgif-frame-185.jpg
    //   /vtoi/ezgif-frame-186.jpg
    //   /vtoi/ezgif-frame-187.jpg
    //   /vtoi/ezgif-frame-188.jpg
    //   /vtoi/ezgif-frame-189.jpg
    //   /vtoi/ezgif-frame-190.jpg
    //   /vtoi/ezgif-frame-191.jpg
    //   /vtoi/ezgif-frame-192.jpg
    //   /vtoi/ezgif-frame-193.jpg
    //   /vtoi/ezgif-frame-194.jpg
    //   /vtoi/ezgif-frame-195.jpg
    //   /vtoi/ezgif-frame-196.jpg
    //   /vtoi/ezgif-frame-197.jpg
    //   /vtoi/ezgif-frame-198.jpg
    //   /vtoi/ezgif-frame-199.jpg
    //   /vtoi/ezgif-frame-200.jpg
    //   /Images/ezgif-frame-001.jpg
    //   /Images/ezgif-frame-002.jpg
    //   /Images/ezgif-frame-003.jpg
    //   /Images/ezgif-frame-004.jpg
    //   /Images/ezgif-frame-005.jpg
    //   /Images/ezgif-frame-006.jpg
    //   /Images/ezgif-frame-007.jpg
    //   /Images/ezgif-frame-008.jpg
    //   /Images/ezgif-frame-009.jpg
    //   /Images/ezgif-frame-010.jpg
    //   /Images/ezgif-frame-011.jpg
    //   /Images/ezgif-frame-012.jpg
    //   /Images/ezgif-frame-013.jpg
    //   /Images/ezgif-frame-014.jpg
    //   /Images/ezgif-frame-015.jpg
    //   /Images/ezgif-frame-016.jpg
    //   /Images/ezgif-frame-017.jpg
    //   /Images/ezgif-frame-018.jpg
    //   /Images/ezgif-frame-019.jpg
    //   /Images/ezgif-frame-020.jpg
    //   /Images/ezgif-frame-021.jpg
    //   /Images/ezgif-frame-022.jpg
    //   /Images/ezgif-frame-023.jpg
    //   /Images/ezgif-frame-024.jpg
    //   /Images/ezgif-frame-025.jpg
    //   /Images/ezgif-frame-026.jpg
    //   /Images/ezgif-frame-027.jpg
    //   /Images/ezgif-frame-028.jpg
    //   /Images/ezgif-frame-029.jpg
    //   /Images/ezgif-frame-030.jpg
    //   /Images/ezgif-frame-031.jpg
    //   /Images/ezgif-frame-032.jpg
    //   /Images/ezgif-frame-033.jpg
    //   /Images/ezgif-frame-034.jpg
    //   /Images/ezgif-frame-035.jpg
    //   /Images/ezgif-frame-036.jpg
    //   /Images/ezgif-frame-037.jpg
    //   /Images/ezgif-frame-038.jpg
    //   /Images/ezgif-frame-039.jpg
    //   /Images/ezgif-frame-041.jpg
    //   /Images/ezgif-frame-042.jpg
    //   /Images/ezgif-frame-043.jpg
    //   /Images/ezgif-frame-044.jpg
    //   /Images/ezgif-frame-045.jpg
    //   /Images/ezgif-frame-046.jpg
    //   /Images/ezgif-frame-047.jpg
    //   /Images/ezgif-frame-048.jpg
    //   /Images/ezgif-frame-049.jpg
    //   /Images/ezgif-frame-050.jpg
    // `;
    return (
      `./vtoi/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg` 
    );
  }

  const frameCount = 200;

  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1.8,
      pin: true,
      trigger: "#home",
    },
    onUpdate: render,
  });

  images[0].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  gsap.to("#home canvas", {
    scale: 0.8,
    scrollTrigger: {
      scrub: 0.1,
      trigger: "#home",
      start: "bottom 100%",
      // markers:true,
    },
  });
  ScrollTrigger.create({
    trigger: "#home",
    pin: true,
    start: "bottom 100%",
  });
}

dom();

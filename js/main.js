// owlCarousel //
$('#product_imgl_slider').owlCarousel({
    loop: true,
    nav:true,
    autoplay:false,
    dots:true,
    // navText: [
    //     '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    //     '<i class="fa fa-angle-left" aria-hidden="true"></i>'
    // ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },

        1000: {
            items: 3
        }
    }
})

// owlCarousel //
$('#blog-f').owlCarousel({
    loop: true,
    nav:true,
    autoplay:false,
    dots:true,
    // navText: [
    //     '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    //     '<i class="fa fa-angle-left" aria-hidden="true"></i>'
    // ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },

        1000: {
            items: 2
        }
    }
})


const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
}
if (btn) {
  btn.addEventListener("click", navToggle);
}

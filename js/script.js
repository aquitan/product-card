var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

const checkdataCount = () => {
	const countAttrs = document.querySelectorAll('.top-block-icon')

	countAttrs.forEach(item => {
		const attr = item.getAttribute('data-count')
		if (Number(attr) <= 0) {
			item.classList.add('hide-count')
		}

	})
}
checkdataCount()


const toggleCatalogMenu = () => {
	const catalogBtn = document.querySelector('.catalog-btn')
	const catalogMenu = document.querySelector('.catalog-menu ')

	catalogBtn.addEventListener('click', () => {
		catalogBtn.classList.toggle('catalog-btn-active')
		catalogMenu.classList.toggle('catalog-active')
	})


}
toggleCatalogMenu()


const checkOffsetTop = () => {
  const header = document.querySelector('.section-top-season')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-offset')
    } else {
      header.classList.remove('header-offset')
    }
  })
}

checkOffsetTop()

const checkOffsetTopMobile = () => {
  const header = document.querySelector('.scrolled-header-mobile')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled-header-mobile-active')
    } else {
      header.classList.remove('scrolled-header-mobile-active')
    }
  })
}

checkOffsetTopMobile()
$('.item-tab').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.item-tab').removeClass('current-tab');
    $('.item-tabs-content').removeClass('current-tab');

    $(this).addClass('current-tab');
    $("#"+tab_id).addClass('current-tab');

})

$('.doc-tab').click(function(){
    var tabData = $(this).attr('data-tab');

    $('.doc-tab').removeClass('current-tab-doc');
    $('.doc-tabs-content').removeClass('current-tab-doc');

    $(this).addClass('current-tab-doc');
    $("#"+tabData).addClass('current-tab-doc');

})

$('.comment-add').click(function(){
    var tabData = $(this).attr('data-tab');

    $('.comment-add').removeClass('current-tab-comment');
    $('.comments-tab').removeClass('active-comments');

    $(this).addClass('current-tab-comment');
    $("#"+tabData).addClass('active-comments');

})

var swiper = new Swiper(".mySwiperApplicationObj", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 1,
          fill: "row",
        },
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 1,
          fill: "row",
        },
      },
      800: {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
      900: {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
      1280: {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
    },
  });

  var swiper = new Swiper(".mySwiperItemComments", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".mySwiperItemArticles", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
const togleItemTimePicker = (hide = false) => {

    const dateInput = document.querySelector('.item-callback-date')
    const timeInput = document.querySelector('.item-callback-time')

    dateInput.addEventListener('focus', () => {
        dateInput.setAttribute('type', 'date')
    })
    timeInput.addEventListener('focus', () => {
        timeInput.setAttribute('type', 'time')
    })

    if (hide) {
        dateInput.setAttribute('type', 'text')
        timeInput.setAttribute('type', 'text')
    }

}

togleItemTimePicker()
var swiper = new Swiper(".mySwiperBuyTogether", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
});

var swiper = new Swiper(".mySwiperPopularCard", {
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 10
});
const toggleMobileMenu = () => {
    const burger = document.querySelectorAll('.burger')
    const mobileMenu = document.querySelector('.mobile-menu')
    const body = document.body

    burger.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenu.classList.toggle('mobile-menu-active')
            burger.forEach(burgerMenu => {
                burgerMenu.classList.toggle('burger-active')
            })
            body.classList.toggle('fixed-body')
        })
    })
}

toggleMobileMenu()

const toggleSubmenuItem = () => {
    const items = document.querySelectorAll('.mobile-menu-item')

    items.forEach(item => {
        item.addEventListener('click', () => {
            if (item.children.length > 1) {
                item.classList.toggle('mobile-subitems-active')
            }
            else {
                return
            }
        })
    })
}

toggleSubmenuItem()
const toggleTabItem = () => {
    const items = document.querySelectorAll('.mobile-tabs-title')

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            item.classList.toggle('active-acc')
        })
        
    })
}

toggleTabItem()

$('.comment-add').click(function(){
    var tabData = $(this).attr('data-tab');

    $('.comment-add').removeClass('current-tab-comment');
    $('.comments-tab').removeClass('active-comments');

    $(this).addClass('current-tab-comment');
    $("#"+tabData).addClass('active-comments');

})


  var swiper = new Swiper(".mySwiperInstructionMobile", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
});



var swiper = new Swiper(".mySwiperItemCommentMobile", {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
            rows: 2,
            fill: "row",
          },
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          600: {
            slidesPerView: 1,
            spaceBetween: 20,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
            grid: {
              rows: 1,
              fill: "row",
            },
          },
          800: {
            slidesPerView: 1,
            spaceBetween: 20,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          900: {
            slidesPerView: 1,
            spaceBetween: 20,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          1280: {
            slidesPerView: 1,
            spaceBetween: 20,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
        },
      });
var swiper = new Swiper(".mySwiperThumb", {
      spaceBetween: 7,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
		direction: 'vertical',
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },

      1160: {
        slidesPerView: 5,
        spaceBetween: 7,
      },
    },
    });
    var swiper2 = new Swiper(".mySwiperThumb2", {
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
      },
	  
      thumbs: {
        swiper: swiper,
      },
});

$('.brand-switch').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.brand-switch').removeClass('current-brand');
    $('.brand-content').removeClass('current-brand');

    $(this).addClass('current-brand');
    $("#"+tab_id).addClass('current-brand');
})

var swiper = new Swiper(".mySwiperBrands", {
    slidesPerView: 'auto',
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
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

let gallerySlider = null
let mediaQuery = 1000

const checkWindowWidth = () => {
    $(window).on('load resize', function () {
        // Берём текущую ширину экрана
        let windowWidth = $(this).innerWidth();

        console.log('windowWidth', windowWidth)
        
        // Если ширина экрана меньше или равна mediaQuerySize(1024)
        if (windowWidth <= mediaQuery) {
          // Инициализировать слайдер если он ещё не был инициализирован
          initializeSlider()
        } else {
          // Уничтожить слайдер если он был инициализирован
          sliderDestroy()
        }
      });
}

checkWindowWidth()

const initializeSlider = () => {
    console.log('swiper-init')
    gallerySlider = new Swiper(".mySwiperGallery", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        },
      });
}

const sliderDestroy = () => {
    console.log('swiper-destroy')
    gallerySlider.destroy()
}
var swiper = new Swiper(".mySwiperBanner", {
  
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
$('.news-tab-item').click(function(){
    var tab_id = $(this).attr('data-tab');
    let textBtn = $('.news-all span')

    if ($(this).text() === 'блог') {
      textBtn.text('посты')
    }
    if ($(this).text() === 'новости') {
      textBtn.text('статьи')
    }
    if ($(this).text() === 'видео') {
      textBtn.text('видео')
    }

    $('.news-tab-item').removeClass('current-tab');
    $('.news-tabs-content').removeClass('current-tab');

    $(this).addClass('current-tab');
    $("#"+tab_id).addClass('current-tab');

})

var swiper = new Swiper(".mySwiperNews", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
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
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });


  const countTitleSymbols = () => {
    const titles = document.querySelectorAll('.news-item-title')
    

    titles.forEach(title => {
      if (title.innerText.length > 60) {

        if (title.nextElementSibling) {
          title.nextElementSibling.classList.add('news-shorten')
        }
        
      }
    })
    
  }

  countTitleSymbols()
var swiper = new Swiper(".mySwiperObjects", {
	pagination: {
	  el: ".swiper-pagination",
	},
  slidesPerView: 2,
  spaceBetween: 15,
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      540: {
        slidesPerView: 'auto',
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });

  $('.object-tab').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.object-tab').removeClass('object-current-tab');
    $('.object-tab-content').removeClass('object-current-tab');

    $(this).addClass('object-current-tab');
    $("#"+tab_id).addClass('object-current-tab');


})
var swiper = new Swiper(".mySwiperPopularCard", {
    pagination: {
      el: ".swiper-pagination",
    },
    spaceBetween: 10
  });

  var swiper = new Swiper(".mySwiperPopular", {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-main",
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
        grid: {
          rows: 1,
          fill: "row",
        },
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
        grid: {
          rows: 1,
          fill: "row",
        },
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
    },
  });
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
const toggleModal = () => {
    let modal = document.querySelector('.dialog')
    let callbackBtn = document.querySelector('.block-menu-number')
    let genCloseBtn = document.querySelector('.gen-modal-close')

    callbackBtn.addEventListener('click', () => {
        modal.showModal()
    })

    modal.addEventListener("click", e => {
        const dialogDimensions = modal.getBoundingClientRect()
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          modal.close()
          togleModalTimePicker(true)
        }
      })
}

toggleModal()

const togleModalTimePicker = (hide = false) => {
    const pickTimeBtn = document.querySelector('.dialog-time-toggle')
    const timeContainer = document.querySelector('.dialog-toggle-container')

    const dateInput = document.querySelector('.dialog-date')
    const timeInput = document.querySelector('.dialog-time')

    pickTimeBtn.addEventListener('click', () =>{
        pickTimeBtn.classList.add('dialog-time-toggle-hide')
        timeContainer.classList.add('dialog-toggle-container-show')

        dateInput.addEventListener('focus', () => {
            dateInput.setAttribute('type', 'date')
        })
        timeInput.addEventListener('focus', () => {
            timeInput.setAttribute('type', 'time')
        })
    })

    if (hide) {
        pickTimeBtn.classList.remove('dialog-time-toggle-hide')
        timeContainer.classList.remove('dialog-toggle-container-show')
        dateInput.setAttribute('type', 'text')
        timeInput.setAttribute('type', 'text')
    }

}

togleModalTimePicker()
var swiper = new Swiper(".mySwiperSolutions", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 9,
        spaceBetween: 50,
      },
    },
  });
var swiper = new Swiper(".mySwiperTrust", {
    slidesPerView: 7,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 40,
        },
      },
  });

// cards which are taken from API
const cardWrapper = document.querySelector(".card__wrapper");

fetch("https://fakestoreapi.com/products")
  .then((res) => {
    if (!res.ok) throw new Error("Could not find server");
    return res.json();
  })
  .then((data) => {
    data.slice(0, 4).forEach((element) => {
      let holder = document.createElement("holder");
      let image = document.createElement("img");
      let div = document.createElement("div");
      let text = document.createElement("p");
      let priceHolder = document.createElement("div");
      let price = document.createElement("price");
      let quantity = document.createElement("button");
      let count = document.createElement("a");

      image.src = element.image;
      text.textContent = element.category;
      price.textContent = `$${element.price}`;
      count.href = "#";
      count.textContent = "+";

      //   appending
      cardWrapper.appendChild(holder);
      holder.appendChild(image);
      holder.appendChild(div);
      div.appendChild(text);
      div.appendChild(priceHolder);
      priceHolder.appendChild(price);
      priceHolder.appendChild(quantity);
      quantity.appendChild(count);

      // adding classList

      holder.classList.add("cardHolder");
      image.classList.add("card__image");
      div.classList.add("text__content");
      text.classList.add("card__text");
      priceHolder.classList.add("priceHolder");
      price.classList.add("price");
      quantity.classList.add("count__holder");
      count.classList.add("count");
    });
  });

//   Arrival products second Api

const cardWrapper2 = document.querySelector(".card__wrapper2");

fetch("https://fakestoreapi.com/products")
  .then((responsive) => {
    if (!responsive.ok) throw new Error("Could not find server");
    return responsive.json();
  })
  .then((inform) => {
    inform.slice(0, 4).forEach((item) => {
      let holder2 = document.createElement("div");
      let image2 = document.createElement("img");
      let div2 = document.createElement("div");
      let text2 = document.createElement("p");
      let priceHolder2 = document.createElement("div");
      let price2 = document.createElement("price");
      let quantity2 = document.createElement("button");
      let count2 = document.createElement("a");

      image2.src = item.image;
      text2.textContent = item.category;
      price2.textContent = `$${item.price}`;
      count2.href = "#";
      count2.textContent = "+";

      //   appending
      cardWrapper2.appendChild(holder2);
      holder2.appendChild(image2);
      holder2.appendChild(div2);
      div2.appendChild(text2);
      div2.appendChild(priceHolder2);
      priceHolder2.appendChild(price2);
      priceHolder2.appendChild(quantity2);
      quantity2.appendChild(count2);

      // adding classList

      holder2.classList.add("cardHolder2");
      image2.classList.add("card__image2");
      div2.classList.add("text__content2");
      text2.classList.add("card__text2");
      priceHolder2.classList.add("priceHolder2");
      price2.classList.add("price2");
      quantity2.classList.add("count__holder2");
      count2.classList.add("count2");
    });
  });

// hero carousel
const heroWrapper = document.querySelector(".hero__wrapper");

fetch("https://fakestoreapi.com/products")
  .then((resp) => {
    if (!resp.ok) throw new Error("Could not find server");
    return resp.json();
  })
  .then((datas) => {
    datas.slice(0, 3).forEach((pic) => {
      let heroHolder = document.createElement("div");
      let heroLeft = document.createElement("div");
      let heroRight = document.createElement("div");
      let suptitle = document.createElement("p");
      let heroTitle1 = document.createElement("h2");
      let heroTitle2 = document.createElement("h2");
      let heroButton = document.createElement("button");
      let buttonLink = document.createElement("a");
      let heroImage = document.createElement("img");

      suptitle.textContent = "Face Makeup Brush";
      heroTitle1.textContent = "Skincare Brush Set";
      heroTitle2.textContent = "Sale 30% Off";
      buttonLink.textContent = "SHOP NOW";
      heroImage.src = pic.image;
      // appending
      heroWrapper.prepend(heroHolder);
      heroHolder.appendChild(heroLeft);
      heroHolder.appendChild(heroRight);
      heroLeft.appendChild(suptitle);
      heroLeft.appendChild(heroTitle1);
      heroLeft.appendChild(heroTitle2);
      heroLeft.appendChild(heroButton);
      heroButton.appendChild(buttonLink);
      heroRight.appendChild(heroImage);

      // classList
      heroHolder.classList.add("hero__holder");
      heroLeft.classList.add("hero__left");
      heroRight.classList.add("hero__right");
      suptitle.classList.add("suptitle");
      heroTitle1.classList.add("hero__title");
      heroTitle2.classList.add("hero__title");
      heroButton.classList.add("hero__button");
      buttonLink.classList.add("button__link");
    });
  });

let slideIndex = 1;
hero__holder(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("hero__holder");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}


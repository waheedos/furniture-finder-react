document.getElementById("year").innerHTML = new Date().getFullYear();

<!--Mobile Navigation Toggler-->
$(document).ready(function () {
	$(document).click(function (event) {
		let clickOver = $(event.target);
		let opened = $(".collapse").hasClass("collapse show");

		function closeNavbar() {
			$(".navbar-collapse").removeClass('show');
			$(".hamburger").removeClass('is-active');
		};
		if (opened === true && !clickOver.hasClass("navbar-toggler")) {
			closeNavbar();
		}
		$(window).scroll(function (event) {
			$(window).scrollTop();
			event.preventDefault();
			closeNavbar();
		});
	});
});

$('[name=nominalPinjaman]').maskNumber({integer: true});
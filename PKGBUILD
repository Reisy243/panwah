# Maintainer: ReisyRedPanda <reisimineredpanda@gmail.com>
pkgname=tela-dark-orange-icon-theme
pkgver=1
pkgrel=0
pkgdesc="A flat colorful Design icon theme"
url="https://www.gnome-look.org/p/1279924/"
arch=('any')
depends=('tela-orange-icon-theme')
license=('GPLv3')
source=("$pkgname.tar.gz::https://github.com/Reisy243/panwah/raw/src/tela-orange-dark-icon-theme.tar.gz")
md5sums=('6c198e7b161ff86e7c25558a03d71515')

package() {
  echo $pkgdir
  mkdir -p "$pkgdir/usr/share/icons"
  cp -r "$srcdir/Tela-orange-dark" "$pkgdir/usr/share/icons"
}

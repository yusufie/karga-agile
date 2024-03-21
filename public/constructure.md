
Case Detayları;
1- Backend swagger url’i: https://api.management.parse25proje.link/api/docs .
Bu url’e gidip öncelikle direk swagger üzerinden /api/auth/register endpointini
kullanarak kaydolmanızı istiyoruz. Burada size mail ile ulaştığımız email ile
kaydolmanızı özellikle istiyoruz. Daha sonrasında case için figma linkinde de
açıkladığımız gibi basit bir login (giriş) sayfası yapmanızı istiyoruz. (Burada hiçbir style
bile kullanmayabilirsiniz. Ağırlığınızı bu sayfa için kullanmayınız.) Login sayfasında
register ile kaydolduğunuz email ve şifre ile giriş yapabiliyor ve /dashboarda
yönlendirmesini istiyoruz. Login olduğunuzda size bir token dönüyor olacağız.
Bundan sonraki yapacağınız backend isteklerini Bearer token kullanarak atmanızı
istiyoruz.
2- Dashboard sayfasında /api/boards endpointine istek atarak (Bearer token ile) gelen
datada sizlere 5 adet board dönecek ve ilk board’ın içerisinde 3 adet örnek task
dönecek. Bunları dashboard sayfasını yaparken kullanacaksınız.
3- Case’i yaparken sizlerden özellikle istediklerimizi figma da ayrıntılı belirtik. Ekstra
istediklerimiz hususunda da sizlerin çabalarını görmek bizleri ayrıca mutlu edecektir.
Hem sizlerin gelişimi için hem de sizleri diğer adaylardan ayırmamız için önemli bir
kriter olacaktır.
4- Case’i React framework’ü olun NextJS ile yapmanızı istiyoruz. NextJS ile default
oluşturulan TailwindCSS ile birlikte stillendirmelerinizi yapınız. Ayrıca NextJS için de
App folder structure’ını kullanmanızı istiyoruz.
5- Yaptığınız tüm sorguları koddan önce swagger üzerinden
(https://api.management.parse25proje.link/api/docs ) yapabilirsiniz. /api/auth/login
endpointi ile yaptığınız giriş ile size dönen token’ı sağ üstteki “Authorize” butonuna
tıklayıp açılan pencereye yapıştırıp isteklerini direk swagger üzerinden test
edebilirsiniz.
Figma tasarım ve backend swagger linki aşağıda yer almaktadır;
https://www.figma.com/file/5eWapRuo2vsXPPvU0g4c1X/Untitled?type=dcase’imize-id=0-
1&mode=design&t=NoYKtx0rTrPnm64b-0
https://api.management.parse25proje.link/api/docs
*Linkleri kopyalayarak açmanız daha sağlıklı olacaktır.
Proje Teslim Süreci: Bu case kargakarga’nın herhangi bir ihtiyacına karşılık gelmiyor. Kodun
sahibi sizsiniz. Bizimle bir "public repo" linki olarak paylaşabilirsiniz. (environment dosyası
oluşturarak.) "public repo" yapmak istemezseniz bir "private repo" oluşturarak parantez
içindeki hesabı yetkilendirebilirsiniz. (asknksk) Vercel gibi bir sağlayıcıya deploy edilmelidir.
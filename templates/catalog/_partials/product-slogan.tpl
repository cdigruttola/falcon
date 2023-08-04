{*
* Copyright since 2007 Carmine Di Gruttola
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
* @author    cdigruttola <c.digruttola@hotmail.it>
* @copyright Copyright since 2007 Carmine Di Gruttola
* @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*}

<div class="product-slogan row">
    {assign base_uri constant('__PS_BASE_URI__')}
    {assign image_url {$base_uri}|cat:'themes/falcon/img/slogan_pdp.jpg'}
  <div class="col-lg-6 col-md-12">
    <img
      src="{$image_url}"
      alt="Slogan"
      title="Slogan"
      width="100%"
      height="auto"
      itemprop="image"
    >
  </div>
    {hook h='displayProductSlogan' product=$product}
  <div
    class="slogan col-lg-6 col-md-12"><p><i class="slogan fa fa-quote-left" aria-hidden="true"></i></p>
    <p>{l s='We are a family from Irpinia that produces artisanal bread and pasta, following traditional techniques.' d='Shop.Digruttola.Catalog'}</p></div>
</div>

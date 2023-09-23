{*
* 2007-2022 PrestaShop
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
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2022 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*}
<div id="legalblink" class="col-md-3 col-12 mb-lg-4">
    {assign var=_expand_id value=10|mt_rand:100000}
  <div class="d-flex align-items-center mb-3 justify-content-between position-relative">
    <span class="h4 mb-0">{l s='Security and transparency' d='Modules.Legalblink.Preferences'}</span>
    <a href="#footer_sub_menu_{$_expand_id}" class="icon-collapse stretched-link text-reset d-block d-md-none"
       data-toggle="collapse">
      <i class="material-icons d-block"></i>
    </a>
  </div>
  <div id="footer_sub_menu_{$_expand_id}" class="collapse d-md-block">
    <ul class="links-list">
      <li><a href="#"
             class="lb-cs-settings-link links-list__elem">{l s='Update cookies preferences' d='Modules.Legalblink.Preferences'}</a>
      </li>
        {foreach from=$elements item=element}
          <li class="links-list__elem">
            <a href="{$element.link}">{$element.text}</a>
          </li>
        {/foreach}
    </ul>
  </div>
</div>

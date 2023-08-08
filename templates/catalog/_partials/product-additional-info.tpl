{**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 *}
<div class="product-additional-info js-product-additional-info">
    {if isset($product.reference_to_display) && $product.reference_to_display neq ''}
      <div class="product-reference">
        <label class="label">{l s='Reference' d='Shop.Theme.Catalog'}: </label>
        <span>{$product.reference_to_display}</span>
      </div>
    {/if}
    {if isset($product.ean13) and $product.ean13 neq ''}
      <div class="product-ean13">
        <label class="label">{l s='EAN13' d='Shop.Theme.Catalog'}:</label>
        <span itemprop="gtin13">{$product.ean13|escape:'html':'UTF-8'}</span>
      </div>
    {/if}
    {if isset($product.weight) and ($product.weight != "")}
      <div class="product-weight">
        <label class="label">{l s='Weight' d='Shop.Theme.Catalog'}: </label>
        <span>{$product.weight|string_format:"%.3f"} {$product.weight_unit} ℮</span>
        <p>{l s='Product subject to a natural weight loss.' d='Shop.Theme.Catalog'}</p>
      </div>
    {/if}
    {*TODO change this part then with {$grade}*}
  <div class="comments-note">
    <span>{l s='Grade' d='Modules.Productcomments.Shop'}</span>
    <div class="grade-stars" data-grade="5"></div>
  </div>
</div>

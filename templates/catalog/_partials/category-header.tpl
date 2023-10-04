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
<div id="js-product-list-header">
  <div class="block-category">
    <h1 class="h1">
        {$category.name}
        {if $listing.pagination.items_shown_from !== 1}
            {l s='- page' d='Shop.Theme.Catalog'} {$listing.pagination.current_page}
        {/if}
    </h1>
    <div class="row">
        {if !empty($category.image.large.url)}
          <div class="category-cover col-lg-2 col-md-3 col-sm-12">
            <picture>
                {if !empty($category.image.large.sources.avif)}
                  <source srcset="{$category.image.large.sources.avif}" type="image/avif">{/if}
                {if !empty($category.image.large.sources.webp)}
                  <source srcset="{$category.image.large.sources.webp}" type="image/webp">{/if}
              <img src="{$category.image.large.url}"
                   alt="{if !empty($category.image.legend)}{$category.image.legend}{else}{$category.name}{/if}"
                   loading="lazy" width="141" height="180">
            </picture>
          </div>
        {/if}
        {if $category.description && $listing.pagination.items_shown_from == 1}
          <div id="category-description"
               class="cms-content {if !empty($category.image.large.url)}col-lg-10 col-md-9{else}col-lg-12 col-md-12{/if} col-sm-12">{$category.description nofilter}</div>
        {/if}
    </div>
  </div>
</div>

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

<div class="recipe-list col-xs-12 col-sm-6 col-xl-4">
  <article class="recipe_list_content" id="{$recipe.id}">
    <a href="{$recipe.recipe_url}">
      <div class="recipe_time">
        <span>{$recipe.total_time.formatted}</span>
      </div>
        {if !empty($recipe.image)}
            {images_block}
              <div class="recipe_img">
                <img itemprop="image" class="img-responsive"
                     src="{$recipe.image|escape:'html':'UTF-8'}"
                     width="auto" height="auto" alt="{$recipe.name|escape:'html':'UTF-8'}"
                     title="{$recipe.name|escape:'html':'UTF-8'}">
              </div>
            {/images_block}
        {/if}
      <div class="btn btn-primary recipe_name">{$recipe.name|escape:'html':'UTF-8'}</div>
    </a>
  </article>
</div>

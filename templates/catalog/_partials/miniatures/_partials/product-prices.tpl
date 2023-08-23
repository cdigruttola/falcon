{assign currency_symbol Context::getContext()->currency->symbol}

{block name='product_price_and_shipping'}
  {if $product.show_price}
    <div class="col-md-6 col-xs-12 product-miniature__pricing text-right">
      {if $product.has_discount}
        {hook h='displayProductPriceBlock' product=$product type="old_price"}
        <span class="price price--regular mr-1" aria-label="{l s='Regular price' d='Shop.Theme.Catalog'}">{$product.regular_price}</span>
      {/if}

      {hook h='displayProductPriceBlock' product=$product type="before_price"}

        {assign var="split" value="."|explode:{$product.price_amount}}
      <span class="price" aria-label="{l s='Price' d='Shop.Theme.Catalog'}">{$split[0]},<span class="decimal">{$split[1]}</span> {$currency_symbol}</span>

      {hook h='displayProductPriceBlock' product=$product type='unit_price'}

      {hook h='displayProductPriceBlock' product=$product type='weight'}
    </div>
  {/if}
{/block}

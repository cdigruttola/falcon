<div class="product-miniature__actions">
    {if $product.add_to_cart_url && ($product.quantity > 0 || $product.allow_oosp) && !$configuration.is_catalog}
        <form class="product-miniature__form" action="{$product.add_to_cart_url}" method="post">
          <input type="hidden" name="id_product" value="{$product.id}">
          <div class="row">
            <div class="col-6 d-sm-block d-none">
              <input
                type="number"
                name="qty"
                inputmode="numeric"
                pattern="[0-9]*"
                      {if isset($product.product_attribute_minimal_quantity) && $product.product_attribute_minimal_quantity != ''}
                        value="{$product.product_attribute_minimal_quantity}"
                        min="{$product.product_attribute_minimal_quantity}"
                      {else}
                        value="{$product.minimal_quantity}"
                        min="{$product.minimal_quantity}"
                      {/if}
                class="input-group input-qty quantity_wanted"
                aria-label="{l s='Quantity' d='Shop.Theme.Actions'}"
              >
            </div>
              {include file='catalog/_partials/miniatures/_partials/product-prices.tpl'}
          </div>
          <button
            class="btn btn-primary btn-block add-to-cart"
            data-button-action="add-to-cart"
            type="submit"
            {if !$product.add_to_cart_url}
                disabled
            {/if}
          >
            {l s='Add to cart' d='Shop.Theme.Actions'}
          </button>
      </form>
    {else}
        <a href="{$product.canonical_url}"
           class="btn btn-secondary btn-block"
        > {l s='View' d='Shop.Theme.Actions'}
        </a>
    {/if}
</div>

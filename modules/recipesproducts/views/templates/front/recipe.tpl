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

{extends file='page.tpl'}

{$icon_svgs = [
'yield' => '<svg xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.3820624,0.024971865 C13.7973694,0.129212743 14.9403737,1.31775857 14.9977926,2.81517237 C15.0030869,2.95324277 14.9988547,3.09152698 14.9851281,3.22897734 L14.5653951,7.43192754 L13.6015459,7.32940467 L14.0212789,3.12645447 C14.0302929,3.03619301 14.0330721,2.94538398 14.0295954,2.85471535 C13.9915988,1.86381067 13.2296872,1.07887246 12.2903712,1.02097987 L11.354301,11.1891647 C11.2597873,12.2158321 10.4243528,13 9.42507859,13 L3.99420652,13 C2.95704521,13 2.10374359,12.1572422 2.05816842,11.0878844 L1.8483472,6.16472268 C1.81871948,5.46954953 1.67214531,4.78499362 1.41517907,4.14166635 L0.0366924248,0.690559138 C-0.0652832133,0.435258252 0.0525863116,0.142979761 0.299961377,0.0377368552 C0.358526751,0.0128208836 0.421258245,1.20093683e-17 0.484604604,0 L12.3843613,1.11022302e-16 L12.3820624,0.024971865 Z M3.15220266,3.5 L3.15220266,4 L5.58251315,4 L5.58251315,3.5 L3.15220266,3.5 Z M3.58458936,5 L3.58458936,5.5 L5.57459012,5.5 L5.57459012,5 L3.58458936,5 Z M3.79327672,6.5 L3.79327672,7 L5.57459012,7 L5.57459012,6.5 L3.79327672,6.5 Z M3.79327672,8 L3.79327672,8.5 L5.57459012,8.5 L5.57459012,8 L3.79327672,8 Z M3.79327672,9.5 L3.79327672,10 L5.57459012,10 L5.57459012,9.5 L3.79327672,9.5 Z" id="Combined-Shape"></path></svg>',
'cooking' => '<svg xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.4765591,9.33333333 C12.4552506,9.50283861 12.4444444,9.67415604 12.4444444,9.84633907 L12.4444444,12.4444444 C12.4444444,13.3035541 11.7479985,14 10.8888889,14 L3.11111111,14 C2.2520015,14 1.55555556,13.3035541 1.55555556,12.4444444 L1.55555556,9.94139763 C1.55555556,9.73714739 1.54134119,9.53399698 1.51334235,9.33333333 L0.388888889,9.33333333 C0.174111486,9.33333333 2.63026459e-17,9.15922185 0,8.94444444 C-2.63026459e-17,8.72966704 0.174111486,8.55555556 0.388888889,8.55555556 L1.33162112,8.55555556 C1.20243932,8.16626192 1.01874505,7.79476825 0.784138997,7.45269097 C2.36507614,6.64927843 4.43915021,6.24757216 7.00636122,6.24757216 C9.53888618,6.24757216 11.6076751,6.64927843 13.2127279,7.45269097 C12.9698938,7.79200439 12.7816234,8.16411592 12.6522398,8.55555556 L13.6111111,8.55555556 C13.8258885,8.55555556 14,8.72966704 14,8.94444444 C14,9.15922185 13.8258885,9.33333333 13.6111111,9.33333333 L12.4765591,9.33333333 Z M8.55555556,5.83333333 L5.44444444,5.83333333 C5.44444444,5.18900113 6.14089039,4.66666667 7,4.66666667 C7.85910961,4.66666667 8.55555556,5.18900113 8.55555556,5.83333333 Z M1.24197989,6.55630543 C1.64598806,5.89641305 1.8229849,5.30581273 1.7729704,4.78450446 C1.69794865,4.00254207 0.868257725,3.77191037 0.781705395,2.76281712 C0.695153065,1.75372388 2.06772998,0.780328688 2.07531973,0.777782616 C2.08290948,0.775236543 1.62657582,1.77812374 1.65751864,2.68526801 C1.68846147,3.59241229 2.47728452,3.96504055 2.4638565,4.61418285 C2.45490449,5.04694438 2.04761228,5.69431858 1.24197989,6.55630543 Z M3.12826856,5.77852766 C3.53227674,5.11863527 3.70927358,4.52803495 3.65925908,4.00672669 C3.58423733,3.22476429 2.7545464,2.99413259 2.66799407,1.98503935 C2.58144174,0.975946102 3.95401866,0.00255090993 3.96160841,4.83782688e-06 C3.96919816,-0.00254123428 3.5128645,1.00034596 3.54380732,1.90749023 C3.57475015,2.81463451 4.36357319,3.18726277 4.35014518,3.83640507 C4.34119316,4.2691666 3.93390096,4.9165408 3.12826856,5.77852766 Z" id="Combined-Shape"></path></svg>',
'difficulty' => '<svg xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M2.99833361,10 C0.643120509,8.65734566 -0.324564682,6.97456571 0.0952780324,4.95166016 C0.679130104,2.3333861 2.15170353,1.19040107 4.5129983,1.52270508 C5.27176878,0.507568359 6.43499125,1.94877802e-16 8.00266572,0 C9.57034019,0 10.7304828,0.507568359 11.4830935,1.52270508 C13.833033,1.35302689 15.3066223,2.49601192 15.9038615,4.95166016 C16.3258833,6.81193989 15.3584847,8.49471984 13.0016658,10 L13.0016658,14.9969696 C13.0016658,15.550928 12.5538013,16 12.0013325,16 L3.99866682,16 C3.44619804,16 2.99833361,15.550928 2.99833361,14.9969696 L2.99833361,10 Z M6.49949986,8.97878723 L6.49949986,13.9939392 L6.99966647,13.9939392 L6.99966647,8.97878723 L6.49949986,8.97878723 Z M9.00033289,8.97878723 L9.00033289,13.9939392 L9.5004995,13.9939392 L9.5004995,8.97878723 L9.00033289,8.97878723 Z" id="Combined-Shape"></path></svg>',
'preparation' => '<svg xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M11.0496997,17 C10.1762801,17 8.07367885,16.5084031 8.07367885,13.1248921 C8.07367885,11.1477067 10.6001897,8.32110195 10.6001897,6.30755958 C10.6001897,2.43340099 10.2945097,3.3266808 10.2945097,1.99131232 C10.2945097,0.655943843 10.4337268,0.369267973 11.0368394,0.369267973 C11.6399521,0.369267973 11.8860637,0.727612811 11.8860637,1.99131232 C11.8860637,3.25501184 11.5781745,2.46187872 11.5781745,6.30755958 C11.5781745,8.29453696 14,11.1945763 14,13.1248921 C14,16.5538488 11.9231194,17 11.0496997,17 Z M3.88621863,0 C6.67618563,0 7.82796497,0.491812521 7.82796497,3.87510786 C7.82796497,7.2200552 6.04715677,6.39518166 5.34290808,7.76163436 C4.80725927,8.80095294 4.33572867,9.82256886 4.33572867,10.6924404 C4.33572867,14.566599 4.73918495,13.6731186 4.73918495,15.0084871 C4.73918495,16.3438556 4.50219161,16.630732 3.89907894,16.630732 C3.29596627,16.630732 3.0300952,16.2844365 3.0300952,15.020737 C3.0300952,13.7570375 3.35774386,14.5381213 3.35774386,10.6924404 C3.35774386,9.82827241 2.89965116,8.79139707 2.38192933,7.73670198 C1.70925584,6.36634169 0,7.20344319 0,3.87510786 C8.19840242e-17,0.446151189 1.09625163,0 3.88621863,0 Z M2.39141746,2.37183939 L2.39141746,5.31750516 L2.88371509,5.31750516 L2.88371509,2.37183939 L2.39141746,2.37183939 Z M3.62216153,1.88866715 L3.62216153,5.7768273 L4.11445916,5.7768273 L4.11445916,1.88866715 L3.62216153,1.88866715 Z M4.8529056,2.37183939 L4.8529056,5.31750516 L5.34520323,5.31750516 L5.34520323,2.37183939 L4.8529056,2.37183939 Z" id="Combined-Shape"></path></svg>',
'cost' => '<svg xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,11.6421356 11.6421356,15 7.5,15 Z M11,10.5747744 L10.2855153,9.78508078 C9.92618205,10.1109877 9.52716097,10.3658598 9.08844011,10.5497047 C8.64971925,10.7335497 8.2005594,10.8254708 7.74094708,10.8254708 C7.02228053,10.8254708 6.37883292,10.6290939 5.81058496,10.2363343 C5.24233699,9.84357464 4.83287033,9.3296522 4.5821727,8.69455153 L7.97910864,8.69455153 L7.97910864,8.01767131 L4.39415042,8.01767131 C4.36908065,7.84218297 4.35654596,7.66669726 4.35654596,7.49120891 C4.35654596,7.3658601 4.36072419,7.26976078 4.36908078,7.20290808 L7.97910864,7.20290808 L7.97910864,6.53856267 L4.49442897,6.53856267 C4.70334366,5.84496589 5.10654297,5.27672645 5.704039,4.8338273 C6.30153502,4.39092815 6.98049759,4.16948189 7.74094708,4.16948189 C8.2005594,4.16948189 8.65389749,4.26767033 9.10097493,4.46405014 C9.54805237,4.66042995 9.94289522,4.92992586 10.2855153,5.27254596 L10.9874652,4.40764345 C10.5612792,3.99817065 10.0640697,3.67853597 9.49582173,3.44872981 C8.92757376,3.21892364 8.33844316,3.10402228 7.72841226,3.10402228 C7.00138912,3.10402228 6.32242655,3.25026038 5.69150418,3.54274095 C5.0605818,3.83522152 4.52994644,4.24259906 4.09958217,4.76488579 C3.6692179,5.28717253 3.38300907,5.87839224 3.24094708,6.53856267 L2,6.53856267 L2,7.20290808 L3.14066852,7.20290808 C3.13231194,7.26976078 3.1281337,7.37003833 3.1281337,7.50374373 C3.1281337,7.62909255 3.13649017,7.80040003 3.15320334,8.01767131 L2,8.01767131 L2,8.69455153 L3.29108635,8.69455153 C3.45821811,9.32129561 3.75487252,9.88117859 4.1810585,10.3742173 C4.60724447,10.8672559 5.12325602,11.2537423 5.72910864,11.533688 C6.33496125,11.8136337 6.9846762,11.9536045 7.67827298,11.9536045 C8.2799473,11.9536045 8.87325613,11.8303466 9.45821727,11.5838273 C10.0431784,11.337308 10.5571008,11.0009603 11,10.5747744 Z" id="Oval-3"></path></svg>'
]}

{block name='page_header_container'}
    {block name='page_title'}
      <header class="page-header">
        <h1 class="recipe_title">{$recipe.name|escape:'html':'UTF-8'}</h1>
      </header>
    {/block}
{/block}

{block name='page_content_container'}
  <div class="panel">
    <div class="recipe" itemscope="" itemtype="https://schema.org/Recipe" id="{$recipe.id}">
      <meta itemprop="name" content="{$recipe.name|escape:'html':'UTF-8'}">
      <div class="recipe_rating" itemprop="aggregateRating" itemtype="https://schema.org/AggregateRating"
           itemscope="">
        <meta itemprop="reviewCount" content="1">
        <meta itemprop="bestRating" content="5">
        <meta itemprop="ratingValue" content="5">
      </div>
      <div class="recipe_header">
          {if !empty($recipe.full_image)}
              {images_block}
                <div class="recipe_header-img">
                  <img itemprop="image" class="img-responsive"
                       src="{$recipe.full_image|escape:'html':'UTF-8'}"
                       width="auto" height="auto" alt="{$recipe.name|escape:'html':'UTF-8'}"
                       title="{$recipe.name|escape:'html':'UTF-8'}">
                </div>
              {/images_block}
          {/if}
        <div class="recipe_header-description" itemprop="description">
          <span>{$recipe.description|cleanHtml nofilter}</span>
        </div>
      </div>
      <div class="recipe_content border-bottom">
        <div class="recipe_content-container">
          <div class="recipe_content-title">
            <span>{l s='Ingredients' d='Modules.Recipesproducts.Front'}</span>
          </div>
          <div class="recipe_content-text border-top">
            <meta itemprop="recipeCategory" content="{$recipe.category}"/>
            <meta itemprop="recipeCuisine" content="{$recipe.cuisine}"/>
            <ul>
                {foreach from=$recipe.ingredients item=ingredient}
                  <li
                    itemprop="recipeIngredient">{$ingredient.ingredient_name}{if $ingredient.quantity > 0} {$ingredient.quantity|string_format:'%g'}{/if} {$ingredient.symbol}</li>
                {/foreach}
            </ul>
          </div>
        </div>
        <div class="border-left recipe_content-container">
          <div class="recipe_content-text">
              {if isset($recipe.nutrition) && !empty($recipe.nutrition)}
                <div class="recipe_content-info">
                  <div class="recipe-nutrition wrapper" itemscope="" itemprop="nutrition"
                       itemtype="https://schema.org/NutritionInformation">
                      {assign var=_expand_id value=10|mt_rand:100000}
                    <div class="d-flex align-items-center mb-3 justify-content-between position-relative">
                      <span class="recipe_content-info">{l s='Nutrition facts' d='Modules.Recipesproducts.Front'}</span>
                      <a href="#nutrition_sub_menu_{$_expand_id}"
                         class="icon-collapse stretched-link text-reset d-block"
                         data-toggle="collapse">
                        <i class="material-icons d-block"></i>
                      </a>
                    </div>
                    <div id="nutrition_sub_menu_{$_expand_id}" class="collapse d-md-block">
                      <ul class="links-list">
                          {if $recipe.nutrition.calories}
                            <li class="recipe_content-info"
                                itemprop="calories"
                                content="{$recipe.nutrition.calories}">
                            <span
                              class="recipe-nutrition-name">{l s='Calories' d='Modules.Recipesproducts.Front'}</span>
                              <span class="recipe-nutrition-value">{$recipe.nutrition.calories}</span>
                            </li>
                          {/if}
                          {if $recipe.nutrition.carbohydrateContent}
                            <li class="recipe_content-info"
                                itemprop="carbohydrateContent"
                                content="{$recipe.nutrition.carbohydrateContent}">
                            <span
                              class="recipe-nutrition-name">{l s='Carbohydrate' d='Modules.Recipesproducts.Front'}</span>
                              <span class="recipe-nutrition-value">{$recipe.nutrition.carbohydrateContent}</span>
                            </li>
                          {/if}
                          {if $recipe.nutrition.sugarContent}
                            <li class="recipe_content-info"
                                itemprop="sugarContent"
                                content="{$recipe.nutrition.sugarContent}">
                            <span
                              class="recipe-nutrition-name of-which">{l s='Sugar' d='Modules.Recipesproducts.Front'}</span>
                              <span class="recipe-nutrition-value">{$recipe.nutrition.sugarContent}</span>
                            </li>
                          {/if}
                          {if $recipe.nutrition.fatContent}
                            <li class="recipe_content-info"
                                itemprop="fatContent"
                                content="{$recipe.nutrition.fatContent}">
                              <span class="recipe-nutrition-name">{l s='Fat' d='Modules.Recipesproducts.Front'}</span>
                              <span class="recipe-nutrition-value">{$recipe.nutrition.fatContent}</span>
                            </li>
                          {/if}
                          {if $recipe.nutrition.saturatedFatContent}
                            <li class="recipe_content-info"
                                itemprop="saturatedFatContent"
                                content="{$recipe.nutrition.saturatedFatContent}">
                            <span
                              class="recipe-nutrition-name of-which">{l s='SaturatedFat' d='Modules.Recipesproducts.Front'}</span>
                              <span class="recipe-nutrition-value">{$recipe.nutrition.saturatedFatContent}</span>
                            </li>
                          {/if}
                          {if $recipe.nutrition.fiberContent}
                            <li class="recipe_content-info"
                                itemprop="fiberContent"
                                content="{$recipe.nutrition.fiberContent}">
                              <span class="recipe-nutrition-name">{l s='Fiber' d='Modules.Recipesproducts.Front'}</span>
                              <span class="recipe-nutrition-value">{$recipe.nutrition.fiberContent}</span>
                            </li>
                          {/if}
                          {if $recipe.nutrition.cholesterolContent}
                            <li class="recipe_content-info"
                                itemprop="cholesterolContent"
                                content="{$recipe.nutrition.cholesterolContent}">
                            <span
                              class="recipe-nutrition-name">{l s='Cholesterol' d='Modules.Recipesproducts.Front'}</span>
                              <span class="recipe-nutrition-value">{$recipe.nutrition.cholesterolContent}</span>
                            </li>
                          {/if}
                          {if $recipe.nutrition.sodiumContent}
                            <li class="recipe_content-info"
                                itemprop="sodiumContent"
                                content="{$recipe.nutrition.sodiumContent}">
                              <span
                                class="recipe-nutrition-name">{l s='Sodium' d='Modules.Recipesproducts.Front'}</span>
                              <span class="recipe-nutrition-value">{$recipe.nutrition.sodiumContent}</span>
                            </li>
                          {/if}
                          {if $recipe.nutrition.proteinContent}
                            <li class="recipe_content-info"
                                itemprop="proteinContent"
                                content="{$recipe.nutrition.proteinContent}">
                              <span
                                class="recipe-nutrition-name">{l s='Protein' d='Modules.Recipesproducts.Front'}</span>
                              <span class="recipe-nutrition-value">{$recipe.nutrition.proteinContent}</span>
                            </li>
                          {/if}
                      </ul>
                    </div>
                  </div>
                </div>
              {/if}
            <div class="recipe_content-generic-info">
                {assign var='split' value=' '|explode:{$recipe.yield}}
              <div class="recipe_content-information" itemprop="recipeYield" content="{$split[0]}">
                <span class="recipe-icon">{$icon_svgs.yield|cleanHtml nofilter}</span>
                <span>{l s='Doses for' d='Modules.Recipesproducts.Front'}: <b>{$recipe.yield}</b></span>
              </div>
              <div class="recipe_content-information">
                <span class="recipe-icon">{$icon_svgs.difficulty|cleanHtml nofilter}</span>
                <span>{l s='Difficulty' d='Modules.Recipesproducts.Front'}: <b>{$recipe.difficulty}</b></span>
              </div>
              <div class="recipe_content-information">
                <span class="recipe-icon">{$icon_svgs.cost|cleanHtml nofilter}</span>
                <span>{l s='Cost' d='Modules.Recipesproducts.Front'}: <b>{$recipe.cost}</b></span>
                <meta itemprop="estimatedCost" content="{$recipe.cost}"/>
              </div>
              <meta class="recipe_content-information" itemprop="keywords" content="{$recipe.keywords}">
              <div class="recipe_content-information" itemprop="prepTime"
                   content="{$recipe.preparation_time.duration}">
                <span class="recipe-icon">{$icon_svgs.preparation|cleanHtml nofilter}</span>
                <span>{l s='Preparation time' d='Modules.Recipesproducts.Front'}: <b>{$recipe.preparation_time.formatted}</b></span>
              </div>
                {if $recipe.cooking_time}
                  <div class="recipe_content-information" itemprop="cookTime"
                       content="{$recipe.cooking_time.duration}">
                    <span class="recipe-icon">{$icon_svgs.cooking|cleanHtml nofilter}</span>
                    <span>{l s='Cooking time' d='Modules.Recipesproducts.Front'}: <b>{$recipe.cooking_time.formatted}</b></span>
                  </div>
                {/if}
            </div>
          </div>
        </div>
      </div>
      <div class="recipe_content">
        <div class="recipe_content-instructions">
          <div class="recipe_content-instructions--title border-bottom">
            <span>{l s='Directions' d='Modules.Recipesproducts.Front'}</span>
          </div>
          <div class="recipe_content-text">
            <div itemprop="recipeInstructions">{$recipe.instructions|cleanHtml nofilter}</div>
          </div>
        </div>
      </div>
    </div>
      {hook h='displayFooterRecipe' recipe=$recipe}
  </div>
{/block}

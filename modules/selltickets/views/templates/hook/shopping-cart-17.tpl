{*
 *
 * Sell Tickets module for Prestashop by Avellana Digital
 *
 * @author     Avellana Digital SL
 * @copyright  Copyright (c) 2019 Avellana Digital - www.avellanadigital.com
 * @license    Commercial license
 * @version    4.0.0
*}

<!-- selltickets -->
<script type="text/javascript" src="http{if Configuration::get('PS_SSL_ENABLED') == 1}s{/if}://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
<script type="text/javascript">
	var seti_lang = {
		seatsselected : "{l s='Seats selected' mod='selltickets'}",
		selectseatsbefore : "{l s='You must select your seats before saving' mod='selltickets'}",
		unknownerrorseats : "{l s='Unknown error saving your seat' mod='selltickets'}",
		cannotcontinue : "{l s='Error: You cannot continue without tickets info' mod='selltickets'}",
		timeisover : "{l s='Your time is over.' mod='selltickets'}",
		selectagain : "{l s='Select again' mod='selltickets'}",
		seatreserved : "{l s='This seat is already reserved' mod='selltickets'}",
		maxseatquantity : "{l s='Maximum quantity, deselect one to select new' mod='selltickets'}",
		seatmapnotavailable : "{l s='Seat map selector not available' mod='selltickets'}",
		errorloadingseatmap : "{l s='Error loading seat map selector' mod='selltickets'}",
		errorcontinue : "{l s='Error: You cannot continue without tickets info' mod='selltickets'}"
	}
	var seti_config = {
		ajaxurl : "{url entity='module' name='selltickets' controller='ajax'}",
		token : "{$ajax_token_front}",
		total_tickets_nominal : {if $total_tickets_nominal}{$total_tickets_nominal}{else}0{/if},
		total_tickets_seats : {if $total_tickets_seats}{$total_tickets_seats}{else}0{/if}
	}
        var have_selltickets_product ={if $tickets_customer}1{else}0{/if};
</script>
{if $tickets_customer}
{if $total_tickets_seats > 0}
<div id="backgroundseatmap">
	<div id="seatselectormap">
		<h3>{l s='Select your seats' mod='selltickets'} <small>(<span>-</span> {l s='left' mod='selltickets'})</small></h3>
		<ul id="sellticketmapseat"></ul>
		<div class="submit text-xs-center col-xs-12">
			<div id="sellticketsseatinfo"></div>
			<button type="button" name="closeSeatMap" id="closeSeatMap" onClick="" class="button btn btn-default button-small col-xs-12 col-md-6"><span>{l s='Cancel' mod='selltickets'}</span></button>
			<button type="button" name="submitSeatsTickets" id="submitSeatsTickets" class="button btn btn-primary button-small col-xs-12 col-md-6"><span>{l s='Save' mod='selltickets'}</span></button>
			<p class="infoseats">{l s='By clicking on Save you will have your seats reserved for 5min until the end of the purchase. You cannot make changes until the time is over or creating again the cart.' mod='selltickets'}</p>
		</div>
	</div>
</div>
{/if}
{if $total_tickets_nominal > 0}
<div class="col-xs-12 col-md-12 selltickets_customers">
	<form action="" method="post" class="contact-form-box" id="selltickets_form">
		<fieldset>
			<h3 class="card-block">{l s='Add info customer tickets' mod='selltickets'}</h3>
			{foreach from=$tickets_customer item=tick}
			{if $tick.nominal}
			<div class="clearfix">
				<div class="col-xs-12 col-md-12">
					<h4 class="page-subheading">{$tick.name}{if $tick.attributes} <small>{$tick.attributes}</small>{/if}</h4>
				</div>	
				{for $numticket=1 to $tick.num}	
				<div class="clearfix col-xs-12 col-md-12 customertickets">		
					<div class="tabticket" onClick="openTicketInfo({$tick.id_product}, {$tick.id_product_attribute}, {$numticket});"><span>{l s='Ticket' mod='selltickets'} #{$numticket}</span> <span class="step-edit btn btn-tertiary small float-xs-right"><i class="material-icons edit"></i> {l s='edit' mod='selltickets'}</span></div>
					<div class="clearfix customerinfo" id="tabcustomerinfo_{$tick.id_product}_{$tick.id_product_attribute}_{$numticket}">
						<div class="col-xs-12 col-md-12">
							<div class="form-group">
								<input type="text" class="form-control" id="customer_name_ticket" name="infoticket[{$tick.id_product}][{$tick.id_product_attribute}][{$numticket}][name]" value="{if isset($tick.info[$numticket].customer_name)}{$tick.info[$numticket].customer_name}{/if}" placeholder="{l s='Customer Name' mod='selltickets'}" />
							</div>
							<div class="form-group">
								<input type="text" class="form-control" id="customer_firstname_ticket" name="infoticket[{$tick.id_product}][{$tick.id_product_attribute}][{$numticket}][firstname]" value="{if isset($tick.info[$numticket].customer_firstname)}{$tick.info[$numticket].customer_firstname}{/if}" placeholder="{l s='Customer First Name' mod='selltickets'}" />
							</div>							
						</div>			
						<div class="col-xs-12 col-md-12">
							<div class="form-group">
								<input type="text" class="form-control" id="customer_phone_ticket" name="infoticket[{$tick.id_product}][{$tick.id_product_attribute}][{$numticket}][phone]" value="{if isset($tick.info[$numticket].customer_phone)}{$tick.info[$numticket].customer_phone}{/if}" placeholder="{l s='Phone number' mod='selltickets'}" />
							</div>
						</div>
					</div>				
				</div>
				<div class="clearfix">
					<div class="col-xs-12 col-md-12">
						<hr/>
					</div>	
				</div>
				{/for}
			</div>
			{/if}
			{/foreach}
			<div class="clearfix">
				<div class="col-xs-12 col-md-12">
					<div id="sellticketsinfo">
					</div>
					<div id="sellticketsload">
					</div>		
					<div class="submit text-xs-center">
						<button type="button" name="submitCustomerTickets" id="submitCustomerTickets" class="button btn btn-primary button-small col-xs-12"><span>{l s='Save' mod='selltickets'}</span></button>
					</div>
				</div>
			</div>
		</fieldset>
	</form>
	<hr/>
</div>
{/if}
{if $total_tickets_seats > 0}
<div id="selectionseat" class="col-xs-12 col-md-12 selltickets_customers">
	<fieldset>
		<h3 class="card-block">{l s='Select your seat(s)' mod='selltickets'}</h3>	
		<div class="clearfix">
			<div id="seat_distribution" class="col-xs-12 col-md-12">
				{foreach from=$tickets_customer item=tick}
				{if $is_product_seat[{$tick.id_product}][{$tick.id_product_attribute}]}
				<div class="item_seats">
					<h4 class="page-subheading">{$tick.name}{if $tick.attributes} <small>{$tick.attributes}</small>{/if}</h4>
					{foreach from=$tick.assoc_seats item=assoc_seat}
						<input type="hidden" id="seats_selected_{$tick.id_product}_{$tick.id_aux_product_attribute}_{$assoc_seat}" value="" name="seats[{$tick.id_product}][{$tick.id_aux_product_attribute}][{$assoc_seat}][selected]" />
						<!-- <button type="button" name="selectSeat" id="select_seat_{$tick.id_product}_{$tick.id_product_attribute}_{$assoc_seat}" onClick="openSelectSeat({$tick.id_product}, {$tick.id_product_attribute}, {$assoc_seat});" class="button btn btn-primary button-small col-xs-12">{l s='Open seat map' mod='selltickets'} </button> -->
                                                <button type="button" name="selectSeat" id="select_seat_{$tick.id_product}_{$tick.id_product_attribute}_{$assoc_seat}" onClick="openSelectSeat({$tick.id_product}, {$tick.id_aux_product_attribute}, {$assoc_seat});" class="button btn btn-primary button-small col-xs-12">{l s='Open seat map' mod='selltickets'} </button>                                                
						<div class="timeseat" id="timeseat_{$tick.id_product}_{$tick.id_aux_product_attribute}_{$assoc_seat}">{l s='Reservation time limit:' mod='selltickets'} <span></span></div>
					{/foreach}
				</div>
				{/if}
				{/foreach}
			</div>
		</div>
	</fieldset>
</div>
{/if}
{else}
<script type="text/javascript">
	var seti_config = {
	}
</script>
{/if}
<!-- /selltickets -->
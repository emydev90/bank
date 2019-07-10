var nom_cliente_destino = document.getElementById("nombre_cliente_destino");
var numero_ident_destino = document.getElementById("numero_identificacion_destino");
var cuenta_destino = document.getElementById("cuenta_cliente_destino");
var banco_destino = document.getElementById("banco_cliente_destino");
var monto_transferencia = document.getElementById("monto_trans_destino");
var concepto_trans = document.getElementById("concepto_trans_html");

var boton = document.getElementById("boton_html");
boton.addEventListener("click", transferencia);
var boton_ocultar = document.getElementById("ocultar_datos");
boton_ocultar.addEventListener("click", ocultar_datos);
var boton_mostrar = document.getElementById("mostrar_datos");
boton_mostrar.addEventListener("click", mostrar_datos);


class Cliente{
	constructor(nombre, cedula, n_cuenta, saldo){
		this.nombre = nombre;
		this.cedula = cedula;
		this.n_cuenta = n_cuenta;
		this.saldo = saldo;
	}
	mostrar(){
		console.log("Datos del cliente:")
		console.log("Nombre: " + this.nombre);
		console.log("Cedula: " + this.cedula);
		console.log("Cuenta: " + this.n_cuenta);
		console.log("Saldo inicial de la cuenta: " + this.saldo);
	}
}

var clientes = [];
clientes.push( new Cliente ("Emily Martinez", 123456789, "01340142050123456789", 1000) );

for (var clienteactual of clientes) {
	clienteactual.mostrar();
}

//Datos del Banco
var nom_banco = "Bank";

//Datos del cliente
var nom_cliente = "Emily Martinez";
var cliente = true;

//Datos de la cuenta
var cuenta_cliente = "01340142050123456789";
var saldo_inicial = 100000;
var saldo_actual = saldo_inicial;

//Datos de la transferencia
var comision = 100;
var hora = 10;
var destino = true;

nombre_del_cliente.innerHTML = nom_cliente;
saldo_cuenta_cliente.innerHTML = saldo_inicial + " USD";
	

function transferencia(){
	/*document.body.style.fontSize="20px";*/		
	if (cliente && (hora > 9 && hora < 12 || hora > 14 && hora < 21) && destino) {	
		monto_transferencia = parseInt(monto_transferencia.value);
		if (banco_destino.value == nom_banco) {
			if (saldo_actual >= monto_transferencia) {
				document.getElementById("div_datos_trans").style.display="inline";
				saldo_actual = saldo_actual - monto_transferencia;
				n_cliente_destino.innerHTML = nom_cliente_destino.value;
				n_ident_destino.innerHTML = numero_ident_destino.value;
				c_cliente_destino.innerHTML = cuenta_destino.value;
				b_cliente_destino.innerHTML = banco_destino.value;					
				m_trans_destino.innerHTML = monto_transferencia;
				c_trans_destino.innerHTML = concepto_trans.value;
					console.log("Tranferencia sin comision");
					console.log("Cliente destino: " + nom_cliente_destino.value);
					console.log("Cuenta destino: " + cuenta_destino.value);
					console.log("Banco destino: " + banco_destino.value);
					console.log("Monto de la transferencia es: " + monto_transferencia);
					console.log("Saldo actual es: " + saldo_actual);
			}
			else{
				console.log("Saldo Insuficiente");
				saldo_html.innerHTML = "Saldo Insuficiente";
			}			
		}
		else{
			monto_transferencia = monto_transferencia + comision;
			if (saldo_actual >= monto_transferencia) {				
				document.getElementById("div_datos_trans").style.display="inline";
				saldo_actual = saldo_actual - monto_transferencia;			
				n_cliente_destino.innerHTML = nom_cliente_destino.value;
				n_ident_destino.innerHTML = numero_ident_destino.value;
				c_cliente_destino.innerHTML = cuenta_destino.value;
				b_cliente_destino.innerHTML = banco_destino.value;					
				m_trans_destino.innerHTML = monto_transferencia;
				c_trans_destino.innerHTML = concepto_trans.value;
					console.log("Transferencia con comision");
					console.log("Cliente destino: " + nom_cliente_destino.value);
					console.log("Cuenta destino: " + cuenta_destino.value);
					console.log("Banco destino: " + banco_destino.value);
					console.log("Monto de la transferencia es: " + monto_transferencia);
					console.log("Monto actual es: " + saldo_actual);
			}
			else{
				console.log("Saldo Insuficiente");
				saldo_html.innerHTML = "Saldo Insuficiente"; 
			}			
		}	
	}
	else{
		if (!cliente) {
			cliente_verificado_hmtl.innerHTML = "Cliente no verificado";
		}
		if (hora < 9 || hora > 12 && hora < 15 || hora > 20) {
			horario_html.innerHTML = "No se puede hacer transferencias en este momento. <br> El Horario de transferencia es de: 9am - 12m / 15h - 20h";
		}
		if (!destino) {
			destino_verificado_html.innerHTML = "Destino no verificado";
		}
	}
}

function ocultar_datos(){
	document.getElementById("div_datos_trans").style.display="none";
	document.getElementById("mostrar_datos").style.display="inline";
}

function mostrar_datos(){
	document.getElementById("div_datos_trans").style.display="inline";
	document.getElementById("mostrar_datos").style.display="none";
}
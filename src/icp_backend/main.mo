import Float "mo:base/Float";
import Nat "mo:base/Nat";

actor {
  stable var _name : Text = "";
  stable var _table_name : Text = "";
  stable var _subTotal : Nat = 0;
  stable var _total : Nat = 0;
  stable var _pedido : Nat = 0;
  stable var _dia : Nat = 0;
  stable var _propina : Float = 0.0;
  stable var _pedidos : Text = "";
  var pedidoStr : Text = "";
  var totalStr : Text = "";

  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  public func setName(name : Text) : async Text {
    _name := name;
    return "Hola " # name # ".";
  };

  public func setTableName(name : Text) : async Text {
    _table_name := name;
    return "Nombre de la mesa: " # name # ".";
  };

  public func setSubTotal(subTotal : Nat) : async Nat {
    _subTotal := _subTotal + subTotal;
  return _subTotal;
  };

  public func setTotal() : async Text {
    _total := _total + _subTotal;
    _subTotal := 0;
    if (_pedido == 0) {
      _pedido := 1;
    };
    return "El total es de venta hasta ahora: " # Nat.toText(_total) # ".00 y el numero de pedido del dia " # Nat.toText(_dia) #" es: " # Nat.toText(_pedido);
  };
  
  public func setPedidos () : async Text {
    _pedidos := _pedidos # _table_name # ": " # Nat.toText(_subTotal);
    return _pedidos;
  };

  public func endOrder() : async Nat {
    _pedido := _pedido + 1;
    _subTotal := 0;
    return _subTotal;
  };

  public func finishDay() : async Text {
    _dia := _dia + 1;
    _propina := Float.fromInt(_total) * 0.10;
    pedidoStr := Nat.toText(_pedido);
    totalStr := Nat.toText(_total);
    _total := 0;
    _pedido := 0;
    return "El total de ventas del dia " # Nat.toText(_dia) # " es: " # totalStr # " y el numero de pedidos del dia fueron: " # pedidoStr # " y la propina esperada (10%) es de: " # Float.toText(_propina);
  };
};

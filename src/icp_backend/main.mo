import Float "mo:base/Float";
import Nat "mo:base/Nat";

actor {
  stable var _name : Text = "";
  stable var _table_name : Text = "";
  stable var _subTotal : Float = 0.0;
  stable var _total : Float = 0.0;
  stable var _pedido : Nat = 0;
  stable var _dia : Nat = 0;
  var diaStr : Text = "";
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
    return "Table name set to " # name # ".";
  };

  public func setSubTotal(subTotal : Float) : async Float {
    _subTotal := _subTotal + subTotal;
  return _subTotal;
  };

  public func setTotal() : async Text {
    _total := _total + _subTotal;
    _subTotal := 0.0;
    totalStr := Float.toText(_total);
    pedidoStr := Nat.toText(_pedido);
    return "El total es de venta hasta ahora: " # totalStr # " y el numero de pedido es: " # pedidoStr;
  };
  
  public func endOrder() : async Float {
    _pedido := _pedido + 1;
    _subTotal := 0.0;
    return _subTotal;
  };

  public func finishDay() : async Text {
    _dia := _dia + 1;
    totalStr := Float.toText(_total);
    pedidoStr := Nat.toText(_pedido);
    diaStr := Nat.toText(_dia);
    _total := 0.0;
    _pedido := 0;
    return "El total de ventas del dia" # diaStr # " es: " # totalStr # " y el numero de pedidos del dia fueron: " # pedidoStr;
  };
};

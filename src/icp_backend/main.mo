//import Text "mo:base/Text";
actor {
  stable var _name : Text = "";
  stable var _table_name : Text = "";
  stable var _subTotal : Float = 0.0;
  stable var _total : Float = 0.0;

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

  public func setTotal(total : Float) : async Float {
    _total := _total + total;
    return total;
  };
  
  public func endOrder() : async Float {
    _subTotal := 0.0;
    return _subTotal;
  };
};

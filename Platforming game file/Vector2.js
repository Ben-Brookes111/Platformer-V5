
var Vector2 = function()
{
    this.x = 0;
    this.y = 0;
}

Vector2.prototype.set = function(x, y)
{
    this.x = x;
    this.y = y;
}


Vector2.prototype.Add = function(otherVector)
{
        var newVector = new Vector2();
        newVector.set(this.x + otherVector.x, this.y + otherVector.y);
        return newVector;
}


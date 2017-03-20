#pragma strict
private var currentFrictionValue : float;
var skidAt : float = 1.5;
var skidSound : GameObject;
function Start () {

}

function Update () {
var hit : WheelHit;
transform.GetComponent(WheelCollider).GetGroundHit(hit);
currentFrictionValue= Mathf.Abs(hit.sidewaysSlip);
if(skidAt <= currentFrictionValue){
		Instantiate(skidSound,hit.point,Quaternion.identity);
	}

}
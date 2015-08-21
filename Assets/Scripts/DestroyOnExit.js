#pragma strict

function OnTriggerExit2D (collider : Collider2D) {
	if (collider.gameObject.CompareTag("Player") == false) {
		Destroy(collider.gameObject);
	}
}

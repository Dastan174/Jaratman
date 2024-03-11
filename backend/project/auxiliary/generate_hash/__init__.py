import hashlib

def generate_hash(data) -> str:
    hash_hex = hashlib.sha256(data.encode()).hexdigest()
    return hash_hex
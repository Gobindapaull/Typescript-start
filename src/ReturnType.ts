const getData = async () => ["bnb", "sol", "eth"]


type Data = Awaited<ReturnType<typeof getData>>

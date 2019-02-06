interface Storage {
  put(key: string, value: string): void
  get(key: string): string
}

export enum StorageKind {
  Redis,
  InMemory
}

class RedisStorage implements Storage {
  put (key: string, value: string) {
    // do something
  }
  get (key: string) {
    return 'foo'
  }
}

class InMemoryStorage implements Storage {
  put (key: string, value: string) {
    // do something
  }
  get (key: string) {
    return 'foo'
  }
}

export function createStorage(kind:StorageKind): Storage {
  switch (kind) {
    case StorageKind.Redis:
      return new RedisStorage()
    case StorageKind.InMemory:
      return new InMemoryStorage()
  }
}

(module
 (type $FUNCSIG$ii (func (param i32) (result i32)))
 (import "env" "malloc" (func $malloc (param i32) (result i32)))
 (table 0 anyfunc)
 (memory $0 1)
 (export "memory" (memory $0))
 (export "main" (func $main))
 (export "test" (func $test))
 (func $main (; 1 ;) (result i32)
  (i32.const 42)
 )
 (func $test (; 2 ;) (result i32)
  (local $0 i32)
  (i64.store align=4
   (tee_local $0
    (call $malloc
     (i32.const 160)
    )
   )
   (i64.const 8589934593)
  )
  (i64.store offset=8 align=4
   (get_local $0)
   (i64.const 17179869187)
  )
  (i64.store offset=16 align=4
   (get_local $0)
   (i64.const 25769803781)
  )
  (i64.store offset=24 align=4
   (get_local $0)
   (i64.const 34359738375)
  )
  (i64.store offset=32 align=4
   (get_local $0)
   (i64.const 42949672969)
  )
  (i32.store offset=40
   (get_local $0)
   (i32.const 11)
  )
  (i32.store offset=44
   (get_local $0)
   (i32.const 12)
  )
  (i32.store offset=48
   (get_local $0)
   (i32.const 13)
  )
  (i32.store offset=52
   (get_local $0)
   (i32.const 14)
  )
  (i32.store offset=56
   (get_local $0)
   (i32.const 15)
  )
  (i32.store offset=60
   (get_local $0)
   (i32.const 16)
  )
  (i32.store offset=64
   (get_local $0)
   (i32.const 17)
  )
  (i32.store offset=68
   (get_local $0)
   (i32.const 18)
  )
  (i32.store offset=72
   (get_local $0)
   (i32.const 19)
  )
  (i32.store offset=76
   (get_local $0)
   (i32.const 20)
  )
  (i32.store offset=80
   (get_local $0)
   (i32.const 21)
  )
  (i32.store offset=84
   (get_local $0)
   (i32.const 22)
  )
  (i32.store offset=88
   (get_local $0)
   (i32.const 23)
  )
  (i32.store offset=92
   (get_local $0)
   (i32.const 24)
  )
  (i32.store offset=96
   (get_local $0)
   (i32.const 25)
  )
  (i32.store offset=100
   (get_local $0)
   (i32.const 26)
  )
  (i32.store offset=104
   (get_local $0)
   (i32.const 27)
  )
  (i32.store offset=108
   (get_local $0)
   (i32.const 28)
  )
  (i32.store offset=112
   (get_local $0)
   (i32.const 29)
  )
  (i32.store offset=116
   (get_local $0)
   (i32.const 30)
  )
  (i32.store offset=120
   (get_local $0)
   (i32.const 31)
  )
  (i32.store offset=124
   (get_local $0)
   (i32.const 32)
  )
  (i32.store offset=128
   (get_local $0)
   (i32.const 33)
  )
  (i32.store offset=132
   (get_local $0)
   (i32.const 34)
  )
  (i32.store offset=136
   (get_local $0)
   (i32.const 35)
  )
  (i32.store offset=140
   (get_local $0)
   (i32.const 36)
  )
  (i32.store offset=144
   (get_local $0)
   (i32.const 37)
  )
  (i32.store offset=148
   (get_local $0)
   (i32.const 38)
  )
  (i32.store offset=152
   (get_local $0)
   (i32.const 39)
  )
  (i32.store offset=156
   (get_local $0)
   (i32.const 40)
  )
  (i32.add
   (get_local $0)
   (i32.const 80)
  )
 )
)

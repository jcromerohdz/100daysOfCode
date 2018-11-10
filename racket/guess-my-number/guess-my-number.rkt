#lang racket
(define lower 1)
lower
(define upper 100)
upper

(define (guess)
  (quotient (+ lower upper) 2))

(define (smaller)
  (set! upper (max lower (sub1 (guess))))
  (guess))

(define (bigger)
  (set! lower (max lower (add1 (guess))))
  (guess))

(define (start n m)
  (set! lower (min n m))
  (set! upper (max n m))
  (guess))

;;Testing my learning by doing fibonacci series
(define (fib n)
  (cond
    [(< n 2) n]
    [else
     (+ (fib (- n 1))
        (fib (- n 2)))]))
      
        
  
 
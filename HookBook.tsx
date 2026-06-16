// @ts-nocheck
"use client";

import { useState, useEffect } from "react";

const GOLD = "#FFC400";
const PURP = "#C13CFF";
const BG   = "#000000";
const SURF = "#0d0d0d";
const SURF2= "#0a0a0a";
const BRD  = "#222222";
const BRD2 = "#181818";
const TXT  = "#e5e7eb";
const GRAY = "#9ca3af";
const DIM  = "#6b7280";

const GA = (a) => `rgba(255,196,0,${a})`;
const LOGO_URI = "data:image/webp;base64,UklGRpojAABXRUJQVlA4II4jAAAwcACdASrcANwAPjEWiUMiISEVG70EIAMEtDdwuwCBqA/u/ZpQf77/Tf2e9juov0/+sfqL+8/+v/UfGLqf5j8u/y79V/0f96/dn+0fML+zf53+5e4L80/833AP03/0v9y/w37FfEx+u3uI/s3+n/53sC/kv9n/7H+I/f/5cf8H+zPuV/tn+c/Yn/O/IB/Uf7Z/xvXI9gL9pf//7gX7Nf+32bP9p/6v9t+//0V/s7/5P9Z/w//x9CH89/tH/N/Pz5APQA9ADsVf6f2i/13+q/s5+7Hsf4JfD/7L+yH7ze6r/VePPzP+K8y/4x9jPvP9j/bL/C/vD8Sf33wd+Gn8X9sfyBfin8k/uX5Ef2b9yfpX+Z+0DwTNf/1H/C9QL2V+e/5T+3f4n/mf330cP530O+yv+N9wD+hf0v/O/m762fgb+mewB/O/7H/0P77+ZP0t/x//R/y/+t/83+39on5p/gP+h/kv9F+y/2D/y7+of7H+7/57/w/5H///+X7wfYf+zn/s9039gP+4aowLGWNF/t0X+3DqFS05sY2rFGS/InoeTre6l/dXlsrU+Q/7gHpODhEpWP3FtadSXX6hLos+HJvx1trv0fNqcb3xE5N1veaubF9kXcfm1bHsput+3IJytfollDbrA5Lyrl27EB2SbdfCeLFB8pzVebkvGjb40XXNcc+Ek9L4C33qQekPHrKizWkE6xoon3/lA90+lw9faTmJZK2pnK9Kwd+DuUCSg1wJkcvytye367P34wm5PD1zBWLCbPdAH2AVvAoFCzLxq9axOz4rwJ+08AvfyR9K5/3VgBv8Ih4PpAnhkKAA5O8GebdMRAA5vKa80ryLTsULj4mWQGNPvCu4V53+hqFw/Q8Z9gNBrYgY1oE/CtUd0xXJCpkw/u2QWiKeCp37oxoryLLX3zvFw/0cp/ynsPkAnU2yfJNIucFrc2jDo+sbfUo+0pAXgDa+6n75jF/7UYXbGz+d5/TJOPm5eAqqcMvZQ7CI4eV4RMAYCjGy8UacyIVyw75XNVEUzD7kwFxcK+DKMrxrBd4ZRLP9uuW5CW2XabS5JQ3BxaqE+t3Hx6jyz8Zi+2ij/Xka37gkVirXkenLIgm1w6lQ89iUci9ifrHlOvs4mavzXQhEM9obcnteTtLcuEFSVF/tx6Edur5pClNHe5Nh+ynfjmv+CI7Gi/26L/bov9ui/26L/bov9fAA/v/wCNABoHqUW29Ekas4S+gB26NVA6j68LkYDTQH7I539m5/AUZD27OIqInMXG4EQHKrbUENSktP4UnIkChCgNsaprEzr0ga7/yKrAR8PvaGkvqlOCQV4cEPDimb0p3OD+nA9v/zhWcrkGXtAj4v+pDoZd2f61FZBAJjt0gQvAwtOIMHZz1NrSKwHiDtQKe51hbviAXdFhCVm7jjFJoIxqubr5NRJ6i6N9rw/Hz5A22Ztnr1k2LCyGHDU/8TatHePRKY9L73wx2KqmXuxMwAoLYMijFNaFTfrf/DLtGMY/Qgc5m9UpGDepox/9jlrFQajUTEZiQl7nyItYYUaa+k7mCnqa9zJMRmOQpA+AYaR/NRR/NYYRWZlBLdHUSq0R8MT8cz2coUYuNt/xhO9uK1VOVQb6NxJvbTFwxhxA4p5lN/qLr0Ytbx9yUXvmrwwYSyZL3b49lxEaXDwPRX2p/rK1fW159PvpOK0XOFzxoObMk1x7um83IaLehLeIgDPqYUn7AdlNKkbfyYCfbWe/7yQIYPx2f+kxRcn8lNNVA9n87+6YSzyMJmfJheQ+fF34AGOkWEX0MxieIbRo4fbxDKeC6IY+BjkOZA06Ungt5hsfsq9x+MsMXaEy8qIdKjPhNZ58AhMdI3BD7qSbF6IxTw2tHd6ps0b0OY9WklZtggS+deuBb7cXtflrZnqeLIoe7Z0AjqByUd+WloKmtzEEBc9zJ56Yk9vnwk3a9dAHkjClTHahkC+RKJ5vJ55l60yr/BP5DbQNA4qFXi61wjyZws/lvHIinzrQHyb9/8Ba2I2IC81fMxamG0vwu074VmGDbHbn2t+2djiynDPCqmBCQI4Xy+XL3ClvWwARcuXLsVXzHIUECHClqzaJZebXr9/tVm4Jae6i1+xive+49qaeDkifvy+FQABGpzfH+R7E5zDLH7RgL68M4MaCBIlwAyO1ZXY5xIaCzLFpis5GtgAIwQwifBH8YX/tZO40bp2ujwSfACdgG7xdvYyRKA2mT6g8I1sB3q2tkwL4jaFS6KVuQHSQ/q3rWYt24JI9d5p8a/eVtD/fFi1W8+DY7d8rDE+t2VAffLT8bA9fpe3rVKphUV43NSBUZWt33vMgg2z6KUYmL7f//vPQn0SdPI6Zb+C8U02gBoH9n4xrZO+BkTO0WbavNeuHHqXKXkkBT4QvuGVW/UoiWc/1jjmRChYx840pAg5WExZ4QvnCgPNXjTnkz7MtG68DD6q3lvAzHwVkyXVUCm3fmyHC42Fp7NX8qkAeyPdUy8oVZwUyFC/xkvn+kjKrUmswtSAADtEvCm+ehOdJmzr2WQDWfAAlrRhrGvtFGrNy22ttn/mYTTV0lKzrnwQO14exxiTPgRnRgnX9zjYMznEuhu1c2GfRIV7z0mjC34IaGoX/gwJJmZ1XJS8N2xdL9oLbtpHq7f2edX4ud0VLt+Yt1lPEwjk9dp0md+G9rXyn1biBQMoWZO4n1aBzinyGWVYaQM0dpOjXEVxMGTQ6Ge4aXwCaOuDH56Yo0gs2Qjtj47e8QDkeZZZtjO07vOLNiKM49ND0YvqZsLoLeVTNgCbCY9uORfMH/pWZiGrXqXfM9HuGLufnlMfV/cP67DLuFP/ydnR1xGe7VC16mJpg/rwvhDQx4S39fou5wnXwu3b8sDDEnCMewChLOrwpcKyJFjdNUJ/m7MakEmIz3iuypF+aF8xl2qbB1XF0zJNqUF4VvVSI2chd/mUhOmb2bpKl9AUGMFVbWj16cJm5a3834HbmmcGqRm0UHjO2jpfNzuA3610Gp8hPFthq6jkJbVi3DOr9qMPsTi3savamio3etPpGzYHylIbNToONu2Xtv/KwC+6Vs6VxwG68vdR8Zx1HG8lpKsz1pIXZIr1QFDUc2X4TmUHpS1fV7BxHwRgOkHn9VfqG7peQjuBe3umVLSptQuvomdyHdYbBr5zKuHoX/kclQ+xXkNWie+fsUMQF9jwI5pECM2NWZbbdgSksk6wQj0urlBNgn236UAFp2czm+FuNwKHerOar713IQnWRAdhYDcfRbCSLJNXB5PIof7ARFm283i82ixjhGNsV9eoMSCW3bLCIPqGmf+ROeM6jenMak6U4gOFw0qA1qZvYUXJSUqgqA2eQ5UEBSNp+5NBph5u2SSFxovV04H/0AGc8MUTBwns/1CI/pbF1VwlMOhsA56ZsjGiRRGpF2QD7tSWSHelHp7ltz7AOB+RuZrOV7jjC0ZNGa9ef7Qb6fKAuC+fQ8K9vdiRbWSUZzqJp+5OlUB+0ksHgl/1hdmgNI/JcabHICSrIzHE26UgeXjye1BbMfTY/1JjaVmLI7nluCDf4MMD9cEQacCEyQGY9h4hM/xCuT2LhjA1aXHSE4MbN76ByhER4c1UqY7tYtiNBzZFPlFw+IrFfJloFeDU1Pl4Ww3IfCHSqVIDG766jmAor1RZTHZYXnNBdwtBOZ30KI8eLREVfvvgD8wIVT2XS/Jz+H2ZVjYQwMs/aoViBDvRUJk4YcaC+fQYDNj7/MvaQ8gRIfJM2kWKcxzTYwkJRFnXORbfiSiXr4Z19wf0FXCe0sDS2zo1IAfSjyrthe8WgiWrfR7YgPNDhOh+BiV2ky5c3wpcpe6FUNiISb0RpLp14baD8u/q1B5PFd+KLRhJELOzw6s1pJalmqZQaviPFpgfoDOYzGLjs7iXddUn/oIPIU6MrdRSAdgYiwO4yDUbaqBqheLw+v3Hm9+OaTbrxJNcu0FuBMi9JgueMxdWEjgYZyPByf7xJLIknx21eccpragdWD7XH5r1UlyhVe0ZW5ioyqScTxK4/JI91i/pNr6sSPaTGSg6lMSGYrUllc++BhhXVyZJNUAUqV7bEaMIlHDis1ZryKyk2vAHuFbtC+ddYzYZeqzwIQ/EF3zuR61cibphHK1hTyplqMCwKJbIton8EseBStgWeFvz4XTrOMd2TeghncK3cuNEYXs2qGE46Rud1FTYVXv85TnGzD1fsi5d7kN2noUf7So4bAKVGSbKZMB8ug3nQSVLx1f+59J8vaWxyjlviu4zzTd1m3CfUEh6+9zAklrUp827MxUqUiPBPWpeQR7Xw5f2tQ6t6FpnM8nTla92zhOyy5qzn2BUsKfA8xpgU40fbuA5vS0BfDBNvchl3Uco9tLaC6aif+FzU+qJetGx+TCmDmp5sri3PV4nkrTpj956OR3ZS0pvGx7hyhke9He9gEeAs07X5YIhSnmJXkbfYpQ5yUcfnj0w+26tbrJVlQg5PYbucChFH2LmB8PBtSMUCGtFXI9Mc+16++avX3TINleeXpTmU7pKwcs3P6wyHgl1HvMelEyEyWwrq6Q3w71SS+CatyYXv/UZR7eu0xjm8dkG4ub9JaPBKq8bzsjBXCEUGkjREdmIZgozVE2kCwaVzzB2ohdTeo+Uz+Jp9baFklXi64ASdLbmuXQ6O8cG8gW+Us6i6Dwjd5Ejlyo2z5qdJN08ENKbr65XahobW4J1S4/2GC5S+dVLhL+6GW9k9H+2qKcEiDFte3a+BPKkHF9t/gOhKFb1GU/Pbhgyuix5PZc2JTiy2F/rUsmdJg8kGRBJVmiluBZCEhtW2hKwT9e9Z/dQAFBYf95xsBCWdbG4eInRagwokEeya/WjR0y6y0KmoEOAaFJexLZyl+x6k+FGsJV8MVEyPGxrKRUo/lWQ0duJM9kAF51pZ0W5wFuc6tYePnssVv9/J16w5jiPHdwg5zb14fmNP0Xwdi2Pn93Y/0014FGcFMjfc4pDQtsvDtGbQMMk4WBMRXGbW7A4yx0lQeu8uGKMAgfqbEiIQd9imfHOUDIOWXNkowNJNfoQC1m80TbsTYsbEpMHn1Ov8RhHQS4p3Toil+fjMI/hqfVxWeuh4ls+i5ThTOU79WvgAczZDWr8RiUk7NtuPpINQ7RDdVawKtCUc/YM11usMo9/NkYnZNrnP40F7XJKfUNxqMjefXEPy0iPLfkDhbEJcC3S7dI0n9jpS22Me9cyg4gX5hBUY4PdOZ5gpIeO/T87SAGewU6b+Gl2IwiExjFHU49LTOVZ276E5rC3nQBYTJ/Q7HAk52+vdeQyC4CpKiaq/+XDFKFaBNMQQEm1u4ZodIsLBwRetJrEsAZselzhj3P+5JT92/RK+wltI5X4ctYPz+a8pWS6zuISjDMKuuDVzGWGDi6nHYAPjVV0y37qNDaSSafmIIzbTuAduN4BkMhUmAm7GbxNgYH2x1DNYjgvhLgX+CRvhBgYAWw9L5TJn6N+MG3Y1syx07JpLY2Pj/w22JVWGCql/3dl5+lcIJsHq73+T3jupZBdPogxg0CaCnOcXm91zs568Psgqy0/jsuxMSNTM6fvT53XMfvWYfw/NDT38uJFbP2nH4ANxP4M6XdUWkg7Z2iwGUn6l1z5vGQA6XyFWmZmZoA2aKxElz8epmB6xwxO4B+5RE/EOD68+Etd/qT82c1GZt86DVcXFlOaOH5IJm42jT38PfElooUVnMDHEBtIAGOihVw3jMFegWG5MkiwvQJ+ZsgjReVSg5TTytWPEa17GirswD+xefeE4lKGoDVUgSSCc2n9xTWrLzpiD0MCX+OQHKVKZuH1jt3YEazgvLIJQcdmj9I/coD8DkKX7UJ7aY7q10sFeCWUHUoQYqgBeFWsN3medVOTVtvTg8xLbylv4z4DmvMrzHW5rf7yTD9YUENeda+wNNTf9TMiwsQMLPEl6PRTgso+3GWWtO61cN2JRZ+/9P7sXLmEOLLO5hP0Fz0PsV/gIQdxy6bYbGpOcR/YURcOzoZ2ssjaGcqvB1vQgtmAXMJqwCrL+PqD5InhpNRikl4lb/Ew8iCShp6g6/l0nBF/oW7AHAbdFYF+cH55gE6Hax7JLN/kF/4t7zi6MsIpL9HzG8KHMQ+5MyWjv8jTi6UgE5U+0R7P0xjjKmFHF5Jf2tyr0I0F4iJ+P9Q3PcShcKo7EBrkZudtsIbfosNPX55m5u7u+bVqMqemznd1ozpIfl3UUNEt3A3lJlF8E8ugwyIpT19g+LZ+xZAiP2qe5P348MFnGe9lWyUs7NncSztLyUYCt9lIhZuZ7n6rntNZkCTgb3bnSIEB2JEjO5CfXqQc8Xvsc5vL5vSdELgISOhkTEVc4oD33TaysNNYr1XJ9ZH+RiN6YtWVcQT1xnybKMs60nuetSJmkcqwj/0THWqcKxb3yGo5GuRezlmnvvxr/k+7NVs7vdn7qN+DPle1pkHj7wQLQJOergeT2qvJNVKfLgLiuujKQKlJ2WjvWvaXfiPh1RTwmzSzGDfO8QYQtZfFcehEKvYfBr4lVa1nBW8GuU0CSTHOhTvkoIM2bP7elToXGxImLMpNzRgHnWrCpig8wUjsEoCl5HsQm0e+G4ySZPvDxfO0Kv4pp8fddODcZtZGUNleUEyHZHJB//7xtaCKxu2k2wLa48C4ROOoFsL/+FRBdP3yJipxwbMoplHeE50ln65Wc7l2QxofAt8bO4gP7AEhWHRZB/XxS4nFzBq6hpsYDJdfedzokVPqHxKjAhiHwsMmY80n+UG2FKwfYfJ6A7AncMA1+ygNp02j1nPaViSNckYhrSyjdTRWgHK6bHNFLVF5m+4QHEZy8sZTyp8GuzX8Mz42vuOwj17v29Dwoopn6k9eQetyc5jJX9I7RIdbmo3gjUeBt1K607zwG/ifeh6wVxSOMN/wqilN1HIrQHLZVaLEIjZlVfZMKUUTiQvWJCfKaTRD2qkvq8M/umcqgOIMDH86H5Q1+Iy+vb+fkcg5cpuFjkceHGmmAREhJsRCpL8wU0aGEQGRgnpw2IwMGRDidHgsTISomOudcCh/RMsg86+H/Il5OfjEM+AraPPw5FwP6/Pl9IYEa8ezn4DXNq2twqwpYoNqoubPVz88XmwmOQpQ5K5YuX2K6ETGlDz9E1FEObkhmtutugAC9QtjTG91RTggf7cWhBS9pvDQN1J9deAxvKDWC8iTgdpDi9ouipKTv+cFYWFcf+8S/LpcDwu05QBBhMPkTdKGw/5P+dq7b3RC6XHAAAhpyzkvOyM+QNAglkgtEUSKz+qQmOwnCc+67hnz0oU/jav23AuGMmodVqsgXWUakpIeoAI2fmW9Mu/xiRcxxvNLkz4MFVD1Y82HYp7gZGawxn+2KA2XPqrNQRUOmpORfdb1eXEOgSpoVqE9OkiWZu1wzZtcbDwwsdoiPt2vMsu+TC8XsuaBKLvUSGqMPFwqs0w0fF/kjv8xx4XEywpATfLtQBz/se0j2jMaviZ9y0u38mNbcP/H0wjjpJw/jYlMc9aVTtRpUU6I4p2Cr7SxvdM1to78m/tf9N7rG57LQ29eLdajPYga4A/+INly1KxchLkwcQmTLUSSeBMMEplZWlodtu1BJ4GtzNmkmivE9HUpq4k6gOPJeH30w8UEAn0MuVNIYODlJ3n7XCf5n9Ua066W3NqjM/VYqrM3Uw3pkpUpD/o62duJA3EO+K2LhwP1FnoH9rCvxGIBwOI8kt9wgmSBFG7gsaijDYPYjsaOfwH5qMu4TThsfT8MUQNEO17sMYptZtrOVME/T6Undj8YbIqsUcv8ln5zzZUUPvI47S5lNNUH8xdvqy655Nq5oG9oezc6/rRUE+93+4dU6vQ9EJMFNRIlpEeZRebY8yGIkuWUZRxb515XrroeN2sZIe/p6lWTZP46SdnU6537HyxvXwaoa5Z9BSp85ppaoqjb9p2H1+AKz6VVIpobyoAeJkqqIPzT4AUSGo6oMMtlMD0jYmc62AptBlnUaQFf1g1SRyKehTveSh5mAQ0K987YYanW71h+FaxCucqm0gAWZHFo4UPkWKclI0G1BTQMnnLeQxnD2vqrD3I0Pzs7Zg02W8wvYSCSd4WkQrwUrG1EcCOZNuIkLlINMG7lkuQ32A+04Kb1TlazwnuCzH7GDByN8MalN3IP8AZ/xocgS73h4Ji/113nvJGq8ksgRz07L8tiABZSTvvhk38pMh7b5sUjd7KIxWzpcfslq2GIAk0AHXqEFp06cAe66z3FrMcNUW1mAb0VmniPi9JzmT1jhbhSMYs1Gi0vMaPlkUtW7l1Vne1DkLORzQm7xx6nBnE75+JWXnX2dx0JStgizRw176sjpVNUmYkDEl5IUn0bBwJUOJ7R2PVKNmNePO9ZCz4OgcisFw2salJrXZ9jNLUZ0yc+9ha9m+7HYwLUvCh8eYptqN2ADWd+5AB7hHLpqZq90lzzY30cLxu007pw2A3FKyOF6h8kFkwLnRPgFxGuxzG3faZ0udbIUSTIcfvwJbK5iMdC3k/RTIpoohxpptDxUy3kAnI/TIIztWJjAPYO32qQm784mydHN+x8QDthmOaG4JiwHXRrLusUFJwwsRFy81rYLU0zTHxr+1E1Rt3YUkAX8FJJtFN6lJS1bk4/21N7bSXUVcULi8xW1UnZuvjMLKz6M6CES7UlvW8VPr5y7ZTXeehlxlFvfrMFhqvs6GtekcFyAB27R7ycTQpR+tT5+LMq5E+hYozE8uSQfTSS22rhxyyWweuZ/PbcZ7cye+m5IhYQL+cLmJzpD4FLfE1Rgh4j7J5JLAey3/fSj4CGtYcGt3vg36irTbcU/GRMe8CGRfv7NRsFaIs4nh2FeIaafuRkaG3J9Q44b3caEw9/oj8eF/2CuNREHyXIhhQDF3skAsVuiSXeVdOe5HZjLA0gkEh94INbtg1h+2funjOkQt9QEqK5isCmyy/NL1LedkfFNuOh7VY1jukJkmqPhtzCRmRnKvI5rhZdCYbSc8BMHNo4t+h3OEay2l0uMZcLB8qnnYs+iASpMFsO8/2IFGLcWdPAupavJ2Utk8gYswk4c8ehBvVifFk0jVyXMoFVIC2ysqg1YeT5RQG5Rk11AGEHd8cHvOFbYF+SlqmDOU9G0CyPvndgfS9ZwzezPvdA6ukneV975gDqUXfeHzluyo9Nei4QhCvpviGDlbALtsJOSRB/5uXM3mBFLueEWwQJLZi/dOor/b2edO6r2G1jeOD728MH3P8PJi4kh+C/QfioGgs7uXGWOeeqkurAiidst8IqDe2Dlu/2/uVFpcC7b8jA983O7iZ1aOoIYGk8GsFOs9+V7bzAsSJDmQuyj+UKeg9o+uI2BnWGVur9XrQBzS1PdaRB5RBIQ5mynJd/VoRIFUCNPk19lzHigjtfrztOa2w4BLzZwLCxyc7IWHftdM2R01i6gg2Df3iG80b455UPufDqmBafM8IPfQXUhNvNxN4t+CIRNpCLzlvicTFUg0SHbKCdpJc5NZy0/XlktGjsnj/ViE40NRZtGuipjQmCJvoz52+7D7pEFAB/ntRrjycibAEjJ1nfxr4b4qawlDpwhH+OFNrw7FGQl9M/2F4D9EfZu5t/brM7cLAL4pL7ExTdYVD5tOUCJ7ITW3ar8Gmc7X89N+A5wz1n6lmSgeAdGTqd1wrKm1pPGxgY4E8U8IwF9kubEQ2YjncCWyBCoskTpNgIpxG0XcGhAlkLm6HxI1tmjod5eFoQK0gr20xk6FI/idLWFLxYL5Omq78g0h6vJxfuHVkJJevX3Ql8wHqgkyG6XzwCYTJxN3VbU4MhOiFcY7VwqqOiwgCnK/lDoX2DDYEghdUDUJgTNqwpbB4naGBy7S/r/Yke7oHkbvWsjMNhLFjSguLUD6hmb+FoxCq4BN2nMV/MWTZzTvO+BD3/7niTyNyTWLYyn4B024ec9KThlXAPh19f1OZzu63WgCBg58iTnsr6LvD6jlZX+TCGDcv97VcOIUO1EKmTHj/mvFyavrsbOxmXMgTj1En6r4g4dRgVojbGoIY7YaCPyBYursR3qU75WrfbQugPaQ4aBDtljtuwoI9SBsIXVc0WPOayvMgzwYm3wWGbeOGZEuV9f+cJFwMG4uiuNY97Crl/Hd0oJwelQQ65WJWIJuhV6kt7I+0sHCVsDqEQzrG+HlR0gN8AHM5co+cNZZfR41g3lmxClcl3VdxmhIenDFsHY1mDbkbye5AxyP2zt4v6XFLkVbvK77aFFQqWRu9JzuVlpLGpZuxHSbwN79EHVgm24SgHpPMzfu9wL6vPQm5jpIsrXw2BgaR+fB3AFMWwKSin92HpARQ0WuJKTU1daesrnGZKEg2yPYTVSXa5CkUyvCGB+uPKXQMuTqVuJIBp2+HiAGvLaz1icOP5Z5/c8bObaMNvhim8MiT2oy/RCHPVVR+8IwHQ5XUFG3uJvvjwPw51FxyPGUzbiXGe8fWHlrU2kqlOFX2s4hzH2yko1LB0MBibI/ejh/5l5qdueL8bEhvt3uMedQTCiVm+hnds8HDXDxst+KAKYs4cMggcQVWuv1AjYSRqzQ1KIEn6wGQ+W94KBqqmoTVF1ShuB9w4Bae1nt6dOfb4yUHgVkrnx/6YTdmHyvyoGXEq2e0LS2EAfK+dbs+SuUM0/IhGr/cbCP8pJjsLRiYRRzyav0lzIB8P8H+DO1AEM+1hNUHoEgFBLr0dxk49EA5vOcIa2tumQcstFa9JNT0+Xvuct0uPeFAqJ5I25TE6FW4h/hBulINBBkX9B9pPLINw1i5hgAjOxJK2wf4FExek/bax12zhR4KXVGG6wZGNp3Mmeq9F+7+gFLA/JvPs9RtvJiHc6Aaxayb4xvAUc7UHRt+bhdWTamS03U2KX3NNrv7vZ2YnLdEcmToQTgHj22q2/RnAaRcMMeYAFTqt1dRZa0mfXRyf7J1ikedba4TZzYSqsW52SrEOtngGMsxxvWRElCL6Gq+1Sq+m9Ah1sXdjIf5R3BqMRIWxNL+uTNpDG0I1kh6mncsqrcyl/oCOJfCJfymltXVkBF+k568Swi1J9jeCic+raJ0AvomEJIAw+zOoNtbbQXMjW+nPsn9vRgo8Xt5c7gN1rx0+VuUlb15c4cTQ318YrEFBvXWFOv5zmWxUq47dVgoXWCGnzc/P/v6GVBHVFZvMtPnZB5Nv9u3Jc6MJe52tgl5A60nCkR/8EcQcI82f67DSblWgz6m0+7uTkC5Xyt3NESDf3oZgRh8hCkFMRTEsPzPzvNKBk78fQ9A4se7kBg77iatLHVeOWo8udGKOi1z9s8hqNXf2cuxu0or5G7X7uWj/4l8OR4WiA6mxJx7g0jUYhnG5oRS6nWn+3JgW5U7QAapH++HCmMByWXYOhj0d6WSv87m3ZieUEDY3N1HPhAYKGXcWk5SicHCcuiZftHvcG0EZ/yy5ODrI6mCeiSIL00rMcrsQKhI6uMu4qfe2cirPaCn0CbDaAd+on+0wesBuJyHrx/+g19ElfimnZZrgXHB1bMg1kYN8IReYZO97y9zjWME50ASSfIjfYn0m7sabL4WbKYEYrNrZmtND2V5k221uvQCPQnbaodu1Wsj+vpSLKc1fEG5o85eFU4O8TQxleFlz4wagP/ALIJSo8hDm0ZVgmJoQq/AZWXULJHcY5AZ58sjmIGan1Jn1GGUqXyUkU/P2lDJcmq8vrwkyO5o7mMdd7Sq29K8D+BZpTr3UjtsFQtjOqSJOydh+cYvm3+KRD5vAUIM0v9TW2Ii60MMYWA8Icot1rKAABr1LN0PZd04kiChdAtguzx4r/1KTLYkHw2Avv/w8BZ1NzMEoxY3bPAfgSGOEUwiYFkM4Pn6rcz+vLpNMRsBa3ls91KYTSTyDVzNT2OJZ/09WWO/l4IhOowdfbsy8OQ8ogLCtzfVHb8p6KIETnGo0Y9O259wHqJsjy1DFf4kiWWm5gJdWmgph/6Dm+SInGbx7DheNlom691n94VexgKxHuEZU85goSTDUY//sQsh9x0KUdAPIHUWxr/YIFqMe5MSpn9Hga5rf5nch8sIGMbL5C+tPDYMqmZP5f5M6+bIr0JSZSQW0+QX+03EfZ8q5fCk/iB+47MXWUOv6Xx8JGCcUP/EWKEI937z1ixHoAbp3mAAAAAAAAA=";

const CHAR_PALETTE = ["#FFC400","#C13CFF","#00D4FF","#FF6B6B","#4ADE80"];
function getCharColors(characters){
  const map={};
  (characters||[]).forEach((c,i)=>{map[c.role.toUpperCase()]=CHAR_PALETTE[i%CHAR_PALETTE.length];});
  return map;
}

const BODY_PRESETS = [
  {label:"— Select reference body —",text:""},
  {label:"Expert Confession · 11,247",text:"I spent three years thinking I just needed more discipline. More kale. More gym. I had a PhD in biology and I still didn't connect the dots. The reality is this: aging is the root cause of how you're feeling — the fatigue, the brain fog, the skin changes. And everyone has deficiencies when properly tested that nobody ever told them about."},
  {label:"Dialogue Reveal · 3,400",text:"— Oh my God, that's your mom? She looks like she could be your sister! — I know, everyone says that. She's 56. — What's her secret? Pilates? Surgeon? — No, she literally just used this AI thing and found out her body was aging way faster than it should have been."},
  {label:"Expert Authority Bridge · 1,247",text:"I am a professional longevity expert and I've spent years studying the biology of different people and how to apply the right longevity protocol for each. But with this AI scanner, anyone can do it in just a few minutes."},
  {label:"Personal Transformation · 440",text:"I'm 51. Ten years ago I looked older than I do today. I was exhausted. For years I had this low-grade fatigue. My skin was dull, my joints ached, my energy crashed by 2pm."},
  {label:"Romance Drama · 211",text:"Last night was— I know. I should tell you something. I know how old you are. You know then why this is complicated. I'm fifty six. And you're thirty. I could be your mother."},
];



const loadHistory = () => { try { return JSON.parse(localStorage.getItem("hookbook_history")||"[]"); } catch { return []; } };
const saveHistory = (h) => { try { localStorage.setItem("hookbook_history", JSON.stringify(h)); } catch {} };
const fmtDate = (iso) => { const d=new Date(iso); return d.toLocaleDateString("en-US",{month:"short",day:"numeric"})+" · "+d.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}); };
const labelOf = (list, val) => { const o=list.find(x=>x.value===val); return o?o.label:val; };
const PA = (a) => `rgba(193,60,255,${a})`;

const SYSTEM_PROMPT = `ROLE
Performance creative director. High-converting short-form video hooks for paid social (Meta, TikTok, Reels). Product: AI longevity app for US women 45-60.

PRODUCT
AI face scanner: 60-second scan, biological age estimation, personalized longevity recommendations. Funnel: free scan, landing page, web subscription.

AUDIENCE — US Women 45-60
Fears: losing independence, sick at 60 sedentary at 70 dependent at 80, not recognizing herself in the mirror.
Desires: crushing it at 80, vibrant independent future, personalized protocol, mastery of self.
Frustrations: doctor dismissal, generic advice that doesn't work, information paralysis, doing everything right and still aging.
Identity: I'm not accepting the trajectory I saw my parents on.

TOP-CONVERTING HOOK PATTERNS (real purchase data):
1. FEAR/URGENCY+AGE — If you don't want to break down after 60 — 2,209 purchases
2. STREET INTERCEPT — Expert stops stranger, provocative question — 1,811 purchases
3. AGE CONFUSION DRAMA — Mom mistaken for friend/sister — 1,347 purchases
4. MENOPAUSE DIRECT — Name the thing nobody discusses — 1,214 purchases
5. CONTRARIAN REVEAL — Doing everything right = aging fastest — 1,109 purchases
6. AI INTRIGUE — Short, ominous, no context — 732 purchases
7. DOCTOR FAILED ME — Nobody told me what was driving my fatigue — 629 purchases
8. SOCIAL PROOF DRAMA — Bar/party, public age confusion — 617 purchases
9. EXPERT CONFESSION — Expert who didn't know until biomarkers — 11,247 body
10. TRANSFORMATION WITNESS — Change through another's eyes — 440 purchases

CONSUMER LANGUAGE — embed exact phrases:
Longevity: biological age, personalized protocol, aging is modifiable, wake-up call, sick care vs health care, reactive vs preventative, generic advice vs personalized, epigenetic clock, biomarkers, information paralysis, crushing it at 80, I'm not accepting the trajectory I saw my parents on.
Women 45-60: it's all in your head, your tests came back normal, welcome to your new normal, I've become a shell of who I once was, like a light switch full of life to no energy, my body changed overnight, brain fog, belly fat that won't respond, rage that frightened me, BAM I got my life back, menopause is inevitable suffering is not, aliens replaced my body with an imposter.

PROVEN HOOK EXAMPLES — study wording, rhythm, length:
Fear / Urgency (2,209): "If you don't want to break down after 60, watch this. There is no secret."
Street Intercept (1,811): "Excuse me, mam. You are exactly the person I was looking for. Can I ask you one question? — Yes, sure. Go on. — Do you think most women in their fifties actually know what's driving their aging?"
Age Confusion Drama (1,347): "People always assume we're friends. Then I say 'mom, let's go' and they lose it."
Menopause Direct (1,214): "Nobody talks about accelerated aging after menopause. Hear me out."
Contrarian Reveal (1,109): "Women with a non-standard biology often age faster as a natural response to marketed miracle cures."
AI Intrigue (732): "AI is honestly getting scary."
Doctor Failed Me (629): "Nobody — not a doctor, not a trainer, not a single wellness brand — told me what was actually driving my fatigue. So I ran the experiment myself."
Social Proof Drama (617): "We were at a bar and a guy tried to buy us drinks. He then hit at my mother."

FORMAT NOTE: There is NO single primary format. Studio Two Experts, Street Interview, Talking Head/UGC, and Drama Dialogue are all valid. Pick execution details from the format requested and ground every choice in the proven examples and consumer language above.

CAST: The cast is assembled per request from a MAIN CHARACTER, an optional SECOND CHARACTER, and an optional INTERVIEWER (off-camera voice or on-camera host). Build the scene only around the characters provided. Never invent a medical professional. If only a main character is given, write a solo/UGC hook. If an interviewer is off-camera, they are a voice only (not in frame).

STYLE RULES:
- Short sentences. One idea per sentence. No filler.
- Specific ages and numbers outperform vague claims.
- Dialogue hooks end on an unanswered question or a shocking reversal.
- Solo hooks end with a pivot: "Then I did this instead." / "So I ran the experiment myself." / "Hear me out."
- Never write how a marketer talks. Write how a real person talks.
- Reveal characters through what they believe, not through introduction.
- Contrast visible from frame 1.

HOOK LINE vs DIALOGUE:
- hook_line = the first 0-3s. The scroll-stopper. Either on-screen text or the opening spoken line BEFORE the scene unfolds. Creates the emotional question.
- dialogue = the exchange that unfolds after, revealing the conflict. Dialogue does NOT repeat the hook_line. Hook_line poses, dialogue reveals.

PRODUCT RULE:
- DO NOT show or mention the product, app, phone, or face-scan inside the hook. The hook only establishes the problem/tension. Revealing the product early kills retention — viewers detect an ad and scroll. The product enters only later in the body.

BODY CONTEXT: If a BODY SCRIPT CONTEXT is provided, write the hook so its final emotional beat leads naturally into that body's opening — the hook must create the exact question the body answers. Do NOT output a bridge line or any reference to the body; just ensure the hook connects emotionally. If no body context is given, end on a self-contained open loop.

COMPLIANCE:
- No medical claims, diagnoses, cures, guarantees. Use: may help, estimate, indicator, biological age as a measurement.
- CHARACTER TITLES — NEVER use: PhD, MD, doctor, physician, nutritionist, dietitian, nurse, therapist, or any licensed medical credential. Characters are civilians or "longevity experts" / "wellness researchers" — people who studied longevity as a lifestyle interest, not licensed practitioners. The product is not medical and gives lifestyle recommendations, not diagnoses.
- Do NOT frame any character as competing with or replacing doctors. "Doctor Failed Me" means the system was slow or dismissive — not that our product replaces medical care.

VIDEO PROMPT (most important output field) — "video_prompt":
A single production-ready multishot prompt for one ~15-second vertical video. Universal — must read cleanly for both Kling 3.0 and Seedance 2.0.
Structure as sequential shots using markers: [Shot 1 · 0-4s] [Shot 2 · 4-8s] etc, filling the full 15s.
For EACH shot specify, in this order: camera framing + angle, who is in frame, the SPEAKING character (explicit, named), the exact dialogue line in quotes (verbatim from dialogue field — never paraphrase), facial emotion + body language, and any action happening between lines.
Keep ALL dialogue lines from the dialogue field, word-for-word.
Enforce the 180-degree rule: keep consistent eyelines/screen-direction across shots (state it, e.g. "camera stays screen-left").
UGC realism ONLY: handheld or static phone-camera feel, natural location/indoor light. FORBIDDEN words: bokeh, golden hour, shallow depth of field, cinematic, color grade, halation, lens flare, film look.
Do NOT show the product/app/phone-scan.
Hard limit: 1000 characters.

OUTPUT: Return ONE hook. JSON array with exactly one object. No preamble, no markdown fences.
Schema: [{"id":"H1","mechanism":"","pattern_benchmark":"","format":"","characters":[{"role":"","relationship":""}],"hook_line":"","dialogue":[{"speaker":"","line":""}],"visual_action":"","video_prompt":"","consumer_language_used":[""],"duration_sec":15,"emotional_anchor":"","cta_type":"soft_stop|curiosity_gap|direct"}]`;

function buildUserPrompt(f, used) {
  const avoid = used.length > 0 ? 'Mechanisms already used — use a DIFFERENT one: ' + used.join(', ') : '';
  const main = 'MAIN CHARACTER: ' + labelOf(OPTIONS.characters, f.mainCharacter);
  const sc = f.secondCharacter;
  const second = (!sc||sc==='none') ? 'SECOND CHARACTER: none (solo hook)' : (sc==='interviewer_off'||sc==='interviewer_on') ? '' : 'SECOND CHARACTER: ' + labelOf(OPTIONS.characters, sc);
  const interv = f.secondCharacter==='interviewer_off' ? 'INTERVIEWER: off-camera voice (not in frame)' : f.secondCharacter==='interviewer_on' ? 'INTERVIEWER: on-camera host (in frame)' : '';
  const body = f.bodyScript ? 'BODY SCRIPT CONTEXT (hook must bridge into this — do NOT show a bridge):\n"' + f.bodyScript.slice(0,400) + (f.bodyScript.length>400?'...':'') + '"' : '';
  return ['FORMAT: '+f.format,'MECHANISM: '+f.mechanisms.join(', '),main,second,interv,'LOCATION: '+f.location,'TONE: '+f.tone,'LENGTH: '+f.hookLength,'PAIN POINT: '+(f.painPoint||'not specified'),body,avoid,'Return ONLY the JSON array with exactly one hook object.'].filter(Boolean).join('\n');
}

const OPTIONS = {
  mechanisms:[
    {value:"fear_urgency",label:"Fear / Urgency",badge:"2,209"},
    {value:"street_intercept",label:"Street Intercept",badge:"1,811"},
    {value:"age_confusion_drama",label:"Age Confusion Drama",badge:"1,347"},
    {value:"menopause_direct",label:"Menopause Direct",badge:"1,214"},
    {value:"contrarian_reveal",label:"Contrarian Reveal",badge:"1,109"},
    {value:"ai_intrigue",label:"AI Intrigue",badge:"732"},
    {value:"doctor_failed_me",label:"Doctor Failed Me",badge:"629"},
    {value:"social_proof_drama",label:"Social Proof Drama",badge:"617"},
    {value:"expert_confession",label:"Expert Confession",badge:"11,247*"},
    {value:"transformation_witness",label:"Transformation Witness",badge:"440"},
  ],
  formats:[
    {value:"studio_two_experts",label:"Studio — Two Experts"},
    {value:"street_interview",label:"Street Interview"},
    {value:"talking_head_ugc",label:"Talking Head / UGC"},
    {value:"drama_dialogue",label:"Drama Dialogue"},
  ],
  characters:[
    {value:"longevity_expert",label:"Longevity Expert"},
    {value:"wellness_researcher",label:"Wellness Researcher"},
    {value:"ugc_woman",label:"UGC Woman 45-60"},
    {value:"botox_girl",label:"Botox Girl"},
    {value:"skeptic",label:"Skeptic"},
    {value:"wellness_coach",label:"Wellness Coach"},
    {value:"mom_50s",label:"Mom (50s)"},
    {value:"daughter",label:"Daughter (20s-30s)"},
    {value:"best_friend",label:"Best Friend"},
    {value:"husband",label:"Husband / Partner"},
    {value:"stranger",label:"Stranger (street)"},
    {value:"celebrity_guest",label:"Celebrity-style Guest"},
  ],
  secondCharacters:[
    {value:"none",label:"— None (solo hook) —"},
    {value:"interviewer_off",label:"Interviewer — off-camera voice"},
    {value:"interviewer_on",label:"Interviewer — on-camera host"},
    {value:"longevity_expert",label:"Longevity Expert"},
    {value:"wellness_researcher",label:"Wellness Researcher"},
    {value:"ugc_woman",label:"UGC Woman 45-60"},
    {value:"botox_girl",label:"Botox Girl"},
    {value:"skeptic",label:"Skeptic"},
    {value:"wellness_coach",label:"Wellness Coach"},
    {value:"mom_50s",label:"Mom (50s)"},
    {value:"daughter",label:"Daughter (20s-30s)"},
    {value:"best_friend",label:"Best Friend"},
    {value:"husband",label:"Husband / Partner"},
    {value:"stranger",label:"Stranger (street)"},
    {value:"celebrity_guest",label:"Celebrity-style Guest"},
  ],
  locations:[
    {value:"studio_interview_set",label:"Studio — Interview Set"},
    {value:"podcast_set",label:"Podcast Set"},
    {value:"nyc_street_park",label:"NYC Street / Park"},
    {value:"gym_fitness_studio",label:"Gym / Fitness Studio"},
    {value:"doctors_office",label:"Doctor's Office"},
    {value:"kitchen_morning",label:"Kitchen — Morning"},
    {value:"bathroom_mirror",label:"Bathroom Mirror"},
    {value:"restaurant_table",label:"Restaurant Table"},
    {value:"bar_social_event",label:"Bar / Social Event"},
    {value:"shopping_mall",label:"Shopping Mall / Store"},
    {value:"spa_wellness",label:"Spa / Wellness Center"},
    {value:"bedroom",label:"Bedroom"},
    {value:"phone_call",label:"Phone Call"},
    {value:"conference_stage",label:"Conference / Stage"},
  ],
  tones:[
    {value:"quietly_shocking",label:"Quietly Shocking"},
    {value:"tense_and_real",label:"Tense and Real"},
    {value:"raw_emotional",label:"Raw Emotional"},
    {value:"darkly_funny",label:"Darkly Funny"},
    {value:"expert_confrontational",label:"Expert Confrontational"},
    {value:"skeptic_to_convinced",label:"Skeptic to Convinced"},
    {value:"warm_authoritative",label:"Warm Authoritative"},
    {value:"intellectual_debate",label:"Intellectual Debate"},
    {value:"empathetic_direct",label:"Empathetic & Direct"},
    {value:"aspirational_calm",label:"Aspirational Calm"},
    {value:"relieved_discovery",label:"Relieved Discovery"},
  ],
  hookLengths:[
    {value:"short_8s",label:"Short — 8s"},
    {value:"standard_15s",label:"Standard — 15s"},
    {value:"extended_20s",label:"Extended — 20s"},
  ],
};

const PAIN_CHIPS = [
  {label:"Does everything right, still aging",text:"I eat clean, train hard, sleep well — and my body was still aging faster than it should. Nobody told me what was driving it."},
  {label:"Doctor said labs are normal",text:"I kept telling my doctor I felt exhausted. He kept saying my labs were fine. We were both missing something."},
  {label:"Nobody warned me about menopause",text:"Nobody talks about what actually happens to your aging speed after menopause. Not your doctor. Not the wellness industry."},
  {label:"Not accepting my parents trajectory",text:"I'm not accepting the trajectory I saw my parents on. Sick at 60, sedentary at 70, dependent at 80. I want to be crushing it at 80."},
  {label:"Shell of who I once was",text:"I've become a shell of who I once was. Like a light switch — full of life to no energy. Brain fog. Rage that frightened me."},
  {label:"Expert who didn't know",text:"I'm a professional longevity expert. I spent three years aging faster than I should have. Not one test, not one colleague caught it."},
  {label:"Generic advice doesn't work",text:"Everything the wellness industry told me — the NMN, the resveratrol, the collagen — my biological age disagreed with all of it."},
  {label:"Wake-up call moment",text:"It was a wake-up call. I looked in the mirror and didn't recognize the woman staring back. I needed a personalized protocol, not generic advice."},
  {label:"Studies contradict — paralysis",text:"I've gone off the deep end researching what makes a best life. But these studies always show contradictory results. I don't know who to trust anymore."},
  {label:"Hike at 70, think clearly at 80",text:"I want to be able to hike at 70 and think clearly at 80. I need a plan tailored to my biology — not a generic protocol built for the average person."},
  {label:"Prepared for menopause — didn't help",text:"I prepared for menopause. I really did. But no matter how much inner work, organic food, stress reduction — perimenopause took me down anyway."},
  {label:"Fear of the marginal decade",text:"My mother was healthy at 60. By 70 she needed a cane. By 75 she couldn't live alone. I'm watching that clock and don't know which side of the cliff I'm heading toward."},
  {label:"Not a statistic — need personalized",text:"I'm not a generic case. I need something based on my genes, my biology, my age. Generic advice is not just useless — for people like me it can actually backfire."},
];

const DEMO_HOOKS = [
  {id:"H1",mechanism:"expert_confession",pattern_benchmark:"Expert Confession body — 11,247 purchases",format:"studio_two_experts",characters:[{role:"LONGEVITY EXPERT",relationship:"hero persona"},{role:"BOTOX GIRL",relationship:"contrast character"}],hook_line:"She has spent more on anti-aging this year than most people spend on a car. Her biological age is three years older than mine.",dialogue:[{speaker:"LONGEVITY EXPERT",line:"She has spent more on anti-aging this year than most people spend on a car."},{speaker:"LONGEVITY EXPERT",line:"Her biological age is three years older than mine."},{speaker:"LONGEVITY EXPERT",line:"And I've never had a single procedure."}],visual_action:"Two women at a restaurant table. Expert looks composed, plainly dressed. Botox girl polished, glances over, growing uneasy. Contrast visible from frame one.",video_prompt:"[Shot 1 · 0-4s] Medium two-shot, restaurant table, natural window light. LONGEVITY_EXPERT (50s, calm, plainly dressed) looks to camera; BOTOX_GIRL (polished) beside her, screen-right. Expert, faint knowing tone: \"She has spent more on anti-aging this year than most people spend on a car.\"\n[Shot 2 · 4-9s] Tighter single on LONGEVITY_EXPERT, camera stays screen-left, steady eyeline. Unbothered: \"Her biological age is three years older than mine.\"\n[Shot 3 · 9-13s] Slow push-in on her face, micro-pause: \"And I've never had a single procedure.\" BOTOX_GIRL shifts, uncomfortable, soft background.\n[Shot 4 · 13-15s] Hold both faces, tension, no dialogue. Handheld phone-camera realism, natural light.",consumer_language_used:["biological age","personalized protocol","aging is modifiable"],duration_sec:15,emotional_anchor:"quiet dissonance",cta_type:"curiosity_gap"},
  {id:"H2",mechanism:"menopause_direct",pattern_benchmark:"Menopause Direct — 1,214 purchases",format:"studio_two_experts",characters:[{role:"INTERVIEWER",relationship:"off-camera"},{role:"BOTOX GIRL",relationship:"contrast"},{role:"LONGEVITY EXPERT",relationship:"hero"}],hook_line:"What's the one thing nobody tells women about aging after menopause?",dialogue:[{speaker:"INTERVIEWER",line:"What's the one thing nobody tells women about aging after menopause?"},{speaker:"BOTOX GIRL",line:"To start the right procedures earlier."},{speaker:"LONGEVITY EXPERT",line:"To stop guessing and start measuring. Those are completely different problems."}],visual_action:"Studio interview, two women seated side by side. Quick contrast between a surface answer and a grounded one.",video_prompt:"[Shot 1 · 0-4s] Studio interview framing, two women seated, neutral even light. Off-camera INTERVIEWER asks: \"What's the one thing nobody tells women about aging after menopause?\" Both in frame, attentive.\n[Shot 2 · 4-8s] Single on BOTOX_GIRL (polished, confident), facing interviewer screen-right: \"To start the right procedures earlier.\"\n[Shot 3 · 8-13s] Single on LONGEVITY_EXPERT (calm, grounded), same axis screen-right, faint disagreement: \"To stop guessing and start measuring. Those are completely different problems.\"\n[Shot 4 · 13-15s] Two-shot, BOTOX_GIRL reacts, short silence. Phone-camera realism, natural light.",consumer_language_used:["menopause is inevitable suffering is not","reactive vs preventative"],duration_sec:15,emotional_anchor:"recognition",cta_type:"curiosity_gap"},
  {id:"H3",mechanism:"doctor_failed_me",pattern_benchmark:"Doctor Failed Me — 629 purchases",format:"studio_two_experts",characters:[{role:"BOTOX GIRL",relationship:"empathy entry"},{role:"LONGEVITY EXPERT",relationship:"silent authority"}],hook_line:"I've spent fifteen years trying to look younger from the outside.",dialogue:[{speaker:"BOTOX GIRL",line:"I've spent fifteen years trying to look younger from the outside."},{speaker:"BOTOX GIRL",line:"She spent one year fixing what was aging her on the inside."},{speaker:"BOTOX GIRL",line:"I chose wrong. And I have the number to prove it."}],visual_action:"Cafe table. Empathy-entry character speaks to camera; the calmer woman sits beside her, still and composed.",video_prompt:"[Shot 1 · 0-4s] Medium single on BOTOX_GIRL (40s, polished, slightly tired eyes), cafe table, natural light, to camera: \"I've spent fifteen years trying to look younger from the outside.\"\n[Shot 2 · 4-8s] Same framing, camera stays screen-left; she glances toward LONGEVITY_EXPERT beside her (calm, still): \"She spent one year fixing what was aging her on the inside.\"\n[Shot 3 · 8-13s] Slow push-in on BOTOX_GIRL, quiet admission: \"I chose wrong. And I have the number to prove it.\"\n[Shot 4 · 13-15s] Hold two-shot, LONGEVITY_EXPERT composed in frame, no dialogue. Handheld phone-camera, natural indoor light.",consumer_language_used:["biological age","wake-up call"],duration_sec:15,emotional_anchor:"empathetic recognition",cta_type:"soft_stop"},
];

function formatForCopy(h) {
  const chars=(h.characters||[]).map(c=>c.role+(c.relationship?' ('+c.relationship+')':'')).join(', ');
  const dlg=(h.dialogue||[]).map(d=>d.speaker.toUpperCase()+': "'+d.line+'"').join('\n');
  const lang=(h.consumer_language_used||[]).join(', ');
  return ['━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',h.id+'  ·  '+(h.mechanism||'').replace(/_/g,' ')+'  ·  '+(h.format||'').replace(/_/g,' '),'━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━','CHARACTERS\n'+chars,'VISUAL ACTION\n'+(h.visual_action||''),'DIALOGUE\n'+dlg,'VIDEO PROMPT (multishot ~15s · Kling 3.0 / Seedance 2.0)\n'+(h.video_prompt||''),'CONSUMER LANGUAGE\n'+lang,'EMOTION: '+(h.emotional_anchor||'')+'  ·  CTA: '+(h.cta_type||'')+'  ·  ~'+h.duration_sec+'s',h.pattern_benchmark?'REF: '+h.pattern_benchmark:''].filter(Boolean).join('\n\n');
}

// ── Primitives ─────────────────────────────────────────────────────────────

function Logo() {
  return (
    <div style={{display:"flex",alignItems:"center",gap:10}}>
      <span style={{fontSize:18,color:GOLD,lineHeight:1}}>✦</span>
      <div style={{lineHeight:1.1}}>
        <div style={{fontSize:15,fontWeight:900,letterSpacing:"-0.01em"}}>
          <span style={{color:GOLD}}>The</span><span style={{color:PURP}}>Chember&apos;s</span>
        </div>
        <div style={{fontSize:15,fontWeight:900,letterSpacing:"-0.01em"}}>
          <span style={{color:PURP}}>Hook</span><span style={{color:GOLD}}>Book</span>
          <span style={{color:GOLD,fontSize:12,marginLeft:5}}>✦</span>
        </div>
      </div>
    </div>
  );
}

function Sel({options,value,onChange,isMobile}){
  return(
    <select value={value} onChange={e=>onChange(e.target.value)} style={{width:"100%",background:SURF,border:"1px solid "+BRD,borderRadius:6,color:TXT,padding:isMobile?"10px 10px":"8px 10px",fontSize:11,cursor:"pointer",fontFamily:"inherit",outline:"none",minHeight:isMobile?44:undefined}}>
      {options.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  );
}

function Lbl({text,sub=undefined,color}){
  return(
    <div style={{display:"flex",alignItems:"baseline",gap:8,marginBottom:8}}>
      <div style={{fontSize:9,fontWeight:800,letterSpacing:"0.14em",color:color||GRAY,textTransform:"uppercase"}}>{text}</div>
      {sub&&<div style={{fontSize:9,color:"#333"}}>{sub}</div>}
    </div>
  );
}

function Row({label,color,children}){
  return(
    <div>
      <div style={{fontSize:9,fontWeight:800,letterSpacing:"0.14em",color:color,marginBottom:5,textTransform:"uppercase",opacity:0.8}}>{label}</div>
      {children}
    </div>
  );
}

function GoldChip({text}){
  if(!text)return null;
  return <span style={{fontSize:10,padding:"2px 8px",borderRadius:3,background:GA(0.09),border:"1px solid "+GA(0.35),color:GOLD,letterSpacing:"0.04em",fontWeight:600,whiteSpace:"nowrap"}}>{text.replace(/_/g," ")}</span>;
}
function PurpChip({text}){
  if(!text)return null;
  return <span style={{fontSize:10,padding:"2px 8px",borderRadius:3,background:PA(0.09),border:"1px solid "+PA(0.35),color:PURP,letterSpacing:"0.04em",fontWeight:600,whiteSpace:"nowrap"}}>{text.replace(/_/g," ")}</span>;
}
function GrayChip({text}){
  if(!text)return null;
  return <span style={{fontSize:10,padding:"2px 8px",borderRadius:3,background:"rgba(107,114,128,0.1)",border:"1px solid rgba(107,114,128,0.3)",color:DIM,letterSpacing:"0.04em",fontWeight:600,whiteSpace:"nowrap"}}>{text.replace(/_/g," ")}</span>;
}

function Spinner({count,done}){
  return(
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:80,gap:16}}>
      <div style={{width:30,height:30,border:"2px solid "+BRD,borderTop:"2px solid "+GOLD,borderRadius:"50%",animation:"spin 0.7s linear infinite"}}/>
      <style>{"@keyframes spin{to{transform:rotate(360deg)}}"}</style>
      <span style={{fontSize:11,letterSpacing:"0.1em",color:DIM,textTransform:"uppercase"}}>
        {done>0?done+" of "+count+" generated…":"Starting generation…"}
      </span>
    </div>
  );
}

function Empty(){
  return(
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:32,gap:20}}>
      <span style={{fontSize:10,letterSpacing:"0.16em",textTransform:"uppercase",color:"#333"}}>Configure params · Generate hooks</span>
      <img src={LOGO_URI} alt="TheChember" style={{width:180,height:180,borderRadius:"50%",opacity:0.9,userSelect:"none",display:"block"}} draggable={false}/>
    </div>
  );
}

function VideoPromptBlock({text,characters,isMobile}){
  const [vCopied,setVCopied]=useState(false);
  if(!text)return null;
  const copy=()=>{navigator.clipboard.writeText(text);setVCopied(true);setTimeout(()=>setVCopied(false),2000);};
  const cmap=getCharColors(characters);
  // Highlight character names in prompt text
  const segments=[];
  let remaining=text;
  const charNames=Object.keys(cmap).sort((a,b)=>b.length-a.length);
  if(charNames.length===0){segments.push({t:text,c:null});}
  else{
    let key=0;
    while(remaining.length>0){
      let found=false;
      for(const name of charNames){
        const variants=[name,name.replace(/ /g,"_"),name.split(" ")[0]];
        for(const v of variants){
          if(v.length<3)continue;
          const idx=remaining.toUpperCase().indexOf(v.toUpperCase());
          if(idx===0){
            segments.push({t:remaining.slice(0,v.length),c:cmap[name],key:key++});
            remaining=remaining.slice(v.length);
            found=true;break;
          }
        }
        if(found)break;
      }
      if(!found){
        const nextIdx=Math.min(...charNames.flatMap(n=>[n,n.replace(/ /g,"_"),n.split(" ")[0]].filter(v=>v.length>=3).map(v=>{const i=remaining.toUpperCase().indexOf(v.toUpperCase());return i>0?i:Infinity;})));
        const cut=isFinite(nextIdx)?nextIdx:remaining.length;
        segments.push({t:remaining.slice(0,cut),c:null,key:key++});
        remaining=remaining.slice(cut);
      }
    }
  }
  return(
    <div style={{border:"1px solid "+GA(0.3),borderRadius:8,overflow:"hidden",background:GA(0.03)}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"7px 10px",borderBottom:"1px solid "+GA(0.18),background:GA(0.06)}}>
        <span style={{fontSize:9,fontWeight:800,letterSpacing:"0.12em",color:GOLD,textTransform:"uppercase"}}>▶ Video Prompt · multishot ~15s</span>
        <button onClick={copy} style={{padding:"4px 10px",background:vCopied?GA(0.18):"transparent",border:"1px solid "+(vCopied?GOLD:GA(0.4)),borderRadius:4,color:GOLD,fontSize:10,cursor:"pointer",fontWeight:700,letterSpacing:"0.06em",whiteSpace:"nowrap",minHeight:isMobile?34:undefined}}>{vCopied?"✓":"COPY"}</button>
      </div>
      <pre style={{margin:0,padding:isMobile?"10px":"12px 14px",fontSize:12,color:"#f3f4f6",lineHeight:1.7,whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:"inherit"}}>
        {segments.length<=1?text:segments.map((seg,i)=>seg.c?<span key={i} style={{color:seg.c,fontWeight:700}}>{seg.t}</span>:<span key={i}>{seg.t}</span>)}
      </pre>
      <div style={{padding:"4px 10px 7px",fontSize:9,color:DIM,letterSpacing:"0.06em"}}>Kling 3.0 / Seedance 2.0 · {text.length} chars</div>
    </div>
  );
}

function abbrevSpeaker(name){
  if(!name)return "";
  const n=name.toUpperCase().trim();
  const map={"LONGEVITY EXPERT":"EXPERT","WELLNESS RESEARCHER":"RESEARCHER","UGC WOMAN 45-60":"UGC WOMAN","UGC WOMAN":"UGC WOMAN","WELLNESS COACH":"COACH","CELEBRITY-STYLE GUEST":"GUEST","CELEBRITY GUEST":"GUEST","HUSBAND / PARTNER":"PARTNER","INTERVIEWER (OFF-CAMERA)":"INTERVIEWER","OFF-CAMERA VOICE":"VOICE","ON-CAMERA HOST":"HOST"};
  if(map[n])return map[n];
  if(n.length<=12)return n;
  return n.split(" ")[0].slice(0,12);
}

function HookCard({hook,onCopy,copied,isMobile}){
  const pad = isMobile ? "12px" : "16px 18px";
  const hpad = isMobile ? "10px 12px" : "12px 16px";
  return(
    <div style={{background:SURF,border:"1px solid "+BRD,borderRadius:10,marginBottom:isMobile?14:22,overflow:"hidden"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:hpad,borderBottom:"1px solid "+BRD2,background:SURF2}}>
        <div style={{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0}}>
          <span style={{fontSize:isMobile?22:28,fontWeight:900,color:"transparent",WebkitTextStroke:"1px "+PA(0.5),letterSpacing:"-0.03em",lineHeight:1,userSelect:"none",flexShrink:0}}>{hook.id}</span>
          <div style={{display:"flex",flexWrap:"wrap",gap:4,minWidth:0}}>
            <GoldChip text={hook.mechanism}/>
            {hook.format&&<PurpChip text={hook.format}/>}
            {hook.cta_type&&<GrayChip text={hook.cta_type}/>}
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:6,flexShrink:0}}>
          <span style={{fontSize:11,padding:"3px 9px",borderRadius:20,background:PA(0.12),color:PURP,fontWeight:700}}>{"~"+hook.duration_sec+"s"}</span>
          {hook.emotional_anchor&&<span style={{fontSize:10,padding:"2px 8px",borderRadius:3,background:"rgba(255,255,255,0.05)",border:"1px solid #2a2a2a",color:"#666",letterSpacing:"0.04em",whiteSpace:"nowrap",display:isMobile?"none":"inline"}}>{hook.emotional_anchor}</span>}
          <button onClick={onCopy} style={{padding:"5px 10px",background:copied?GA(0.12):SURF,border:"1px solid "+(copied?GOLD:BRD),borderRadius:5,color:copied?GOLD:GRAY,fontSize:11,cursor:"pointer",transition:"all 0.2s",fontWeight:700,letterSpacing:"0.06em",whiteSpace:"nowrap",minHeight:36}}>{copied?"✓":"COPY ALL"}</button>
        </div>
      </div>
      <div style={{padding:pad,display:"flex",flexDirection:"column",gap:12}}>
        {hook.characters?.length>0&&(
          <Row label="CHARACTERS" color={GRAY}>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              {hook.characters.map((c,i)=>(
                <span key={i} style={{fontSize:12}}>
                  <span style={{color:CHAR_PALETTE[i%CHAR_PALETTE.length],fontWeight:700}}>{c.role}</span>
                  {c.relationship&&<span style={{color:DIM}}> · {c.relationship}</span>}
                </span>
              ))}
            </div>
          </Row>
        )}
        {hook.visual_action&&(
          <Row label="VISUAL ACTION" color={GRAY}>
            <p style={{margin:0,fontSize:12,color:GRAY,lineHeight:1.65}}>{hook.visual_action}</p>
          </Row>
        )}

        {hook.dialogue?.length>0&&(()=>{
          const cmap=getCharColors(hook.characters);
          const spColor=(sp)=>{const k=sp.toUpperCase().trim();return cmap[k]||Object.values(cmap).find((_,i)=>Object.keys(cmap)[i]&&k.startsWith(Object.keys(cmap)[i].split(" ")[0]))||PURP;};
          return(
          <Row label="DIALOGUE" color={GRAY}>
            <div style={{display:"flex",flexDirection:"column",gap:isMobile?10:8}}>
              {hook.dialogue.map((line,i)=>{
                const sc=spColor(line.speaker);
                return isMobile?(
                  <div key={i} style={{paddingLeft:8,borderLeft:"2px solid "+sc}}>
                    <div style={{fontSize:9,fontWeight:800,color:sc,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:3}}>{abbrevSpeaker(line.speaker)}</div>
                    <div style={{fontSize:12,color:TXT,lineHeight:1.6}}>"{line.line}"</div>
                  </div>
                ):(
                  <div key={i} style={{display:"flex",gap:10,paddingLeft:8,borderLeft:"2px solid "+sc}}>
                    <span style={{fontSize:10,fontWeight:800,color:sc,letterSpacing:"0.08em",whiteSpace:"nowrap",paddingTop:2,minWidth:110,textTransform:"uppercase"}}>{abbrevSpeaker(line.speaker)}</span>
                    <span style={{fontSize:12,color:TXT,lineHeight:1.65}}>"{line.line}"</span>
                  </div>
                );
              })}
            </div>
          </Row>
          );
        })()}
        {hook.video_prompt&&<VideoPromptBlock text={hook.video_prompt} characters={hook.characters} isMobile={isMobile}/>}
        {hook.consumer_language_used?.length>0&&(
          <Row label="CONSUMER LANGUAGE" color={PURP}>
            <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
              {hook.consumer_language_used.map((p,i)=><PurpChip key={i} text={p}/>)}
            </div>
          </Row>
        )}

      </div>

    </div>
  );
}

function DataView(){
  const hD=[{t:"If you don't want to break down after 60, watch this.",p:2209,pat:"Fear / Urgency"},{t:"Excuse me, mam. You are exactly the person I was looking for...",p:1811,pat:"Street Intercept"},{t:"People always assume we're friends. Then I say 'mom, let's go' and they lose it.",p:1347,pat:"Age Confusion Drama"},{t:"Nobody talks about accelerated aging after menopause. Hear me out.",p:1214,pat:"Menopause Direct"},{t:"Women with a non-standard biology often age faster as a response to marketed miracle cures.",p:1109,pat:"Contrarian Reveal"},{t:"AI is honestly getting scary.",p:732,pat:"AI Intrigue"},{t:"Nobody — not a doctor, not a trainer — told me what was driving my fatigue.",p:629,pat:"Doctor Failed Me"},{t:"We were at a bar and a guy tried to buy us drinks. He then hit at my mother.",p:617,pat:"Social Proof Drama"}];
  const bD=[{t:"I spent three years thinking I just needed more discipline. More kale. More gym...",p:11247,pat:"Expert Confession"},{t:"Oh my God, that's your mom? She looks like she could be your sister!",p:3400,pat:"Dialogue Reveal"},{t:"I am a professional longevity expert and I've spent years studying the biology...",p:1247,pat:"Expert Authority Bridge"},{t:"I'm 51. Ten years ago I looked older than I do today...",p:440,pat:"Personal Transformation"},{t:"Last night was— / I know. / I'm fifty six. And you're thirty...",p:211,pat:"Romance Drama"}];
  return(
    <div style={{overflowY:"auto",padding:"24px 16px",maxWidth:860,margin:"0 auto"}}>
      <div style={{fontSize:10,letterSpacing:"0.14em",color:DIM,textTransform:"uppercase",marginBottom:24}}>Performance data · Historical hooks and bodies</div>
      <div style={{fontSize:9,fontWeight:800,letterSpacing:"0.14em",color:GOLD,marginBottom:14,textTransform:"uppercase"}}>Top hooks — by purchases</div>
      {hD.map((d,i)=>(
        <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start",padding:"10px 0",borderBottom:"1px solid "+BRD2}}>
          <div style={{minWidth:48,textAlign:"right",paddingTop:2,flexShrink:0}}><span style={{fontSize:12,fontWeight:800,color:GOLD}}>{d.p.toLocaleString()}</span></div>
          <div style={{flex:1}}><div style={{fontSize:11,color:GRAY,lineHeight:1.6,marginBottom:5}}>"{d.t.slice(0,90)+(d.t.length>90?"...":"")}"</div><GoldChip text={d.pat}/></div>
        </div>
      ))}
      <div style={{fontSize:9,fontWeight:800,letterSpacing:"0.14em",color:PURP,marginBottom:14,marginTop:32,textTransform:"uppercase"}}>Top bodies — by purchases</div>
      {bD.map((d,i)=>(
        <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start",padding:"10px 0",borderBottom:"1px solid "+BRD2}}>
          <div style={{minWidth:48,textAlign:"right",paddingTop:2,flexShrink:0}}><span style={{fontSize:12,fontWeight:800,color:PURP}}>{d.p.toLocaleString()}</span></div>
          <div style={{flex:1}}><div style={{fontSize:11,color:GRAY,lineHeight:1.6,marginBottom:5}}>"{d.t.slice(0,90)+(d.t.length>90?"...":"")}"</div><PurpChip text={d.pat}/></div>
        </div>
      ))}
    </div>
  );
}

function Instructions(){
  const steps=[
    {n:"01",t:"Format",c:GOLD,d:"Pick the video format. All four are equal: Studio Two Experts, Street Interview, Talking Head / UGC, Drama Dialogue. Studio Two Experts and Street Interview are the highest-proven formats from existing data."},
    {n:"02",t:"Mechanism",c:PURP,d:"The psychological trigger of the hook. Numbers are real purchase data. Select one or more — each hook is generated in a separate call and appears as it's ready. Expert Confession (11,247) is a body-pattern count, not a hook count."},
    {n:"03",t:"Cast",c:GOLD,d:"Assemble the cast: Main character (required) + Second character (optional) + Interviewer (merged into Second — pick off-camera voice or on-camera host). No fixed pairs. Solo hook = leave Second as None."},
    {n:"04",t:"Body Script",c:PURP,d:"Optional. Paste the body script this hook leads into — the model writes the hook so its final emotional beat connects to that body's opening. The body text is context only and never appears in the output."},
    {n:"05",t:"Pain Point",c:GOLD,d:"The viewer's exact internal pain in their own words. Use the chips (pulled from real consumer research) or write your own. The more specific, the better the hook."},
    {n:"06",t:"Video Prompt",c:PURP,d:"Every card includes a production-ready multishot prompt (~15s) for Kling 3.0 / Seedance 2.0. Shot-by-shot breakdown: camera angle, who speaks, verbatim line, emotion, action. 180° rule enforced. No product shown. Has its own COPY button."},
    {n:"07",t:"A/B Testing",c:GOLD,d:"Fix all params. Change only Mechanism between runs. This isolates the psychological trigger as the single variable. History tab stores all sessions so you can compare outputs across runs."},
    {n:"08",t:"History",c:PURP,d:"Every generation is saved automatically to the History tab with timestamp, params used, and full hook output. Stored locally in your browser. Survives page refresh. Max 50 sessions."},
  ];
  return(
    <div style={{maxWidth:640,margin:"0 auto",padding:"24px 16px",overflowY:"auto"}}>
      <div style={{fontSize:10,letterSpacing:"0.14em",color:DIM,textTransform:"uppercase",marginBottom:28}}>How to use</div>
      {steps.map((s,i)=>(
        <div key={s.n} style={{display:"flex",gap:16,paddingBottom:24,marginBottom:24,borderBottom:i<steps.length-1?"1px solid "+BRD2:"none"}}>
          <div style={{fontSize:28,fontWeight:900,color:"transparent",WebkitTextStroke:"1px "+s.c,letterSpacing:"-0.03em",lineHeight:1,minWidth:36,paddingTop:2,userSelect:"none",opacity:0.3}}>{s.n}</div>
          <div>
            <div style={{fontSize:11,fontWeight:700,color:s.c,letterSpacing:"0.1em",marginBottom:6,textTransform:"uppercase"}}>{s.t}</div>
            <div style={{fontSize:13,color:GRAY,lineHeight:1.75}}>{s.d}</div>
          </div>
        </div>
      ))}
    </div>
  );
}


function HistoryParamTag({text}){
  if(!text||text==="none")return null;
  return <span style={{fontSize:9,padding:"2px 7px",borderRadius:3,background:"rgba(255,255,255,0.06)",color:GRAY,letterSpacing:"0.06em",border:"1px solid #2a2a2a",whiteSpace:"nowrap"}}>{text.replace(/_/g," ")}</span>;
}

function HistoryEntry({entry,isMobile}){
  const [open,setOpen]=useState(false);
  const [copiedId,setCopiedId]=useState(null);
  const copyHook=(h)=>{navigator.clipboard.writeText(formatForCopy(h));setCopiedId(h.id);setTimeout(()=>setCopiedId(null),2000);};
  const sc=entry.params.secondCharacter;
  const hasSecond=sc&&sc!=="none";
  return(
    <div style={{border:"1px solid "+BRD,borderRadius:8,overflow:"hidden",marginBottom:10}}>
      <button onClick={()=>setOpen(v=>!v)} style={{width:"100%",background:open?GA(0.06):SURF2,border:"none",padding:"10px 14px",cursor:"pointer",textAlign:"left",display:"flex",alignItems:"center",justifyContent:"space-between",gap:8}}>
        <div style={{display:"flex",flexDirection:"column",gap:5,flex:1,minWidth:0}}>
          <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
            <span style={{fontSize:10,color:open?GOLD:GRAY,fontWeight:700,letterSpacing:"0.04em"}}>{fmtDate(entry.date)}</span>
            <span style={{fontSize:9,color:DIM}}>·</span>
            <span style={{fontSize:9,color:DIM}}>{entry.hooks.length} hook{entry.hooks.length!==1?"s":""}</span>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
            <HistoryParamTag text={entry.params.format}/>
            <HistoryParamTag text={labelOf(OPTIONS.characters,entry.params.mainCharacter)}/>
            {hasSecond&&<HistoryParamTag text={labelOf(OPTIONS.secondCharacters,sc)}/>}
            <HistoryParamTag text={entry.params.location}/>
          </div>
        </div>
        <span style={{color:open?GOLD:DIM,fontSize:12,flexShrink:0}}>{open?"▾":"▸"}</span>
      </button>
      {open&&(
        <div style={{padding:"12px",borderTop:"1px solid "+BRD2,display:"flex",flexDirection:"column",gap:10}}>
          {entry.hooks.map((hook,i)=>(
            <div key={i} style={{border:"1px solid "+BRD2,borderRadius:6,overflow:"hidden",background:SURF}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 12px",borderBottom:"1px solid "+BRD2,background:SURF2}}>
                <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                  <span style={{fontSize:14,fontWeight:900,color:"transparent",WebkitTextStroke:"1px "+PA(0.4),letterSpacing:"-0.03em",userSelect:"none"}}>{hook.id}</span>
                  <GoldChip text={hook.mechanism}/>
                  {hook.cta_type&&<GrayChip text={hook.cta_type}/>}
                </div>
                <button onClick={()=>copyHook(hook)} style={{padding:"4px 10px",background:copiedId===hook.id?GA(0.12):SURF,border:"1px solid "+(copiedId===hook.id?GOLD:BRD),borderRadius:4,color:copiedId===hook.id?GOLD:GRAY,fontSize:10,cursor:"pointer",fontWeight:700,minHeight:32,whiteSpace:"nowrap"}}>{copiedId===hook.id?"✓":"COPY"}</button>
              </div>
              <div style={{padding:"10px 12px",display:"flex",flexDirection:"column",gap:8}}>
                {hook.hook_line&&<p style={{margin:0,fontSize:12,color:"#f3f4f6",lineHeight:1.6,fontStyle:"italic"}}>"{hook.hook_line}"</p>}
                {hook.dialogue?.length>0&&(
                  <div style={{display:"flex",flexDirection:"column",gap:5}}>
                    {hook.dialogue.map((line,j)=>(
                      <div key={j} style={{display:"flex",gap:8,paddingLeft:8,borderLeft:"2px solid "+PA(0.35)}}>
                        <span style={{fontSize:9,fontWeight:800,color:PURP,textTransform:"uppercase",whiteSpace:"nowrap",minWidth:isMobile?60:80,paddingTop:2}}>{abbrevSpeaker(line.speaker)}</span>
                        <span style={{fontSize:11,color:GRAY,lineHeight:1.6}}>"{line.line}"</span>
                      </div>
                    ))}
                  </div>
                )}
                {hook.video_prompt&&(
                  <div style={{background:GA(0.04),border:"1px solid "+GA(0.2),borderRadius:5,padding:"8px 10px"}}>
                    <div style={{fontSize:9,color:GOLD,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:5,opacity:0.8}}>▶ Video Prompt</div>
                    <pre style={{margin:0,fontSize:10,color:"#d1d5db",lineHeight:1.6,whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:"inherit"}}>{hook.video_prompt}</pre>
                  </div>
                )}
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <span style={{fontSize:9,color:"#444",letterSpacing:"0.1em",textTransform:"uppercase"}}>Anchor</span>
                  <span style={{fontSize:10,padding:"2px 8px",borderRadius:12,background:PA(0.1),color:PURP,fontWeight:600}}>{hook.emotional_anchor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function HistoryView({history,onClear,isMobile}){
  if(history.length===0){
    return(
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:80,gap:12}}>
        <span style={{fontSize:32,opacity:0.15}}>◷</span>
        <span style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:DIM}}>No history yet</span>
        <span style={{fontSize:11,color:"#333"}}>Generated hooks will appear here</span>
      </div>
    );
  }
  return(
    <div style={{padding:isMobile?"14px":"24px 28px",maxWidth:860,margin:"0 auto",overflowY:"auto"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20}}>
        <span style={{fontSize:10,letterSpacing:"0.14em",color:DIM,textTransform:"uppercase"}}>{history.length} session{history.length!==1?"s":""}</span>
        <button onClick={onClear} style={{padding:"5px 12px",background:"transparent",border:"1px solid #333",borderRadius:4,color:"#555",fontSize:10,cursor:"pointer",letterSpacing:"0.08em",textTransform:"uppercase"}}>Clear history</button>
      </div>
      {history.map((entry)=><HistoryEntry key={entry.id} entry={entry} isMobile={isMobile}/>)}
    </div>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────

export default function HookBook(){
  const [form,setForm]=useState({format:"studio_two_experts",mechanisms:["expert_confession","contrarian_reveal"],mainCharacter:"longevity_expert",secondCharacter:"botox_girl",painPoint:"",location:"studio_interview_set",tone:"quietly_shocking",hookLength:"standard_15s",bodyScript:"",count:3});
  const [history,setHistory]=useState([]);
  const [hooks,setHooks]=useState([]);
  const [loading,setLoading]=useState(false);
  const [done,setDone]=useState(0);
  const [error,setError]=useState(null);
  const [tab,setTab]=useState("generator");
  const [copiedId,setCopiedId]=useState(null);
  const [showBody,setShowBody]=useState(false);
  const [paramsOpen,setParamsOpen]=useState(false);
  const [isMobile,setIsMobile]=useState(false);

  useEffect(()=>{
    setIsMobile(window.innerWidth<640);
    setHistory(loadHistory());
    const handler=()=>setIsMobile(window.innerWidth<640);
    window.addEventListener("resize",handler);
    return()=>window.removeEventListener("resize",handler);
  },[]);

  const clearHistory=()=>{setHistory([]);saveHistory([]);};
  const togMech=v=>setForm(f=>({...f,mechanisms:f.mechanisms.includes(v)?f.mechanisms.filter(m=>m!==v):[...f.mechanisms,v]}));
  const setPain=t=>setForm(f=>({...f,painPoint:f.painPoint===t?"":t}));

  async function generate(){
    if(!form.mechanisms.length){setError("Select at least one mechanism.");return;}
    setError(null);setLoading(true);setHooks([]);setDone(0);
    if(isMobile)setParamsOpen(false);
    const results=[];
    let lastErr=null;
    for(let i=0;i<form.count;i++){
      try{
        const used=results.map(h=>h.mechanism).filter(Boolean);
        const res=await fetch("/api/messages",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({
            model:"claude-sonnet-4-6",
            max_tokens:1500,
            messages:[{role:"user",content:SYSTEM_PROMPT+"\n\n---\n\n"+buildUserPrompt(form,used)}]
          }),
        });
        const text=await res.text();
        if(!res.ok){
          let errMsg="HTTP "+res.status;
          try{const e=JSON.parse(text);errMsg+=": "+(e?.error?.message||e?.error||text.slice(0,120));}
          catch{errMsg+=": "+text.slice(0,120);}
          throw new Error(errMsg);
        }
        let data;
        try{data=JSON.parse(text);}
        catch{throw new Error("Response not JSON: "+text.slice(0,120));}
        const raw=(data.content||[]).map(b=>b.text||"").join("");
        if(!raw){throw new Error("Empty content. Keys: "+Object.keys(data).join(", "));}
        const m=raw.match(/\[[\s\S]*\]|\{[\s\S]*\}/);
        if(m){
          let parsed;
          try{parsed=JSON.parse(m[0]);}
          catch{throw new Error("JSON parse error in hook. Raw: "+m[0].slice(0,100));}
          const arr=Array.isArray(parsed)?parsed:[parsed];
          arr.forEach((h,j)=>{h.id="H"+(results.length+j+1);results.push(h);});
          setHooks([...results]);
          setDone(results.length);
        } else {
          throw new Error("No JSON in response: "+raw.slice(0,150));
        }
      }catch(e){lastErr=e.message||"unknown";}
    }
    if(results.length>0){
      const entry={id:Date.now(),date:new Date().toISOString(),params:{format:form.format,mechanisms:form.mechanisms,mainCharacter:form.mainCharacter,secondCharacter:form.secondCharacter,location:form.location},hooks:results};
      const newHistory=[entry,...history].slice(0,50);
      setHistory(newHistory);
      saveHistory(newHistory);
    } else {
      setError(lastErr||"Generation failed — try again");
    }
    setLoading(false);
  }

  function copyHook(h){navigator.clipboard.writeText(formatForCopy(h));setCopiedId(h.id);setTimeout(()=>setCopiedId(null),2000);}

  const selStyle=(active,color,mobile)=>({
    padding:mobile?"11px 10px":"7px 10px",
    borderRadius:4,
    border:"1px solid "+(active?color:BRD),
    background:active?(color===GOLD?GA(0.1):PA(0.1)):"transparent",
    color:active?color:DIM,
    fontSize:11,
    cursor:"pointer",
    textAlign:"left",
    transition:"all 0.15s",
    minHeight:mobile?44:undefined,
  });

  const ParamsContent = (
    <div style={{display:"flex",flexDirection:"column",gap:14}}>
      <div><Lbl text="FORMAT" color={GOLD}/><Sel options={OPTIONS.formats} value={form.format} onChange={v=>setForm(f=>({...f,format:v}))} isMobile={isMobile}/></div>

      <div>
        <Lbl text="MECHANISM" sub="sorted by purchases" color={PURP}/>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr 1fr":"1fr",gap:3}}>
          {OPTIONS.mechanisms.map(m=>{
            const a=form.mechanisms.includes(m.value);
            return <button key={m.value} onClick={()=>togMech(m.value)} style={{...selStyle(a,PURP,isMobile),display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <span style={{fontSize:isMobile?10:11}}>{m.label}</span>
              <span style={{fontSize:9,color:a?PURP:"#333",fontWeight:700,marginLeft:4}}>{m.badge}</span>
            </button>;
          })}
        </div>
        <div style={{fontSize:9,color:"#333",marginTop:4}}>* body pattern count</div>
      </div>

      <div><Lbl text="MAIN CHARACTER" color={GOLD}/><Sel options={OPTIONS.characters} value={form.mainCharacter} onChange={v=>setForm(f=>({...f,mainCharacter:v}))} isMobile={isMobile}/></div>
      <div><Lbl text="SECOND CHARACTER" sub="optional" color={PURP}/><Sel options={OPTIONS.secondCharacters} value={form.secondCharacter} onChange={v=>setForm(f=>({...f,secondCharacter:v}))} isMobile={isMobile}/></div>
      <div><Lbl text="LOCATION" color={PURP}/><Sel options={OPTIONS.locations} value={form.location} onChange={v=>setForm(f=>({...f,location:v}))} isMobile={isMobile}/></div>
      <div><Lbl text="EMOTIONAL TONE" color={PURP}/><Sel options={OPTIONS.tones} value={form.tone} onChange={v=>setForm(f=>({...f,tone:v}))} isMobile={isMobile}/></div>
      <div><Lbl text="HOOK LENGTH" color={GOLD}/><Sel options={OPTIONS.hookLengths} value={form.hookLength} onChange={v=>setForm(f=>({...f,hookLength:v}))} isMobile={isMobile}/></div>

      <div>
        <Lbl text="PAIN POINT" sub="preset or custom" color={PURP}/>
        <select value={PAIN_CHIPS.find(c=>c.text===form.painPoint)?.label||"__custom__"} onChange={e=>{const chip=PAIN_CHIPS.find(c=>c.label===e.target.value);if(chip){setForm(f=>({...f,painPoint:chip.text}));}else{setForm(f=>({...f,painPoint:""}))}}} style={{width:"100%",background:SURF,border:"1px solid "+BRD,borderRadius:6,color:TXT,padding:isMobile?"10px 10px":"8px 10px",fontSize:11,cursor:"pointer",fontFamily:"inherit",outline:"none",marginBottom:8,minHeight:isMobile?44:undefined}}>
          <option value="__custom__">— Select or write custom —</option>
          {PAIN_CHIPS.map(c=><option key={c.label} value={c.label}>{c.label}</option>)}
        </select>
        <textarea value={form.painPoint} onChange={e=>setForm(f=>({...f,painPoint:e.target.value}))} rows={2} placeholder="Or type custom pain point..." style={{width:"100%",background:SURF,border:"1px solid "+BRD,borderRadius:6,color:TXT,padding:"8px 10px",fontSize:11,resize:"vertical",fontFamily:"inherit",boxSizing:"border-box",lineHeight:1.6,outline:"none"}}/>
      </div>

      <div>
        <Lbl text="BODY SCRIPT" sub="optional · context only" color={GOLD}/>
        <button onClick={()=>setShowBody(v=>!v)} style={{width:"100%",padding:"8px 10px",background:"transparent",border:"1px solid "+(showBody?GOLD:BRD),borderRadius:4,color:showBody?GOLD:DIM,fontSize:11,cursor:"pointer",textAlign:"left",marginBottom:showBody?8:0,minHeight:isMobile?44:undefined}}>
          {showBody?"▾ hide body script":"▸ paste body to bridge into"}
        </button>
        {showBody&&(
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            <select onChange={e=>{const p=BODY_PRESETS.find(b=>b.label===e.target.value);if(p&&p.text)setForm(f=>({...f,bodyScript:p.text}));}} style={{width:"100%",background:SURF,border:"1px solid "+BRD,borderRadius:6,color:TXT,padding:isMobile?"10px":"8px 10px",fontSize:11,cursor:"pointer",fontFamily:"inherit",outline:"none",minHeight:isMobile?44:undefined}}>
              {BODY_PRESETS.map(b=><option key={b.label} value={b.label}>{b.label}</option>)}
            </select>
            <textarea value={form.bodyScript} onChange={e=>setForm(f=>({...f,bodyScript:e.target.value}))} rows={4} placeholder="Selected body will appear here — or write custom..." style={{width:"100%",background:SURF,border:"1px solid "+BRD,borderRadius:6,color:TXT,padding:"8px 10px",fontSize:11,resize:"vertical",fontFamily:"inherit",boxSizing:"border-box",lineHeight:1.6,outline:"none"}}/>
          </div>
        )}
      </div>

      <div>
        <Lbl text="COUNT" color={PURP}/>
        <div style={{display:"flex",gap:5}}>
          {[1,2,3,4,5,6].map(n=><button key={n} onClick={()=>setForm(f=>({...f,count:n}))} style={{width:isMobile?44:32,height:isMobile?44:30,borderRadius:4,border:"1px solid "+(form.count===n?PURP:BRD),background:form.count===n?PA(0.12):"transparent",color:form.count===n?PURP:DIM,fontSize:12,cursor:"pointer",transition:"all 0.15s",fontWeight:form.count===n?700:400}}>{n}</button>)}
        </div>
      </div>

      {!isMobile&&(
        <>
          <button onClick={generate} disabled={loading} style={{width:"100%",padding:"11px",background:loading?SURF2:GOLD,color:loading?DIM:"#000",border:"none",borderRadius:6,fontSize:12,fontWeight:800,cursor:loading?"not-allowed":"pointer",letterSpacing:"0.1em",textTransform:"uppercase",transition:"all 0.2s"}}>
            {loading?"GENERATING…":"GENERATE HOOKS"}
          </button>
          <button onClick={()=>{setHooks(DEMO_HOOKS);setError(null);setLoading(false);}} style={{width:"100%",padding:"9px",background:"transparent",color:PURP,border:"1px solid "+PA(0.4),borderRadius:6,fontSize:11,fontWeight:600,cursor:"pointer",letterSpacing:"0.08em",textTransform:"uppercase"}}>
            DEMO MODE
          </button>
        </>
      )}
      {error&&<div style={{color:"#ff6b6b",fontSize:11,textAlign:"center",lineHeight:1.5,wordBreak:"break-word"}}>{error}</div>}
    </div>
  );

  const TabBar = ({fullWidth}) => (
    <div style={{display:"flex",borderRadius:fullWidth?0:6,overflow:"hidden",border:"1px solid "+BRD,width:fullWidth?"100%":undefined}}>
      {["generator","history","data","instructions"].map(t=>(
        <button key={t} onClick={()=>setTab(t)} style={{flex:fullWidth?1:undefined,padding:"8px 16px",background:tab===t?GA(0.1):"transparent",color:tab===t?GOLD:DIM,border:"none",cursor:"pointer",fontSize:11,textTransform:"capitalize",letterSpacing:"0.06em",transition:"all 0.15s",fontWeight:tab===t?700:400,minHeight:fullWidth?44:undefined}}>{t}</button>
      ))}
    </div>
  );

  // ── MOBILE LAYOUT ──────────────────────────────────────────────────────
  if(isMobile){
    return(
      <div style={{minHeight:"100vh",background:BG,color:TXT,fontFamily:"'Inter',system-ui,sans-serif",display:"flex",flexDirection:"column"}}>
        <header style={{borderBottom:"1px solid "+BRD,padding:"10px 14px",background:BG,flexShrink:0}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
            <Logo/>
          </div>
          <TabBar fullWidth={true}/>
        </header>

        {tab==="data"?<div style={{flex:1,overflowY:"auto"}}><DataView/></div>
        :tab==="history"?<div style={{flex:1,overflowY:"auto"}}><HistoryView history={history} onClear={clearHistory} isMobile={true}/></div>
        :tab==="instructions"?<div style={{flex:1,overflowY:"auto"}}><Instructions/></div>
        :(
          <div style={{flex:1,display:"flex",flexDirection:"column",minHeight:0,position:"relative"}}>
            <div style={{padding:"8px 14px",borderBottom:"1px solid "+BRD2,flexShrink:0,background:BG}}>
              <button onClick={()=>setParamsOpen(v=>!v)} style={{width:"100%",padding:"10px",background:paramsOpen?GA(0.08):"transparent",border:"1px solid "+(paramsOpen?GOLD:BRD),borderRadius:6,color:paramsOpen?GOLD:DIM,fontSize:11,fontWeight:700,cursor:"pointer",letterSpacing:"0.1em",textTransform:"uppercase",minHeight:44}}>
                {paramsOpen?"▾ HIDE PARAMS":"▸ PARAMS"}
              </button>
            </div>

            {paramsOpen&&(
              <div style={{padding:"14px 14px 80px 14px",borderBottom:"1px solid "+BRD,background:BG,overflowY:"auto",flex:1}}>
                {ParamsContent}
              </div>
            )}

            {(!paramsOpen||hooks.length>0||loading)&&(
            <div style={{flex:1,overflowY:"auto",padding:"14px",paddingBottom:110}}>
              {loading&&hooks.length===0&&<Spinner count={form.count} done={done}/>}
              {!loading&&hooks.length===0&&!paramsOpen&&<Empty/>}
              {hooks.map((hook,i)=><HookCard key={hook.id||i} hook={hook} onCopy={()=>copyHook(hook)} copied={copiedId===hook.id} isMobile={true}/>)}
              {loading&&hooks.length>0&&(
                <div style={{textAlign:"center",padding:"16px 0",color:DIM,fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase"}}>
                  {done} of {form.count} · generating next…
                </div>
              )}
              {error&&<div style={{color:"#ff6b6b",fontSize:11,textAlign:"center",lineHeight:1.5,padding:"8px 0",wordBreak:"break-word"}}>{error}</div>}
            </div>
            )}

            <div style={{position:"fixed",bottom:0,left:0,right:0,zIndex:100,background:BG,borderTop:"1px solid "+BRD,padding:"6px 14px",display:"flex",gap:8}}>
              <button onClick={generate} disabled={loading} style={{flex:1,padding:"9px",background:loading?SURF2:GOLD,color:loading?DIM:"#000",border:"none",borderRadius:6,fontSize:11,fontWeight:800,cursor:loading?"not-allowed":"pointer",letterSpacing:"0.1em",textTransform:"uppercase",minHeight:38}}>
                {loading?"GENERATING…":"GENERATE HOOKS"}
              </button>
              <button onClick={()=>{setHooks(DEMO_HOOKS);setError(null);setLoading(false);setParamsOpen(false);}} style={{padding:"8px 14px",background:"transparent",color:PURP,border:"1px solid "+PA(0.4),borderRadius:6,fontSize:11,fontWeight:600,cursor:"pointer",letterSpacing:"0.06em",textTransform:"uppercase",minHeight:38,whiteSpace:"nowrap"}}>
                DEMO
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── DESKTOP LAYOUT ─────────────────────────────────────────────────────
  return(
    <div style={{minHeight:"100vh",background:BG,color:TXT,fontFamily:"'Inter',system-ui,sans-serif",display:"flex",flexDirection:"column"}}>
      <header style={{borderBottom:"1px solid "+BRD,padding:"12px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",background:BG,flexShrink:0}}>
        <Logo/>
        <TabBar fullWidth={false}/>
      </header>

      {tab==="data"?<DataView/>:tab==="history"?<HistoryView history={history} onClear={clearHistory} isMobile={false}/>:tab==="instructions"?<Instructions/>:(
        <div style={{display:"flex",flex:1,overflow:"hidden",minHeight:0}}>
          <aside style={{width:310,flexShrink:0,borderRight:"1px solid "+BRD,overflowY:"auto",padding:"18px 14px",background:BG}}>
            {ParamsContent}
          </aside>
          <main style={{flex:1,overflowY:"auto",padding:"24px 28px"}}>
            {loading&&hooks.length===0&&<Spinner count={form.count} done={done}/>}
            {!loading&&hooks.length===0&&<Empty/>}
            {hooks.map((hook,i)=><HookCard key={hook.id||i} hook={hook} onCopy={()=>copyHook(hook)} copied={copiedId===hook.id} isMobile={false}/>)}
            {loading&&hooks.length>0&&(
              <div style={{textAlign:"center",padding:"20px 0",color:DIM,fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase"}}>
                {done} of {form.count} · generating next…
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}
